'use server';

import { loginSchema } from "@/schemas/auth";

export async function handleLogin(prevState: unknown, formData: FormData) {
  // Convert FormData to a standard object
  const rawData = Object.fromEntries(formData.entries());
  
  // Validate data against the schema
  const validatedFields = loginSchema.safeParse(rawData);

  // If validation fails, return structured errors to the UI
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Proceed with backend logic using the typed data
  const { email, password } = validatedFields.data;
  
  return { success: true, message: "Logged in successfully!" };
}
