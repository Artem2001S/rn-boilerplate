import React from 'react';
import {Text, View} from 'react-native';
import env from 'react-native-config';

import {
  RootRoutes,
  RootStackNavigationScreenProps,
} from '@/navigation/RootNavigation/types';

const MainScreen: React.FC<
  RootStackNavigationScreenProps<RootRoutes.Main>
> = () => {
  return (
    <View>
      <Text style={{color: 'black'}}>{JSON.stringify(env)}</Text>
    </View>
  );
};

export default MainScreen;
