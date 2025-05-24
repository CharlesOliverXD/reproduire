import react from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Interview = () => {
    return (
        <View>

            <View style={styles.haut} >
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.retour_rond} >
                        <Ionicons name="arrow-back" size={24} color="#333027" />
                    </View>
                </TouchableOpacity>

                <View><Text style={{ fontSize: 16, fontWeight: "bold" }} >Interview stages</Text></View>

                <TouchableOpacity activeOpacity={.8}>
                    <View>
                        <View style={styles.retour_rond}>
                            <View style={[styles.point, { marginBottom: 3 }]}></View>
                            <View style={[styles.point, { marginBottom: 3 }]}></View>
                            <View style={styles.point}></View>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={{ marginTop: 16 }}>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>
                    Amazone interview stages
                </Text>
            </View>

            <View style={styles.box1}>

                <View style={styles.elem_box} >
                    <Text style={styles.texte_stage}>Stage 1</Text>

                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.retour_rond_noir}>
                            <Ionicons style={styles.tourne} name="arrow-back" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.texte_resume
                    } >Resume screen</Text>
                    <Text style={{ color: "white" }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</Text>
                </View>
            </View>

            <View style={styles.box2} >

                <View style={styles.elem_box}>
                    <Text style={styles.texte_stage2} >Stage 2</Text>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.retour_rond_blan}>
                            <Ionicons style={styles.tourne} name="arrow-back" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.texte_recruit}>Recruitment call</Text>
                    <Text style={{ color: "white" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</Text>
                </View>
            </View>

            <View style={styles.box3}>

                <View style={styles.elem_box}>
                    <Text style={styles.texte_stage3}>Stage 3</Text>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.retour_rond_noir}>
                            <Ionicons style={styles.tourne} name="arrow-back" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.texte_assess}>Assessments</Text>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</Text>
                </View>
            </View>


        </View>



    )
}


const styles = StyleSheet.create({

    haut: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    box1: {
        backgroundColor: "#684BF1",
        paddingHorizontal: 16,
        paddingVertical: 24,
        borderRadius: 16,
        marginTop: 8,
    },

    retour_rond: {
        borderWidth: 1,
        borderColor: "#333027",
        padding: 8,
        borderRadius: 100,
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center"

    },

    point: {
        backgroundColor: "#333027",
        height: 5,
        width: 5,
        borderRadius: 100

    },

    box2: {
        backgroundColor: "#CD4C47",
        paddingHorizontal: 16,
        paddingVertical: 24,
        borderRadius: 16,
        marginTop: 8,
    },

    retour_rond_noir: {
        backgroundColor: "#252719",
        padding: 8,
        borderRadius: 100
    },

    tourne: {
        transform: [{ rotate: '135deg' }]
    },

    retour_rond_blan: {
        backgroundColor: "#F4FEF8",
        padding: 8,
        borderRadius: 100
    },


    box3: {
        backgroundColor: "#F9CD62",
        paddingHorizontal: 16,
        paddingVertical: 24,
        borderRadius: 16,
        marginTop: 8,
    },


    elem_box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    texte_stage: {
        color: "white",
        backgroundColor: "#262628",
        borderRadius: 100,
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    texte_resume: {
        color: "white",
        fontSize: 30
    },

    texte_stage2: {
        color: "#212322",
        backgroundColor: "white",
        borderRadius: 100,
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    texte_recruit: {
        color: "white",
        fontSize: 30
    },

    texte_stage3: {
        color: "white",
        backgroundColor: "#262628",
        borderRadius: 100,
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    texte_assess: {
        fontSize: 30
    },

})

export default Interview;
