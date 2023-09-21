import { PropsWithChildren } from 'react';
import IntlProvider from './IntlProvider';
import StoreProvider from './StoreProvider';

export default function Providers({ children }: PropsWithChildren<unknown>) {
  return (
    <StoreProvider>
      <IntlProvider>{children}</IntlProvider>
    </StoreProvider>
  );
}
