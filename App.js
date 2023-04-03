import { View, Text } from "react-native";
import { registerRootComponent } from 'expo';
import RootNavigation from "./Navigation";
export default function App() {
  return (
  <RootNavigation/>
  );
}
registerRootComponent(App)