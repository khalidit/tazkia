import { Button, Dialog, DialogActions, DialogContent, DialogHeader, Stack, Text } from '@react-native-material/core';
import { useMessage } from '../../../hooks/use-message';
import { TKeys } from '../../../locales/constants';
import { SupportedLocale } from '../../../locales/types';
import { useStoreActions, useStoreState } from '../../../stores/hooks';
import Settings from './Settings';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SettingsDialog({ open, onClose }: Props) {
  const { formatMessage } = useMessage();
  const locale = useStoreState((state) => state.intl.locale);
  const updateLocale = useStoreActions((state) => state.intl.update);
  const props: any = {};

  function handleLocaleChange(value: SupportedLocale) {
    updateLocale(value);
  }

  return (
    <Dialog visible={open} onDismiss={onClose} {...props}>
      <DialogHeader title={<Text variant="h5">{formatMessage(TKeys.MENU_SETTINGS)}</Text>} />
      <DialogContent>
        <Stack spacing={2}>
          <Settings locale={locale} onLocaleChange={handleLocaleChange} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button title={formatMessage(TKeys.BUTTON_CANCEL)} compact variant="text" onPress={onClose} />
      </DialogActions>
    </Dialog>
  );
}
