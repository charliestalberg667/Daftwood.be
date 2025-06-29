'use client';

import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';

type Props = {
  locale: string;
  messages: any;
  children: ReactNode;
};

export function Providers({ locale, messages, children }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
