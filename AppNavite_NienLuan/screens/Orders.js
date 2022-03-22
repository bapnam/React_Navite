import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";

export default class OrdersScreen extends Component{
    render() {
        return (
            <View>
                <Text style = { styles.Text }>Hello Order</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    Text: {
        textAlign: 'center',
        color: 'blue',
        fontSize: 20,
        margin: 20,
        fontWeight: 'bold'
    }
});