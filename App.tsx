import { Provider } from '@react-native-material/core';
import { StatusBar } from 'react-native';
import Header from './src/components/header/Header';
import RootNavigator from './src/navigation';
import Providers from './src/providers';

export default function App() {
  const props: any = {};
  return (
    <Providers>
      <Provider {...props}>
        <Header />
        <RootNavigator />
        <StatusBar />
      </Provider>
    </Providers>
  );
}
