import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST() {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'shrestharajan726@gmail.com',
    subject: 'Hello World',
    react: <WelcomeTemplate />
  });

  return
}