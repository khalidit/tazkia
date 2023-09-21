import { Button, Text, View } from 'react-native';
import Center from '../../components/Center';
import { commonStyles } from '../../styles/CommonStyles';

import { useMessage } from '../../hooks/use-message';
import { TKeys } from '../../locales/constants';
import { SupportedLocale } from '../../locales/types';
import { useStoreActions, useStoreState } from '../../stores/hooks';

export default function Welcome() {
  const { formatMessage } = useMessage();
  const locale = useStoreState((state) => state.intl.locale);
  const update = useStoreActions((actions) => actions.global.startProgress);

  return (
    <View style={commonStyles.container}>
      <Text style={{ fontSize: 15 }}>{formatMessage(TKeys.PRESENTATION_CENTER)}</Text>
      <Center />
      <Text>locale : {locale}</Text>
      <Button
        title="update"
        onPress={() => {
          let lang: SupportedLocale = locale === 'ar' ? 'fr' : 'fr' ? 'ar' : 'fr';
          update();
        }}
      ></Button>
    </View>
  );
}
