import react from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
//--
//----
//--
import CategoryListItem from "./components/CategoryListItem";
import AppNavigator from "./AppNavigator";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import CartScreen from "./screens/Cart";
import OrdersScreen from "./screens/Orders";
import SettingsScreen from "./screens/Settings";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <AppNavigator /> */}
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Cart') {
              iconName = focused 
              ? 'cart' 
              : 'cart-outline';
            } else if (route.name === 'Order') {
              iconName = focused 
              ? 'reorder-four' 
              : 'reorder-four-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" 
          component={AppNavigator} 
          options={{ headerShown: false }}/>
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Order" component={OrdersScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
});


