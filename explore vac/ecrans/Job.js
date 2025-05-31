import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import Donnees from '../Donnees/Donnees';

const Job = ({ route, navigation }) => {


    const offre_envoyee = route.params.offre;
    const offre = Donnees.find((elem) => elem.libelle == offre_envoyee);

    return (

        <LinearGradient
            colors={['#FAC940', '#F5F5F5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            {/* Fin moitié */}
            <View style={{ flex: 3, flexDirection: "column", justifyContent: "space-between" }} >

                <View style={styles.haut} >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack()}
                    >
                        <View style={[styles.cercle, { backgroundColor: "white" }]} >
                            <Ionicons name='chevron-back-outline' size={24} />
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Image style={{ width: 64, height: 64, borderRadius: 64 / 2 }} source={offre.logo} />
                    </View>
                    <View style={[styles.cercle, { backgroundColor: "white" }]}>
                        <Ionicons name="bookmark-outline" />
                    </View>
                </View>

                <View style={{ alignItems: "center" }} >
                    <Text style={{ fontSize: 35, fontWeight: 600 }}>{offre.libelle}</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                    <View style={styles.poste}>
                        <Text>{offre.poste}</Text>
                    </View>
                </View>

                <View style={{ alignItems: "center" }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Ionicons name="location-outline" />
                        <Text>{offre.lieu}</Text>
                    </View>
                </View>

                <View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={[styles.bloc, { marginRight: 5 }]} >
                            <View style={styles.rond} >
                                <Ionicons name="information-outline" size={16} color={"white"} />
                            </View>
                            <Text style={{ marginLeft: 10 }}>
                                $150k\5200 k
                            </Text>
                        </View>

                        <View style={[styles.bloc, { marginRight: 5 }]}>
                            <View style={styles.rond}>
                                <Ionicons name="location-outline" size={16} color={"white"} />
                            </View>
                            <Text style={{ marginLeft: 10 }}>
                                On-Site
                            </Text>
                        </View>

                        <View style={[styles.bloc, { marginRight: 5 }]}>
                            <View style={styles.rond}>
                                <Ionicons name="tv-outline" size={16} color={"white"} />
                            </View>
                            <Text style={{ marginLeft: 10 }}>
                                On-Site
                            </Text>
                        </View>

                        <View style={[styles.bloc, { marginRight: 5 }]}>
                            <View style={styles.rond}>
                                <Ionicons name="code-outline" size={16} color={"white"} />
                            </View>
                            <Text style={{ marginLeft: 10 }}>
                                React Native
                            </Text>
                        </View>


                        <View style={styles.bloc}>
                            <View style={styles.rond}>
                                <Ionicons name="barbell-outline" size={16} color={"white"} />
                            </View>
                            <Text style={{ marginLeft: 10 }}>
                                Gym membership
                            </Text>
                        </View>
                    </ScrollView>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={styles.trait}></View>
                    <View style={styles.trait}></View>
                </View>
            </View>
            {/* Fin moitié */}


            {/* Autre moitié */}

            <View style={{ flex: 4, justifyContent: "center", paddingTop: 16, paddingBottom: 64 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <View>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.qualication}>
                                Minimum qualification
                            </Text>
                        </View>

                        <View style={styles.liste} >
                            {offre.qualification.map((elem, index) => (
                                <Text key={index} style={{ marginBottom: 8 }}>
                                    + {elem}
                                </Text>
                            ))}

                        </View>
                    </View>

                    <View style={{ height: 16 }}></View>

                    <TouchableOpacity style={styles.bouton}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Process', offre_envoyee)}
                    >
                        <Text style={{ color: "white" }}>
                            Apply for this job
                        </Text>
                    </TouchableOpacity>

                </ScrollView>


            </View>

        </LinearGradient >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },


    haut: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },

    poste: {
        backgroundColor: "#FCE7A3",
        paddingVertical: 10,
        width: "80%",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },

    cercle: {
        borderRadius: 20,
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center"

    },

    bloc: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        backgroundColor: "white",
        borderRadius: 100,
        height: 56,
    },

    rond: {
        backgroundColor: "#2C2C2C",
        height: 32,
        width: 32,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",

    },

    trait: {
        height: 1,
        width: "45%",
        backgroundColor: "white",
    },

    qualication: {
        backgroundColor: "#FEE9BE",
        height: 48,
        paddingHorizontal: 16,
        paddingTop: 8,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        marginBottom: -10
    },

    liste: {
        backgroundColor: "white",
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 16,

    },
    bouton: {
        backgroundColor: "#202020",
        paddingVertical: 16,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 100
    },



})


export default Job;