import { Text, View } from "react-native";
import { commonStyles } from "../../styles/CommonStyles";
import Center from "../../components/Center";

import { useIntl } from "react-intl";

export default function Welcome() {
  const intl = useIntl();
  return (
    <View style={commonStyles.container}>
      <Text style={{ fontSize: 18 }}>
        {intl.formatMessage({ id: "presentation.center" })}
      </Text>
      <Center />
    </View>
  );
}
