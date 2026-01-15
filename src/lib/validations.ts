import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "يجب أن يكون الاسم حرفين على الأقل")
    .max(100, "يجب ألا يتجاوز الاسم 100 حرف")
    .regex(/^[\u0600-\u06FFa-zA-Z\s]+$/, "الاسم يجب أن يحتوي على حروف فقط"),

  phone: z
    .string()
    .regex(/^05\d{8}$/, "يرجى إدخال رقم جوال سعودي صحيح (05XXXXXXXX)"),

  service: z
    .string()
    .min(1, "يرجى اختيار نوع الخدمة"),

  message: z
    .string()
    .max(500, "يجب ألا تتجاوز الرسالة 500 حرف")
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
