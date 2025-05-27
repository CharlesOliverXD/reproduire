import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, RootTagContext } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Fleche from '../composants/Fleche';

const Profile = () => {
    return (
        <View style={styles.container}>

            {/* Elements du haut */}
            <View style={{ padding: 16 }} >

                <View style={{ flexDirection: "row", justifyContent: "space-between" }} >

                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <View >
                            <Image style={styles.image} source={require('../assets/img/charles.jpg')} />
                        </View>
                        <View style={{ marginLeft: 8 }} >
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }} >Charles Adou</Text>
                            <Text style={{ fontSize: 11 }} >Ui Designer, Web dev</Text>
                        </View>
                    </View>

                    <TouchableOpacity activeOpacity={.8}>
                        <View style={styles.cercle} >
                            <Ionicons name="search" size={16} color="#2E2B22" />
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={styles.section_2}>
                    <View>
                        <Text style={[styles.titre, { marginTop: -10 }]}>Explore</Text>
                        <Text style={[styles.titre, { marginTop: -15 }]}>vacancies</Text>
                    </View>
                    <View style={styles.cadre_filtre}>
                        <Ionicons style={{ transform: [{ rotate: "90deg" }] }} name="options" />
                        <Text>Filtres</Text>
                    </View>
                </View>

            </View>
            {/* Fin Elements du haut */}

            {/* Les cadres */}
            <View>
                <View style={[styles.cadre_generale, styles.cadre_uber]}>
                    <View style={styles.sous_cadre}>
                        <Image style={styles.logo_entreprise} source={require('../assets/img/uber.png')} />
                        <Text style={{ marginLeft: 10, color: "white" }}>Uber</Text>
                    </View>
                    <View>
                        <Fleche
                            bg_color_fleche="white"
                            color_arrow="#232228"
                        />
                    </View>
                </View>

                <View style={[styles.cadre_generale, styles.cadre_amazon]}>
                    <View style={styles.sous_cadre}>
                        <Image style={styles.logo_entreprise} source={require('../assets/img/amazon.png')} />
                        <Text style={{ marginLeft: 10 }}>Amazon</Text>
                    </View>
                    <View>
                        <Fleche
                            bg_color_fleche="white"
                            color_arrow="#232228"
                        />
                    </View>
                </View>

                <View style={[styles.cadre_generale, styles.cadre_microsoft]}>
                    <View style={styles.sous_cadre} >
                        <Image style={styles.logo_entreprise} source={require('../assets/img/microsoft.png')} />
                        <Text style={{ marginLeft: 10, color: "white" }} >Microsoft</Text>
                    </View>
                    <View>
                        <Fleche
                            bg_color_fleche="white"
                            color_arrow="#232228"
                        />
                    </View>
                </View>

                <View style={[styles.cadre_generale, styles.cadre_google]} >
                    <View style={styles.sous_cadre}>
                        <Image style={styles.logo_entreprise} source={require('../assets/img/google.jpg')} />
                        <Text style={{ marginLeft: 10 }}>Google</Text>
                    </View>
                    <View>
                        <Fleche
                            bg_color_fleche="white"
                            color_arrow="#232228"
                        />
                    </View>
                </View>
            </View>

            {/* Les cadres */}


        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#EFECE3",

        // padding: 16
    },


    image: {
        width: 40,
        height: 40,
        borderRadius: 100
    },

    cercle: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: "#89867D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100

    },

    section_2: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20, marginBottom: 20
    },

    titre: {
        fontSize: 45,
        fontWeight: "500",
        textTransform: "uppercase",
    },

    cadre_filtre: {
        height: 32,
        width: 72,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#89867D",
        borderWidth: 1,
        borderRadius: 100

    },

    logo_entreprise: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },

    cadre_generale: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: 16,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },

    sous_cadre: {
        flexDirection: "row", alignItems: "center"
    },

    cadre_uber: {
        backgroundColor: "#684BF1",
        height: 100,
        marginBottom: -20

    },

    cadre_amazon: {
        backgroundColor: "#FDC741",
        height: 100,
        marginBottom: -20

    },

    cadre_microsoft: {
        backgroundColor: "#202020",
        height: 100,
        marginBottom: -20

    },

    cadre_google: {
        backgroundColor: "#CBD87E",
        height: "80%",

    },


})
export default Profile;