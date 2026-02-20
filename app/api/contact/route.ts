import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    // Extract IP address from request headers (works on Vercel)
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : req.headers.get("x-real-ip") || "IP not available";

    // Extract user agent for spam detection
    const userAgent = req.headers.get("user-agent") || "Unknown";

    // NOTE: In production, configure a verified domain in Resend
    // Replace 'onboarding@resend.dev' with your verified domain email
await resend.emails.send({
  from: "Portfolio Contact <contact@researchmate.me>",
  to: "miteshgupta2711@gmail.com",
  subject: `New Portfolio Message from ${name}`,
  replyTo: email,
  html: `
  <div style="background-color:#f4f4f5;padding:40px 0;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
      
      <!-- Header -->
      <div style="background:linear-gradient(90deg,#f8d101,#ffd84d);padding:20px 30px;">
        <h2 style="margin:0;font-size:20px;color:#121212;font-weight:700;">
          New Portfolio Inquiry
        </h2>
      </div>

      <!-- Body -->
      <div style="padding:30px;">
        
        <p style="margin:0 0 20px 0;color:#262626;font-size:14px;">
          You have received a new message from your portfolio contact form.
        </p>

        <div style="margin-bottom:20px;">
          <p style="margin:0;font-size:13px;color:#666;">Name</p>
          <p style="margin:4px 0 0 0;font-size:15px;font-weight:600;color:#121212;">
            ${name}
          </p>
        </div>

        <div style="margin-bottom:20px;">
          <p style="margin:0;font-size:13px;color:#666;">Email</p>
          <p style="margin:4px 0 0 0;font-size:15px;font-weight:600;color:#121212;">
            ${email}
          </p>
        </div>

        <div style="margin-bottom:10px;">
          <p style="margin:0;font-size:13px;color:#666;">Message</p>
          <div style="margin-top:8px;padding:16px;background:#f9fafb;border-radius:12px;border:1px solid #eee;color:#262626;font-size:14px;line-height:1.6;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>

        <!-- Sender Information -->
        <div style="margin-top:20px;padding:12px;background:#f3f4f6;border-radius:8px;font-size:12px;color:#555;">
          <strong>Sender IP:</strong> ${ip}
        </div>
        <div style="margin-top:8px;padding:12px;background:#f3f4f6;border-radius:8px;font-size:12px;color:#777;">
          <strong>User Agent:</strong> ${userAgent}
        </div>

      </div>

      <!-- Footer -->
      <div style="padding:20px 30px;border-top:1px solid #eee;background:#fafafa;font-size:12px;color:#888;text-align:center;">
        This message was sent via your portfolio contact form.
      </div>

    </div>
  </div>
  `,
});


    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ error: "Email failed to send" }, { status: 500 });
  }
}
