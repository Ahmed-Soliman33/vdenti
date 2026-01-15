import SectionHeading from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";
import { CONTENT } from "@/lib/content";

const FAQ = () => {
  const faqs = FAQS.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <section id="faq" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge={CONTENT.faq.badge}
          title={CONTENT.faq.title}
          titleHighlight={CONTENT.faq.titleHighlight}
          subtitle={CONTENT.faq.subtitle}
        />

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-inter text-right text-lg font-bold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-right leading-relaxed text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
