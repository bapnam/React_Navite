import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";

export default class CartScreen extends Component{
    render() {
        return (
            <View>
                <Text style = {styles.Text}>Hello Cart</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    Text: {
        textAlign: 'center',
        margin: 16,
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
