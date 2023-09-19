import React from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigation from './src/utils/AppNavigation';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigation />
    </SafeAreaView>
  );
}

export default App;
