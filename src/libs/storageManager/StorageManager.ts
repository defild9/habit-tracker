import { createMMKV } from "react-native-mmkv";

export class StorageManager<T extends string> {
  private storage: ReturnType<typeof createMMKV>;

  constructor(id: string) {
    this.storage = createMMKV({ id });
  }

  setItem(key: T, value: unknown) {
    try {
      const stringValue = JSON.stringify(value);
      this.storage.set(key, stringValue);
    } catch (error) {}
  }

  setStringItem(key: T, value: string) {
    try {
      this.storage.set(key, value);
    } catch (error) {}
  }

  getItem<V>(key: T) {
    try {
      const value = this.storage.getString(key);
      const valueData =
        value !== null && value !== undefined ? JSON.parse(value) : null;

      return valueData as V | null;
    } catch (error) {}
  }

  clearByKey(key: T) {
    try {
      this.storage.remove(key);
    } catch (error) {}
  }
}
