import AsyncStorage from '@react-native-async-storage/async-storage';

export const readData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(`Error occured while reading data ${key} from locale storage`, e);
  }
};

export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error occured while storing data ${key} to locale storage`, e);
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(`Error occured while removing data ${key} to locale storage`, e);
  }
};

export const storageEngine = {
  getItem: readData,
  setItem: storeData,
  removeItem: removeData,
};
