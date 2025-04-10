// src/app/actions/register.ts
"use server";

import { z } from "zod";
import { registerSchema } from "@/lib/validations/auth";


async function registerUser(data:z.infer<typeof registerSchema>): Promise<{ isSuccess: boolean; message: string }> {
    // Simulate API call
    console.log("API call to registerUser with data:", data);
    // Simulate success or failure based on email (for demonstration)
    const isSuccess = data.email !== "error@example.com";
    const message = isSuccess ? "Đăng ký thành công" : "Đăng ký thất bại";
    return { isSuccess, message };
}

export async function register(
    data: z.infer<typeof registerSchema>
  ): Promise<{
  isSuccess: boolean;
  message: string;
}> {
  
  try {
    const response = await registerUser(data);
    return { isSuccess: response.isSuccess, message: response.message };
  } catch (error) {
    return { isSuccess: false, message: "Registration failed" };
  }
}
