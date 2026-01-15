import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "يجب أن يكون الاسم حرفين على الأقل")
    .max(100, "يجب ألا يتجاوز الاسم 100 حرف")
    .regex(/^[\u0600-\u06FFa-zA-Z\s]+$/, "الاسم يجب أن يحتوي على حروف فقط"),

  email: z
    .string()
    .email("يرجى إدخال بريد إلكتروني صحيح")
    .min(1, "البريد الإلكتروني مطلوب"),

  phoneNumber: z
    .string()
    .min(1, "رقم الهاتف مطلوب")
    .refine((value) => value && value.length > 0, {
      message: "يرجى إدخال رقم هاتف صحيح",
    }),

  serviceType: z
    .string()
    .min(1, "يرجى اختيار نوع الخدمة"),

  preferredTime: z
    .string()
    .min(1, "يرجى اختيار الوقت المفضل"),

  description: z
    .string()
    .max(500, "يجب ألا يتجاوز الوصف 500 حرف")
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
