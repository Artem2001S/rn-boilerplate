import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum RootRoutes {
  Main = 'Main',
}

export type RootNavigationParamsList = {
  [RootRoutes.Main]: undefined;
};

export type RootStackNavigationScreenProps<T extends RootRoutes> =
  NativeStackScreenProps<RootNavigationParamsList, T>;
