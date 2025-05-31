import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fleche from './Fleche';


const Carte = ({ stage, bg_stage, color_stage, titre, description, bg_color, texte_color, bg_color_fleche, color_arrow }) => {

    return (
        <View style={[styles.box, { backgroundColor: bg_color }]}>

            <View style={styles.elem_box} >
                <Text style={[styles.texte_stage, { backgroundColor: bg_stage, color: color_stage }]}>{stage}</Text>

                <Fleche
                    bg_color_fleche={bg_color_fleche}
                    color_arrow={color_arrow}
                />
            </View>

            <View>
                <Text style={{ color: texte_color, fontSize: 30 }} >{titre}</Text>
                <Text style={{ color: texte_color }} >{description}</Text>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    box: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        borderRadius: 16,
        marginTop: 8,
    },

    elem_box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    texte_stage: {

        borderRadius: 100,
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    texte_resume: {
        color: "white",
        fontSize: 30
    },




})

export default Carte;
