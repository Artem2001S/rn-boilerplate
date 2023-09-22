import {useEffect, useRef} from 'react';
import {useAppState} from '@react-native-community/hooks';

export const useAppStateListeners = ({
  onAppComesFromBackground,
  onAppGoToInactive,
}: {
  onAppComesFromBackground: () => void;
  onAppGoToInactive: () => void;
}) => {
  const appState = useAppState();
  const prevAppState = useRef(appState);

  useEffect(() => {
    if (
      appState === 'active' &&
      (prevAppState.current === 'background' ||
        prevAppState.current === 'inactive')
    ) {
      onAppComesFromBackground();
    }
    if (
      (appState === 'inactive' || appState === 'background') &&
      prevAppState.current === 'active'
    ) {
      onAppGoToInactive();
    }
    prevAppState.current = appState;
  }, [appState, onAppComesFromBackground, onAppGoToInactive]);
};
