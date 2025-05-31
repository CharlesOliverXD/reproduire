import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Fleche = ({ bg_color_fleche, color_arrow }) => {
    return (
        <View style={[styles.rond_fleche, { backgroundColor: bg_color_fleche }]}>
            <Ionicons name="arrow-back" size={24} color={color_arrow} />
        </View>
    )
}

const styles = StyleSheet.create({
    rond_fleche: {

        padding: 8,
        borderRadius: 100,
        height: 40,
        width: 40,
        transform: [{ rotate: "135deg" }]

    },


})

export default Fleche;