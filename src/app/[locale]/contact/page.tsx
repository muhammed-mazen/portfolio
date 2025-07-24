import ContactForm from "@/components/ContactForm";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";

const ContactPage = () => {
  const t = useTranslations('Contact');
  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden sm:mt-28">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Phone className="h-4 w-4" />
        {t('Badge')}
      </Badge>
      <div className="flex flex-col gap-12 w-full">
        <Heading className="max-w-lg">{t('Title')}</Heading>
        <div className="h-auto w-full flex justify-center items-center">
          <FramerWrapper y={0} scale={0.8}>
            <ContactForm />
          </FramerWrapper>
        </div>
        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base"></p>
      </div>
    </div>
  );
};

export default ContactPage;
