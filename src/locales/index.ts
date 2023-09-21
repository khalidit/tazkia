import { MessageKeyValue } from './types';
import { ar } from './messages/ar';
import { fr } from './messages/fr';
import { en } from './messages/en';

export const defaultLanguage = 'ar';

export const locales: MessageKeyValue = { ar, fr, en };
