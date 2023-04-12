import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, OrdersScreen, RestaurantDetails } from "./src/screens";
import { Provider as ReduxProvider } from 'react-redux';
import { StoreProvider } from "./src/redux/store";


export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };
  return (
    <ReduxProvider store={StoreProvider}>
<NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
        <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ReduxProvider>
  );
}
