import { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeRouter from '@/routers/WelcomeRouter';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NativeBaseProvider } from 'native-base';

import { config } from '@gluestack-ui/config';
import { ThemeContext } from '@/contexts/AppContext';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();
const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  // App Actions

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <PaperProvider>
          <ThemeContext.Provider value={[useDarkTheme, setUseDarkTheme]}>
            <GluestackUIProvider config={config}>
              <WelcomeRouter />
            </GluestackUIProvider>
          </ThemeContext.Provider>
        </PaperProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
