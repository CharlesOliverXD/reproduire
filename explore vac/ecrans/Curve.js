import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';




const Curve = ({ navigation }) => {
    return (

        <ImageBackground
            source={require('../assets/img/Open.jpg')}
            style={styles.background}
            resizeMode="cover" // ou "contain", "stretch", "repeat", etc.
        >
            <View style={styles.container}>
                <View style={styles.haut} >
                    <Image style={{ transform: [{ scale: 0.4 }] }} source={require("../assets/img/Aventure.png")} />
                </View>

                <View style={styles.milieu} >
                    <Image style={{ width: 48, height: 48 }} source={require("../assets/img/etoile.png")} />

                </View>

                <View style={styles.bas} >
                    <Text style={styles.annotation}>Step 3</Text>
                    <Text style={styles.accroche}>Your Social Aventure Begins Here</Text>
                    <TouchableOpacity
                        style={styles.bouton}
                        activeOpacity={0.9}

                        onPress={() => navigation.navigate('Vacancies')}
                    >
                        <Ionicons name="arrow-forward-outline" color="white" size={24} />
                    </TouchableOpacity>
                </View>

            </View >

        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,

    },

    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 16

    },


    haut: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingTop: 64,
    },

    milieu: {
        backgroundColor: "#232323",
        opacity: 0.98,
        padding: 16,
        borderRadius: 18,
        transform: [{ rotate: "30deg" }]
    },


    bas: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 64,
    },

    annotation: {
        backgroundColor: "#B9D1E3",
        color: "#008AC9",
        paddingVertical: 2,
        paddingHorizontal: 16,
        borderRadius: 100
    },

    accroche: {
        marginTop: 16,
        fontSize: 38,
        fontWeight: 500,
        textAlign: "center",
        lineHeight: 35
    },

    bouton: {
        backgroundColor: "#008AC9",
        marginTop: 32,
        padding: 8,
        borderRadius: 12
    }



})
export default Curve;