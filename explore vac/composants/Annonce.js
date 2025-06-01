import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Fleche from './Fleche';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const Annonce = () => {

    const navigation = useNavigation();

    return (

        < View style={[styles.cadre_generale, styles.cadre_uber]} >

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


        </View >

    )
}

const styles = StyleSheet.create({



    logo_entreprise: {

        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },

    cadre_generale: {
        padding: 16,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },

    tete: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },

    sous_cadre: {
        flexDirection: "row", alignItems: "center"
    },

    cadre_uber: {
        backgroundColor: "#684BF1",
        paddingBottom: 40,
        marginBottom: -20

    },

})


export default Annonce;