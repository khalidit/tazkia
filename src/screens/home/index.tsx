import { View } from "react-native";
import MyProgress from "./MyProgress";
import Welcome from "./Welcome";
import { ReactElement } from "react";
import { commonStyles } from "../../styles/CommonStyles";

/**
 * Main screen
 * @returns {ReactElement}
 */
export default function HomeScreen(): ReactElement {
  const hasProgress: boolean = false;

  return (
    <View style={commonStyles.container}>
      {hasProgress ? <MyProgress /> : <Welcome />}
    </View>
  );
}
