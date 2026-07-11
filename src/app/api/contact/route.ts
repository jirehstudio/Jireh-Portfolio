import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { escapeHtml } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const { name, email, company, message, botField } = await request.json();

    // 1. Honeypot check (silently ignore spam submissions)
    if (botField) {
      console.warn("Spam submission blocked via honeypot.");
      return NextResponse.json({ success: true });
    }

    // 2. Presence validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // 3. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // 4. Sanitize inputs to prevent HTML Injection
    const safeName = escapeHtml(name.trim());
    const safeEmail = email.trim(); // Email is validated by regex, but good practice
    const safeCompany = company ? escapeHtml(company.trim()) : "";
    const safeMessage = escapeHtml(message.trim());

    // 5. Send both emails concurrently
    await Promise.all([
      // Confirmation email to the submitter
      resend.emails.send({
        from: "Jireh Studio <hello@jireh.studio>", // Note: Domain must be verified in Resend dashboard
        to: safeEmail,
        subject: "Thank you for reaching out! - Jireh Studio",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a; line-height: 1.6;">
            <h2 style="color: #00e0d8;">Hi ${safeName},</h2>
            <p>Thank you for reaching out to Jireh Studio. We've received your project brief and our team is already reviewing it!</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <h3 style="color: #555;">Summary of your brief:</h3>
            <p><strong>Company:</strong> ${safeCompany || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 6px; font-style: italic; border-left: 4px solid #00e0d8;">
              "${safeMessage}"
            </div>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p>We typically review all details and respond with a fixed-scope discovery proposal within one business day.</p>
            <p>Best regards,<br/><strong>The Jireh Studio Team</strong></p>
          </div>
        `,
      }),

      // Notification email to the studio
      resend.emails.send({
        from: "Jireh System <hello@jireh.studio>",
        to: "hello@jireh.studio",
        subject: `New project brief from ${safeName} (${safeCompany || "No Company"})`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a; line-height: 1.6;">
            <h2>New Project Brief Submitted</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Company:</strong> ${safeCompany || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #333;">
              ${safeMessage.replace(/\n/g, "<br/>")}
            </div>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email via Resend:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
