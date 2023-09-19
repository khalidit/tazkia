import { IntlProvider } from "react-intl";
import RootNavigator from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { translations } from "./src/translations";

export default function App() {
  const [locale, setLocale] = useState(navigator.language); // state for current locale

  const messages = translations["ar"];

  /*const handleLanguageChange = (selectedLocale) => {
    setLocale(selectedLocale);
  };*/

  return (
    <IntlProvider locale={locale} messages={messages}>
      <RootNavigator />
      <StatusBar style="inverted" />
    </IntlProvider>
  );
}
