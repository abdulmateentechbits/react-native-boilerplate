import React from 'react';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}



export default App;
