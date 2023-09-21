import {MMKV} from 'react-native-mmkv';

import {AppStorageKeys} from './constants';

export class AppStorageClass {
  private instance = new MMKV();

  set(key: AppStorageKeys, value: string | number | boolean) {
    this.instance.set(key, value);
  }

  getBoolean(key: AppStorageKeys) {
    return this.instance.getBoolean(key);
  }

  getNumber(key: AppStorageKeys) {
    return this.instance.getNumber(key);
  }

  getString(key: AppStorageKeys) {
    return this.instance.getString(key);
  }

  deleteValue(key: AppStorageKeys) {
    this.instance.delete(key);
  }

  getAllKeys() {
    return this.instance.getAllKeys();
  }

  clearAll() {
    return this.instance.clearAll();
  }

  contains(key: AppStorageKeys) {
    return this.instance.contains(key);
  }
}

export const AppStorage = new AppStorageClass();
