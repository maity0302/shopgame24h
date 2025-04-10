"use server";

import { z } from "zod";
import { loginSchema } from "@/lib/validations/auth";

// Placeholder for a hypothetical login API function
async function loginUser(email: string, password: string): Promise<{ isSuccess: boolean; message: string }> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Simulate API logic
  if (email === "error" || password === "error") {
    return { isSuccess: false, message: "Sai Email hoặc mật khẩu" };
  }
  return { isSuccess: true, message: "Đăng nhập thành công!" };
}

export async function login(data: z.infer<typeof loginSchema>) {
  const { email, password } = data;
  console.log("Login data:", { email, password });
  
  // Call the hypothetical login API
  const result = await loginUser(email, password);
  
  // Return the result from the API
  return { isSuccess: result.isSuccess, message: result.message };
}

