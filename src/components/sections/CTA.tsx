import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Loader2, CheckCircle2 } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import ar from "react-phone-number-input/locale/ar";
import "react-phone-number-input/style.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import SectionHeading from "@/components/shared/SectionHeading";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { submitContactForm } from "@/services/contactService";
import { useToast } from "@/hooks/use-toast";
import { CONTENT } from "@/lib/content";
import ctaBackground from "@/assets/images/questions.webp";

const CTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      serviceType: "",
      preferredTime: "",
      description: "",
    },
  });

  const description = form.watch("description");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await submitContactForm(data);

      if (response.success) {
        setIsSubmitted(true);
        toast({
          title: CONTENT.contact.toast.success.title,
          description: CONTENT.contact.toast.success.description,
        });
      } else {
        toast({
          title: CONTENT.contact.toast.error.title,
          description: CONTENT.contact.toast.error.description,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: CONTENT.contact.toast.error.title,
        description: CONTENT.contact.toast.error.description,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset form and success state after dialog closes
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 300);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 text-white">
      {/* Background Image Layer */}
      <motion.img
        src={ctaBackground}
        alt="Contact Background"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        loading="lazy"
      />

      {/* Primary Overlay for Brand Color and Readability */}
      <div
        className="from-primary/95 to-primary/85 absolute inset-0 bg-gradient-to-br"
        style={{ zIndex: 5 }}
      />

      {/* Subtle Gradient Overlay for Depth */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
        style={{ zIndex: 6 }}
      />

      {/* Decorative Blur Elements */}
      <div className="absolute inset-0 opacity-10" style={{ zIndex: 8 }}>
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <SectionHeading
          badge={CONTENT.cta.badge}
          title={CONTENT.cta.title}
          titleHighlight={CONTENT.cta.titleHighlight}
          subtitle={CONTENT.cta.subtitle}
          light={true}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => setIsOpen(true)}
            className="font-inter text-primary bg-white text-lg hover:bg-white/90"
          >
            {CONTENT.cta.button}
          </Button>
        </motion.div>
      </div>

      {/* Contact Form Modal - Medical/Clinical Design */}
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="rounded-2xl p-6 sm:max-w-lg" dir="rtl">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* Clean Header */}
                <DialogHeader className="space-y-2 pb-4">
                  <DialogTitle className="text-right text-2xl font-bold text-gray-900">
                    {CONTENT.contact.modal.title}
                  </DialogTitle>
                  <DialogDescription className="text-right text-sm text-gray-600">
                    {CONTENT.contact.modal.subtitle}
                  </DialogDescription>
                  <p className="pt-2 text-right text-xs text-gray-500">
                    {CONTENT.contact.modal.privacyNote}
                  </p>
                </DialogHeader>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mt-6 space-y-6"
                  >
                    {/* Two-column grid - Row 1: Full Name | Email */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <FloatingLabelInput
                                {...field}
                                label={CONTENT.contact.form.fullName.label}
                                placeholder={
                                  CONTENT.contact.form.fullName.placeholder
                                }
                                icon={User}
                                dir="rtl"
                                error={form.formState.errors.fullName?.message}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <FloatingLabelInput
                                {...field}
                                type="email"
                                label={CONTENT.contact.form.email.label}
                                placeholder={
                                  CONTENT.contact.form.email.placeholder
                                }
                                icon={Mail}
                                dir="ltr"
                                error={form.formState.errors.email?.message}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Two-column grid - Row 2: Phone | Service Type */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {/* Phone Input using react-phone-number-input */}
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <Controller
                                  name="phoneNumber"
                                  control={form.control}
                                  render={({ field }) => (
                                    <PhoneInput
                                      {...field}
                                      international
                                      defaultCountry="SA"
                                      labels={ar}
                                      placeholder={
                                        CONTENT.contact.form.phoneNumber
                                          .placeholder
                                      }
                                      className="phone-input-custom"
                                    />
                                  )}
                                />
                                {form.formState.errors.phoneNumber && (
                                  <p className="mt-1 text-right text-xs text-red-600">
                                    {form.formState.errors.phoneNumber.message}
                                  </p>
                                )}
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="focus:border-primary focus:ring-primary/10 h-12 border-gray-200 text-right focus:ring-1">
                                  <SelectValue
                                    placeholder={
                                      CONTENT.contact.form.serviceType
                                        .placeholder
                                    }
                                  />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="cosmetic">
                                  {CONTENT.serviceOptions.cosmetic}
                                </SelectItem>
                                <SelectItem value="treatment">
                                  {CONTENT.serviceOptions.treatment}
                                </SelectItem>
                                <SelectItem value="surgery">
                                  {CONTENT.serviceOptions.surgery}
                                </SelectItem>
                                <SelectItem value="consultation">
                                  {CONTENT.serviceOptions.consultation}
                                </SelectItem>
                                <SelectItem value="other">
                                  {CONTENT.serviceOptions.other}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-right" />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Preferred Time - Full width */}
                    <FormField
                      control={form.control}
                      name="preferredTime"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="focus:border-primary focus:ring-primary/10 h-12 border-gray-200 text-right focus:ring-1">
                                <SelectValue
                                  placeholder={
                                    CONTENT.contact.form.preferredTime
                                      .placeholder
                                  }
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="morning">
                                {CONTENT.contact.preferredTimeOptions.morning}
                              </SelectItem>
                              <SelectItem value="evening">
                                {CONTENT.contact.preferredTimeOptions.evening}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-right" />
                        </FormItem>
                      )}
                    />

                    {/* Full width textarea */}
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <Textarea
                                {...field}
                                placeholder={
                                  CONTENT.contact.form.description.placeholder
                                }
                                maxLength={500}
                                rows={4}
                                className="focus:border-primary focus:ring-primary/10 resize-none border-gray-200 text-right focus:ring-1"
                              />
                              <p className="mt-1 text-right text-xs text-gray-500">
                                {description?.length || 0}/500
                              </p>
                            </div>
                          </FormControl>
                          <FormMessage className="text-right" />
                        </FormItem>
                      )}
                    />

                    {/* Action buttons */}
                    <div className="flex flex-col-reverse gap-3 pt-4 md:flex-row">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleClose}
                        className="h-11 border-gray-300 text-gray-600 hover:bg-gray-50"
                      >
                        {CONTENT.contact.form.cancel}
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-primary-dark h-11 min-w-[200px] text-white"
                      >
                        {isSubmitting && (
                          <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                        )}
                        {isSubmitting
                          ? CONTENT.contact.form.submitting
                          : CONTENT.contact.form.submit}
                      </Button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="space-y-6 py-8 text-center"
              >
                {/* Success Checkmark */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <CheckCircle2 className="mx-auto h-20 w-20 text-green-600" />
                </motion.div>

                {/* Success Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    {CONTENT.contact.toast.success.title}
                  </h3>
                  <p className="text-gray-600">
                    {CONTENT.contact.toast.success.description}
                  </p>
                </motion.div>

                {/* Close Button */}
                <Button
                  onClick={handleClose}
                  className="bg-primary hover:bg-primary-dark h-11 min-w-[200px] text-white"
                >
                  إغلاق
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTA;
