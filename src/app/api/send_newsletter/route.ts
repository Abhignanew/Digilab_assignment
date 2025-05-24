import { NextResponse } from 'next/server';
import { sendTestEmail } from '../../../lib/email/sendEmail';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const result = await sendTestEmail(email);

  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json({ message: 'Email sent!' });
}
