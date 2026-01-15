import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaWhatsapp } from "react-icons/fa";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { getWhatsAppUrl } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { CONTENT } from "@/lib/content";
import ctaBackground from "@/assets/images/questions.webp";

const CTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const message = `مرحباً، أنا ${data.name}\nرقم الجوال: ${data.phone}\nأرغب في: ${data.service}\n${data.message ? `\nملاحظات: ${data.message}` : ""}`;
    const whatsappUrl = getWhatsAppUrl(message);

    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
    form.reset();

    toast({
      title: CONTENT.contact.toast.success.title,
      description: CONTENT.contact.toast.success.description,
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 text-white"
    >
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
        className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/85"
        style={{ zIndex: 5 }}
      />

      {/* Subtle Gradient Overlay for Depth */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
        style={{ zIndex: 6 }}
      />

      {/* Decorative Blur Elements */}
      <div className="absolute inset-0 opacity-10" style={{ zIndex: 8 }}>
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4">
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
            className="bg-white font-inter text-lg text-primary hover:bg-white/90"
          >
            <FaWhatsapp className="ml-2 text-2xl" />
            {CONTENT.cta.button}
          </Button>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md" dir="rtl">
          <DialogHeader>
            <DialogTitle className="font-inter text-right text-2xl">
              {CONTENT.contact.modal.title}
            </DialogTitle>
            <DialogDescription className="font-inter text-right">
              {CONTENT.contact.modal.subtitle}
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-inter text-right">
                      {CONTENT.contact.form.fullName.label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={CONTENT.contact.form.fullName.placeholder}
                        className="font-inter text-right"
                      />
                    </FormControl>
                    <FormMessage className="font-inter text-right" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-inter text-right">
                      {CONTENT.contact.form.phone.label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={CONTENT.contact.form.phone.placeholder}
                        className="font-inter"
                        dir="ltr"
                      />
                    </FormControl>
                    <FormMessage className="font-inter text-right" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-inter text-right">
                      {CONTENT.contact.form.serviceType.label}
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="font-inter text-right">
                          <SelectValue
                            placeholder={CONTENT.contact.form.serviceType.placeholder}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="cosmetic" className="font-inter">
                          {CONTENT.serviceOptions.cosmetic}
                        </SelectItem>
                        <SelectItem value="treatment" className="font-inter">
                          {CONTENT.serviceOptions.treatment}
                        </SelectItem>
                        <SelectItem value="surgery" className="font-inter">
                          {CONTENT.serviceOptions.surgery}
                        </SelectItem>
                        <SelectItem
                          value="consultation"
                          className="font-inter"
                        >
                          {CONTENT.serviceOptions.consultation}
                        </SelectItem>
                        <SelectItem value="other" className="font-inter">
                          {CONTENT.serviceOptions.other}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="font-inter text-right" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-inter text-right">
                      {CONTENT.contact.form.message.label}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder={CONTENT.contact.form.message.placeholder}
                        className="font-inter text-right"
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage className="font-inter text-right" />
                  </FormItem>
                )}
              />

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="font-inter flex-1"
                >
                  {CONTENT.contact.form.cancel}
                </Button>
                <Button
                  type="submit"
                  className="bg-primary font-inter flex-1 hover:bg-primary/90"
                >
                  <FaWhatsapp className="ml-2" />
                  {CONTENT.contact.form.submit}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTA;
