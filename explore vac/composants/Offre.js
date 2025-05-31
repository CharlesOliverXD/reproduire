import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Fleche from './Fleche';
import { Ionicons } from '@expo/vector-icons';



const Offre = () => {
    return (
        <View >

            <View >
                <View >
                    <Image source={require('../assets/img/uber.png')} />
                    <Text >User</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Job', { offre: "Uber" })}
                    activeOpacity={0.8}
                >
                    {/* <Fleche
                        bg_color_fleche="white"
                        color_arrow="#232228"
                    /> */}
                </TouchableOpacity>
            </View>

            <View>
                <View>
                    <Text>Software Development Engineer</Text>
                </View>

                <View >
                    <View >
                        <Text >$150k</Text>
                        <Text >/year</Text>
                    </View>
                    {/* <Ionicons name='chevron-forward-outline' size={16} color="white" /> */}
                </View>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    cadre_generale: {

        padding: 16,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    cadre_uber: {
        backgroundColor: "#684BF1",
        paddingBottom: 40,
        marginBottom: -20

    },

    tete: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },

    sous_cadre: {
        flexDirection: "row", alignItems: "center"
    },

    logo_entreprise: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },


})


export default Offre;