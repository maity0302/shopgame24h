"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import { registerSchema } from "@/lib/validations/auth"
import { register } from "@/app/actions/register"
import Link from "next/link";

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
   const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    shouldUseNativeValidation: true
  })

  const onSubmit: SubmitHandler<z.infer<typeof registerSchema>> = async (data) => {
    const result = await register(data);
    if(!result.isSuccess){
       form.setError("root",{
        message: result.message,
      })
      return
    }
     form.setError("root",{
      message: result.message,
    })
    form.reset()
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Đăng ký</CardTitle>
          <CardDescription>
            Nhập thông tin của bạn để tạo tài khoản
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên người dùng</FormLabel>
                    <FormControl>
                      <Input placeholder="Tên người dùng" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="user@shopgame24.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Xác nhận mật khẩu</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormMessage/>

              <Button
                type="submit"
                className="w-full dark:bg-primary dark:text-primary-foreground hover:dark:bg-primary/90"
                >
                 Đăng ký
              </Button>
             <div className="mt-4 text-center text-sm">
                Đã có tài khoản?{" "} 
                <Link href="/login" className="underline underline-offset-4">
                    Đăng nhập
                </Link>
            </div>
          </form>
          </Form>
         
        </CardContent>
      </Card>
    </div>
  );
}