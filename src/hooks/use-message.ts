import { IntlShape, PrimitiveType, useIntl } from 'react-intl';

export interface IntlMessage {
  intl: IntlShape;
  formatMessage(id: string, values?: Record<string, PrimitiveType>): string;
}

export function useMessage(): IntlMessage {
  const intl = useIntl();
  return {
    intl,
    formatMessage: (id, values) => intl.formatMessage({ id }, values),
  };
}
