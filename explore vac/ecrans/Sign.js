import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,

} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';


const Sign = () => {


    return (
        <View style={styles.container}>

            <View>
                <Image style={styles.logo} source={require("../assets/img/Logo_carre.jpg")} />
            </View>

            <View>
                <Text style={{ fontSize: 32, fontWeight: 300 }}>Sign up</Text>
            </View>

            <View>
                <View style={{ marginBottom: 16 }}>
                    <Text style={{ marginBottom: 8 }}>Email</Text>
                    <TextInput
                        placeholder='Your email'
                        style={styles.saisie}
                    />
                </View>

                <View>
                    <Text style={{ marginBottom: 8 }}>Password</Text>
                    <TextInput
                        placeholder='Enter your password'
                        secureTextEntry={true}
                        style={styles.saisie}
                    />
                </View>

                <View style={{ height: 24 }}></View>

                <View>
                    <Text>I accept the term and privacy policies</Text>
                </View>

                <View style={{ height: 24 }}></View>


                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.bouton}
                >
                    <Text style={{ color: "white" }} >Sign up</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.alligneur}>
                <View style={styles.trait}></View>
                <Text style={{ paddingHorizontal: 8 }}>Or register with</Text>
                <View style={styles.trait}></View>
            </View>

            <View>
                <View>
                    {/* <Image source={require("../assets/img/google.jpg")} /> */}
                </View>

                <View>
                    {/* <Image source={require("../assets/img/")} /> */}
                </View>

                <View>
                    {/* <Image source={require("../assets/img/")} /> */}
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text>Already have a count ?</Text>
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>Login</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingVertical: 64,
    },

    logo: {
        width: 64,
        height: 64,
        borderRadius: 100,
        alignSelf: "center"
    },

    alligneur: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    trait: {
        width: 92,
        height: 1,
        backgroundColor: "grey",
        opacity: 0.3,
    },

    saisie: {
        borderWidth: 1,
        borderColor: "black",
        width: 300,
        borderRadius: 5,

    },
    bouton: {
        backgroundColor: "#2c2d32",
        paddingVertical: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },
})

export default Sign;