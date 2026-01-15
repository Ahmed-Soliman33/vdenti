import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";
import { CONTENT } from "@/lib/content";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = FAQS.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <section id="faq" className="relative overflow-hidden bg-white py-16">
      {/* Container with beige background and rounded corners - matching About/Testimonials sections */}
      <div className="mx-auto my-8 max-w-[95%] overflow-hidden rounded-[2rem] bg-[#FDFBF7] px-6 py-16 lg:rounded-[3rem] lg:px-20">
        {/* Section Heading */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-primary/10 font-cairo text-primary inline-block rounded-full px-4 py-2 text-sm font-medium">
            {CONTENT.faq.badge}
          </span>
          <h2 className="font-cairo mt-4 text-3xl font-extrabold text-[#222222] md:text-4xl">
            {CONTENT.faq.title}{" "}
            <span className="text-primary">{CONTENT.faq.titleHighlight}</span>
          </h2>
          <p className="font-cairo mx-auto mt-4 max-w-2xl text-base text-[#666666]">
            {CONTENT.faq.subtitle}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border-none bg-[#F8F5F0] px-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <AccordionTrigger className="font-cairo py-6 text-right font-bold text-[#222222] hover:text-[#C1A077] hover:no-underline md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-cairo pb-6 text-right leading-loose text-[#666666]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
