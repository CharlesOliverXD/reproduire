import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';




const Principal = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Elements du haut */}
            <View style={[styles.section, { flex: 2, marginTop: 32 }]} >
                <View>
                    <Image style={{ width: 76, height: 27 }} source={require('../assets/img/Logo.png')} />
                </View>
                <View>
                    <Text style={{ fontSize: 32, fontWeight: 800 }}>Trouvez votre 👨‍💻</Text>
                    <Text style={{ fontSize: 32, fontWeight: 800 }}>place dans une</Text>
                    <Text style={{ fontSize: 32, fontWeight: 800 }}>meilleures ✨</Text>
                    <Text style={{ fontSize: 32, fontWeight: 800, color: "#677483" }}>équipes</Text>
                </View>
            </View>
            {/* Fin Elements du haut */}

            {/* Les cadres */}

            <View style={[styles.section, { flex: 1, paddingTop: 64 }]} >
                <View>
                    <TouchableOpacity
                        style={[styles.bouton, { backgroundColor: "#2C3137" }]}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Vacancies')}

                    >
                        <Ionicons name="logo-apple" size={16} color="white" />
                        <Text style={{ color: "white", marginLeft: 8 }} >Sign up with Apple</Text>
                    </TouchableOpacity>

                    <View style={{ height: 16 }} ></View>

                    <TouchableOpacity

                        style={[styles.bouton, { backgroundColor: "#EFEFEF" }]}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Vacancies')}
                    >
                        <Text>I have an account</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                </View>
            </View>
            {/*Fin Les cadres */}

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        marginBottom: 50,
        padding: 16
    },

    section: {
        flexDirection: "column",
        justifyContent: "space-between"
    },

    bouton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        borderRadius: 8
    },

    account: {

    },

})
export default Principal;