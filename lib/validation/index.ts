import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  role: z.string({ required_error: "Please select your role." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const LoginSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});
