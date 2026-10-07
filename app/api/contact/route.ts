import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (message.length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // NOTE: no email provider is wired up yet. To actually deliver messages,
  // plug in a service such as Resend (https://resend.com) or Nodemailer here,
  // e.g. `await resend.emails.send({ ... })`, using an API key stored in
  // an environment variable.
  console.log("New portfolio contact message:", { name, email, message });

  return NextResponse.json({ ok: true });
}
