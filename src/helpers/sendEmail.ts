import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "../types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string,
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Anonino <verify@anonino.site>",
      to: email,
      subject: "Anonino Verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return { success: true, message: "Verification email send successfully." };
  } catch (err) {
    console.log("Error sending verification email", err);
    return { success: false, message: "Failed to send verification email" };
  }
}
