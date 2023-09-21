import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import RootNavigation from './src/navigation/RootNavigation';

import {store} from '@/store';

function App() {
  return (
    <GestureHandlerRootView style={styles.app}>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <RootNavigation />
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
