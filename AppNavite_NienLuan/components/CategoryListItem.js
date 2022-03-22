import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
//--
//----
//--
import SkiImage from '../assets/ski.png';

//--
//----
//--

export default function CategoryListItem(props) {
    const { category, onPress } = props
    return (
        <TouchableOpacity activeOpacity={0.5}
        onPress={onPress}
        >
            <View style={styles.Container}>
                <Text style={styles.Tille}>{category.title}</Text>
                <Image style={styles.Image} source={SkiImage}></Image>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#FFF',
        borderRadius: 4,
        elevation: 10, // hieu ung do bong (Shadow)
    },
    Image: {
        width: 128,
        height:128,
        margin: 7
    },
    Tille: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }

});

