import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Địa chỉ email không hợp lệ" }),
  password: z
    .string()
    .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
});

export const registerSchema = z
  .object({
    username: z.string()
      .min(3, { message: "Tên người dùng phải có ít nhất 3 ký tự" })
      .regex(
        /^[a-zA-Z0-9]+$/,
        {
          message: "Tên người dùng chỉ được bao gồm chữ cái và số",
        }
      ),
    email: z.string().email({ message: "Địa chỉ email không hợp lệ" }),
    password: z
      .string()
      .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Mật khẩu xác nhận phải có ít nhất 6 ký tự" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"],
  });