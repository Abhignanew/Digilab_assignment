import { NextRequest, NextResponse } from 'next/server';

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const DEFAULT_SENDER = {
  name: 'Your Company',
  email: 'smabhigna378@gmail.com',
};

type EmailType = 'transactional' | 'bulk';

export async function POST(req: NextRequest) {
  try {
    if (!BREVO_API_KEY) {
      return NextResponse.json({ error: 'BREVO_API_KEY not set' }, { status: 500 });
    }

    const body = await req.json();
    const { type, to, recipients, subject, htmlContent, sender } = body;

    // Basic validation
    if (!subject || !htmlContent || (!to && !recipients)) {
      return NextResponse.json(
        { error: 'Missing required fields: to/recipients, subject, htmlContent' },
        { status: 400 }
      );
    }

    const finalSender = sender || DEFAULT_SENDER;
    const toList =
      type === 'bulk'
        ? recipients.map((email: string) => ({ email }))
        : [{ email: to, name: to.split('@')[0] }];

    const payload = {
      sender: finalSender,
      to: toList,
      subject,
      htmlContent,
    };

    const res = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Brevo API Error', details: data },
        { status: res.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: `${type === 'bulk' ? 'Bulk' : 'Transactional'} email sent successfully`,
      data,
    });
  } catch (err: any) {
    console.error('Email send error:', err);
    return NextResponse.json(
      { error: 'Unexpected server error', details: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'OK',
    message: 'Newsletter API is running',
    usage: {
      type: 'transactional | bulk',
      required: ['subject', 'htmlContent'],
      conditional: {
        transactional: ['to'],
        bulk: ['recipients[]'],
      },
    },
  });
}
