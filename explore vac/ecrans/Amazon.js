import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


const Amazon = () => {
    return (
        <LinearGradient
            colors={['#F7C840', '#F6F6EC']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            {/* Fin moitié */}
            <View style={{ flex: 2, flexDirection: "column", justifyContent: "space-between" }} >

                <View style={styles.haut} >
                    <View style={[styles.cercle, { backgroundColor: "white" }]} >
                        <Ionicons name='chevron-back-outline' size={24} />
                    </View>
                    <View>
                        <Image style={{ width: 64, height: 64, borderRadius: 64 / 2 }} source={require('../assets/img/amazon.png')} />
                    </View>
                    <View style={[styles.cercle, { backgroundColor: "white" }]}>
                        <Ionicons name="bookmark-outline" />
                    </View>
                </View>

                <View style={{ alignItems: "center" }} >
                    <Text style={{ fontSize: 35, fontWeight: 600 }}>Amazon</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                    <View style={styles.poste}>
                        <Text>Software Development Ingenior </Text>
                    </View>
                </View>

                <View style={{ alignItems: "center" }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Ionicons name="location-outline" />
                        <Text>California, USA </Text>
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

            <View style={{ flex: 3, justifyContent: "center" }}>


                <View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={styles.qualication}>
                            Minimum qualification
                        </Text>
                    </View>

                    <View style={styles.liste} >
                        <Text style={{ marginBottom: 8 }}>*Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <Text style={{ marginBottom: 8 }}>* Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</Text>
                        <Text>* Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has.</Text>
                    </View>
                </View>

                <View style={{ height: 16 }}></View>

                <TouchableOpacity style={styles.bouton} activeOpacity={0.8} >
                    <Text style={{ color: "white" }}>
                        Apply for this job
                    </Text>
                </TouchableOpacity>


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


export default Amazon;