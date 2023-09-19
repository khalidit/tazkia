import { StyleSheet } from "react-native";
import PressablePart, { Part } from "./PressablePart";
import { Stack, Surface } from "@react-native-material/core";
import { commonStyles } from "../../styles/CommonStyles";

const parts: Part[] = [
  {
    name: "Part one",
    route: "Part1",
    description: "Description part 1 : tazkiate al jawari7",
    imageSource: require("./../../../assets/img/tazkia_part1.jpg"),
  },
  {
    name: "Part two",
    route: "Part2",
    description: "Description part 2 : tazkiate al 3a9l",
    imageSource: require("./../../../assets/img/tazkia_part2.jpg"),
  },
  {
    name: "Part three",
    route: "Part3",
    description: "Description part 3 :  tazkiate al nafs",
    imageSource: require("./../../../assets/img/tazkia_part3.jpg"),
  },
];

export default function TazkiaScreen() {
  return (
    <Stack style={commonStyles.container} items="center" spacing={15}>
      {parts.map((item: Part, index: number) => (
        <Surface key={index} elevation={7} category="large">
          <PressablePart item={item} />
        </Surface>
      ))}
    </Stack>
  );
}
