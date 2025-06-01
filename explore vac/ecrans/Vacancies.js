import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Fleche from '../composants/Fleche';
import { ScrollView } from 'react-native-gesture-handler';
import Donnees from "../Donnees/Donnees"

const Vacancies = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Elements du haut */}
            <View style={{ padding: 16 }} >
                <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <View>
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
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 16 }}
            >

                {
                    Donnees.map((elem, index) => {
                        return (

                            <View key={index} style={[styles.cadre_generale,]} >

                                <View style={styles.tete}>
                                    <View style={styles.sous_cadre}>
                                        <Image style={styles.logo_entreprise} source={elem.logo} />
                                        <Text style={{ marginLeft: 10, color: "#202020" }}>{elem.libelle}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Job', { offre: elem.libelle })}
                                        activeOpacity={0.8}
                                    >
                                        <Fleche
                                            bg_color_fleche="#232228"
                                            color_arrow="white"
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <View>
                                        <Text style={{ fontSize: 40, fontWeight: "bold", color: "#202020" }} >{elem.poste}</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#202020" }}>$ {elem.salaire} k</Text>
                                            <Text style={{ fontSize: 16, color: "#202020" }}>/year</Text>
                                        </View>

                                        <View>
                                            <Text>Limite: {elem.date_limite}</Text>
                                        </View>
                                    </View>
                                </View>


                            </View>
                        )
                    })
                }

            </ScrollView >

            {/*Fin Les cadres */}

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#EFECE3",
        marginBottom: 50,

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
        borderRadius: 100,


    },

    logo_entreprise: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },

    cadre_generale: {
        padding: 16,
        borderRadius: 16,
        backgroundColor: "#FDC741",
        marginBottom: 8



    },

    tete: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },

    sous_cadre: {
        flexDirection: "row", alignItems: "center"
    },


})
export default Vacancies;