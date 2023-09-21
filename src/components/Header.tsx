import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { AppBar, HStack, IconButton } from '@react-native-material/core';
import { useStoreState } from '../stores/hooks';

export default function Header() {
  const page = useStoreState((state) => state.global.page);

  return (
    <AppBar
      title={page.title}
      subtitle={page.subTitle}
      enableColorOnDark
      color="secondary"
      centerTitle={true}
      leading={(props) => <IconButton icon={(props) => <Icon name="menu" {...props} />} {...props} />}
      trailing={(props) => (
        <HStack>
          <IconButton icon={(props) => <Icon name="magnify" {...props} />} {...props} />
          <IconButton icon={(props) => <Icon name="dots-vertical" {...props} />} {...props} />
        </HStack>
      )}
    />
  );
}
