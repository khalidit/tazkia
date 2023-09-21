import { Text, View } from 'react-native';
import Center from '../../components/Center';
import { commonStyles } from '../../styles/CommonStyles';

import { useMessage } from '../../hooks/use-message';
import { TKeys } from '../../locales/constants';

export default function Welcome() {
  const { formatMessage } = useMessage();
  return (
    <View style={commonStyles.container}>
      <Text style={{ fontSize: 15 }}>{formatMessage(TKeys.PRESENTATION_CENTER)}</Text>
      <Center />
    </View>
  );
}
