'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useTranslations } from 'next-intl';

const ContactForm = () => {
  const t = useTranslations('ContactForm');

  return (
    <Card className="min-w-[400px]">
      <form>
        <CardHeader>
          <CardTitle className="icon_underline">{t('Title')}</CardTitle>
          <CardDescription>
            {t('Description')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="name">{t('NameLabel')}</Label>
            <Input
              type="text"
              name="name"
              required
              placeholder={t('NamePlaceholder')}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="email">{t('EmailLabel')}</Label>
            <Input
              type="email"
              name="SenderEmail"
              required
              placeholder={t('EmailPlaceholder')}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="message">{t('MessageLabel')}</Label>
            <textarea
              placeholder={t('MessagePlaceholder')}
              name="message"
              required
              className="resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            {t('SubmitButton')}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
