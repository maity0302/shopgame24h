"use client"
import { useState } from "react";
import { cn } from "@/lib/utils";
import { login } from "@/app/actions/login";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/validations/auth";
import Link from "next/link";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  
  const form = useForm<typeof loginSchema._type>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isPending, startTransition] = useState<boolean>(false);

  return (
    <form action={async (formData: FormData) => {
      startTransition(true);
       const result = await login({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      });
      if (!result.isSuccess) {
        toast.error("Đăng nhập thất bại", {
          description: result.message,
        })
      } else {
        toast.success(result.message)
        form.reset();
      }
      startTransition(false);

    }}>
    <div className={cn("flex flex-col gap-6", className)} {...props}>
       <Card >
         <CardHeader>
           <CardTitle>Đăng nhập</CardTitle>
           <CardDescription >
            Nhập email của bạn để đăng nhập vào tài khoản
          </CardDescription>
         </CardHeader>
         <CardContent className="space-y-2">
          <Form {...form}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="email">Email</Label>
                    <FormControl>
                       <Input
                         id="email"
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
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Mật khẩu</Label>
                       <a
                         href="#"
                         className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                       >
                         Quên mật khẩu?
                       </a>
                     </div>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-6">
                <Button type="submit" className="w-full" disabled={isPending}>
                  Đăng nhập
                 </Button>
              </div>
               <div className="mt-4 text-center text-sm">
                 Chưa có tài khoản?{" "}
                 <Link href="/register" className="underline underline-offset-4">
                   Đăng ký
                </Link>
              </div>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
    </form>

  );
}


