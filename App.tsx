import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import theme from './constants/Theme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <FAB
          style={styles.fab}
          // small
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: 95,
    marginRight: 20,
    backgroundColor: theme.colors.blue
  },
})
