import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//--
//----
//--
import CategoryListItem from "../components/CategoryListItem";

function Screen2({ route, navigation }) {
  
   
    //const {navigation} = this.props;
    //const { route } = this.route;
    const { name } = route.params;
    return (
      <View>
        <Text
          style={styles.Text}>
          {JSON.stringify(name)}</Text>
        <Button
          title="Go back to first screen"
          onPress={() => navigation.popToTop()}
        />
    </View>
    );
  }
export default Screen2;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
  Text: {
    alignItems: 'stretch',
    alignContent: 'center',
    padding: 16,
    justifyContent: 'center',
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'

  }
});