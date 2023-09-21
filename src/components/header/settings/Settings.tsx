import LanguageSettings, { LanguageSettingsProps } from './LanguageSettings';

interface SettingsProps extends LanguageSettingsProps {}

export default function Settings(props: SettingsProps) {
  return <LanguageSettings locale={props.locale} onLocaleChange={props.onLocaleChange} />;
}
