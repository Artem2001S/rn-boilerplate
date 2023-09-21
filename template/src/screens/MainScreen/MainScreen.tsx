import React from 'react';
import {Text, View} from 'react-native';
import {
  RootRoutes,
  RootStackNavigationScreenProps,
} from '../../navigation/RootNavigation/types';

const MainScreen: React.FC<
  RootStackNavigationScreenProps<RootRoutes.Main>
> = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default MainScreen;
