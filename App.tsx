import { StatusBar } from 'react-native';
import Header from './src/components/Header';
import RootNavigator from './src/navigation';
import Providers from './src/providers';

export default function App() {
  return (
    <Providers>
      <Header />
      <RootNavigator />
      <StatusBar />
    </Providers>
  );
}
