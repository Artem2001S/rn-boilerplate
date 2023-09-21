import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootNavigationParamsList, RootRoutes} from './types';
import MainScreen from '@/screens/MainScreen';

const RootStack = createNativeStackNavigator<RootNavigationParamsList>();

const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name={RootRoutes.Main} component={MainScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
