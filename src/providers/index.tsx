import { PropsWithChildren } from 'react';
import StoreProvider from './StoreProvider';
import IntlProvider from './IntlProvider';

export default function Providers({ children }: PropsWithChildren<unknown>) {
  return (
    <StoreProvider>
      <IntlProvider>{children}</IntlProvider>
    </StoreProvider>
  );
}
