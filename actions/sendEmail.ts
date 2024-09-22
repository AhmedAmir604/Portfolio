"use server";

import { Resend } from "resend";
import { formValidator } from "@/lib/utils";
import { ErrorMessage } from "@/lib/utils";
import EmailTemplate from "@/email/emailTemp";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formData: FormData) => {
  console.log(formData.get("senderEmail"));
  console.log(formData.get("Message"));
  const email = formData.get("senderEmail");
  const message = formData.get("message");

  if (!formValidator(email, 500)) {
    return { error: "Invalid email" };
  }
  if (!formValidator(message, 5000)) {
    return { error: "Invalid message" };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ahmedaamir604@gmail.com",
      subject: "message",
      text: message as string,
      reply_to: email as string,
      react: EmailTemplate({
        message: message as string,
        email: email as string,
      }),
    });
  } catch (error: unknown) {
    return { error: ErrorMessage(error) };
  }
  return { data };
};
