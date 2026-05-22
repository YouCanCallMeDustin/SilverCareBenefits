import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

// Define schema for contact submission validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Phone number must be at least 10 characters."),
  email: z.string().email("Invalid email address."),
  serviceRequested: z.enum(["notary", "ron", "medicare", "other"]),
  message: z.string().min(5, "Message must be at least 5 characters."),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // 1. Server-side Validation
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, phone, email, serviceRequested, message } = validation.data;

    // 2. Database logging (wrapped in try/catch to prevent failure if DB is not initialized)
    let savedToDb = false;
    try {
      if (process.env.DATABASE_URL) {
        await db.contactSubmission.create({
          data: {
            name,
            phone,
            email,
            serviceRequested,
            message,
          },
        });
        savedToDb = true;
      }
    } catch (dbError) {
      console.warn("Prisma Database connection failed. Continuing submission. Error:", dbError);
    }

    // 3. Email Notification (via Resend)
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.NOTIFICATION_EMAIL || "info@silvercarebenefits.com";
    
    let emailSent = false;
    
    if (resendApiKey && resendApiKey !== "re_123456789abcdef") {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Silver Care Benefits <notifications@silvercarebenefits.com>",
            to: [toEmail],
            subject: `New Contact Submission: ${serviceRequested.toUpperCase()} - ${name}`,
            html: `
              <h2>New Lead Received</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Service Requested:</strong> ${serviceRequested}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-line; background-color: #f5f5f5; padding: 15px; border-radius: 8px;">${message}</p>
              <hr />
              <p style="font-size: 11px; color: #888;">Logged to database: ${savedToDb ? "YES" : "NO"}</p>
            `,
          }),
        });

        if (response.ok) {
          emailSent = true;
        } else {
          const errData = await response.json();
          console.error("Resend API rejected request:", errData);
        }
      } catch (emailError) {
        console.error("Failed to send email notification via Resend:", emailError);
      }
    } else {
      // Dev mode: log the lead detail directly to console
      console.log(`
=========================================
[DEV MODE] LEAD SUBMISSION RECEIVED
-----------------------------------------
Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${serviceRequested}
Message: ${message}
Database Saved: ${savedToDb ? "YES" : "NO"}
Notification Email Target: ${toEmail}
=========================================
      `);
      emailSent = true; // Mark as true to indicate simulated success
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message successfully submitted.",
        dbSaved: savedToDb,
        notificationSent: emailSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Internal Server Error in contact API route:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
