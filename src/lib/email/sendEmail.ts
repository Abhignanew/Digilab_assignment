import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY!);
const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  throw new Error("API key is missing");
}

export const sendTestEmail = async (email: string) => {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Welcome to our Newsletter!',
      html: '<strong>Thank you for subscribing.</strong>',
    });

    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message || 'Unknown error' };
  }
};

