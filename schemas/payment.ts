import { z } from "zod";

export const paymentSchema = z.object({
  phone: z.string(),
  amount: z.number().positive(),
});

export type PaymentInput = z.infer<typeof paymentSchema>;