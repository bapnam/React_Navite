import react from "react";
import { StyleSheet, ActivityIndicator, View, Text  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//--
//----
//--
// import CartScreen from "./screens/Cart";
// import OrdersScreen from "./screens/Orders";
// import SettingsScreen from "./screens/Settings";
import Screen2 from "./screens/Screen2";
import Screen1 from "./screens/Screen1";

const Stack = createNativeStackNavigator();
function CategoryStack() {
  return(
      <Stack.Navigator initialRouteName='Screen1' >{/*initialRouteName='Screen1'*/}
        <Stack.Screen 
          name="Screen1" component={Screen1} 
          options={{title: 'Home'}}/>

        <Stack.Screen 
          name="Screen2" component={Screen2} 
          options={({ route }) => ({ title: route.params.title })}/>

      </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    
      <Stack.Navigator initialRouteName='Screen1' >{/*initialRouteName='Screen1'*/}
        <Stack.Screen 
          name="Screen1" component={Screen1} 
          options={{title: 'Home'}}/>

        <Stack.Screen 
          name="Screen2" component={Screen2} 
          options={({ route }) => ({ title: route.params.title })}/>

      </Stack.Navigator>
    
  );
}

export default AppNavigator;


