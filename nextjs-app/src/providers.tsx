"use client";

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { AbstractIntlMessages } from 'next-intl';

type Props = {
  locale: string;
  messages: AbstractIntlMessages;
  children: ReactNode;
};

export function Providers({ locale, messages, children }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
