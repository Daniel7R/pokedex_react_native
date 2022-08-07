import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from "react-native-elements";

import { Navigation } from "./src/navigation/Navigation"

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

