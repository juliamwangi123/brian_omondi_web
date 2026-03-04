import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'sw'];

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));
