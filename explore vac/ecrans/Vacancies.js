import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, RootTagContext } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Fleche from '../composants/Fleche';
import { ScrollView } from 'react-native-gesture-handler';

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
            >

                <View style={[styles.cadre_generale, styles.cadre_uber]} >

                    <View style={styles.tete}>
                        <View style={styles.sous_cadre}>
                            <Image style={styles.logo_entreprise} source={require('../assets/img/uber.png')} />
                            <Text style={{ marginLeft: 10, color: "white" }}>User</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Job', { offre: "Uber" })}
                            activeOpacity={0.8}
                        >
                            <Fleche
                                bg_color_fleche="white"
                                color_arrow="#232228"
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View>
                            <Text style={{ fontSize: 48, fontWeight: "bold", color: "white" }} >Software Development Engineer</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>$150k</Text>
                                <Text style={{ fontSize: 16, color: "white" }}>/year</Text>
                            </View>
                            <Ionicons name='chevron-forward-outline' size={16} color="white" />
                        </View>
                    </View>


                </View>

                <View style={[styles.cadre_generale, styles.cadre_amazon]} >

                    <View style={styles.tete}>
                        <View style={styles.sous_cadre}>
                            <Image style={styles.logo_entreprise} source={require('../assets/img/amazon.png')} />
                            <Text style={{ marginLeft: 10 }}>Amazon</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Job', { offre: "Amazon" })}
                            activeOpacity={0.8}
                        >
                            <Fleche
                                bg_color_fleche="white"
                                color_arrow="#232228"
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View>
                            <Text style={{ fontSize: 48, fontWeight: "bold" }} >Software Development Engineer</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                <Text style={{ fontSize: 24, fontWeight: "bold" }}>$150k</Text>
                                <Text style={{ fontSize: 16 }}>/year</Text>
                            </View>
                            <Ionicons name='chevron-forward-outline' size={16} />
                        </View>
                    </View>


                </View>

                <View style={[styles.cadre_generale, styles.cadre_microsoft]} >

                    <View style={styles.tete}>
                        <View style={styles.sous_cadre}>
                            <Image style={styles.logo_entreprise} source={require('../assets/img/microsoft.png')} />
                            <Text style={{ marginLeft: 10, color: "white" }}>Microsoft</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Job', { offre: "Microsoft" })}
                            activeOpacity={0.8}
                        >
                            <Fleche
                                bg_color_fleche="white"
                                color_arrow="#232228"
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View>
                            <Text style={{ fontSize: 48, fontWeight: "bold", color: "white" }} >Software Development Engineer</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                <Text style={{
                                    fontSize: 24, fontWeight: "bold", color: "white"
                                }}>$150k</Text>
                                < Text style={{ fontSize: 16, color: "white" }}>/year</Text>
                            </View>
                            <Ionicons name='chevron-forward-outline' size={16} color="white" />
                        </View>
                    </View>


                </View>

                <View style={[styles.cadre_generale, styles.cadre_google]} >

                    <View style={styles.tete}>
                        <View style={styles.sous_cadre}>
                            <Image style={styles.logo_entreprise} source={require('../assets/img/google.jpg')} />
                            <Text style={{ marginLeft: 10 }}>Google</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Job', { offre: "Google" })}
                            activeOpacity={0.8}
                        >
                            <Fleche
                                bg_color_fleche="white"
                                color_arrow="#232228"
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View>
                            <Text style={{ fontSize: 48, fontWeight: "bold" }} >Software Development Engineer</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                <Text style={{ fontSize: 24, fontWeight: "bold" }}>$150k</Text>
                                <Text style={{ fontSize: 16 }}>/year</Text>
                            </View>
                            <Ionicons name='chevron-forward-outline' size={16} />
                        </View>
                    </View>


                </View>

            </ScrollView>

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
        borderRadius: 100

    },

    logo_entreprise: {
        // A supprimer

        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },

    cadre_generale: {
        // A supprimer
        padding: 16,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },

    tete: {
        // A supprimer
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },

    sous_cadre: {
        // A supprimer

        flexDirection: "row", alignItems: "center"
    },

    cadre_uber: {
        backgroundColor: "#684BF1",
        paddingBottom: 40,
        marginBottom: -20

    },

    cadre_amazon: {
        backgroundColor: "#FDC741",
        paddingBottom: 40,
        marginBottom: -20

    },

    cadre_microsoft: {
        backgroundColor: "#202020",
        paddingBottom: 40,
        marginBottom: -20

    },

    cadre_google: {
        backgroundColor: "#CBD87E",

    },


})
export default Vacancies;