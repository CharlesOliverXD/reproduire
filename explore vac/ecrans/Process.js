import react from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carte from '../composants/carte';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


const Process = ({ navigation, route }) => {

    NomOffre = route.params;

    return (
        <View style={styles.container}>

            <View style={styles.haut} >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}
                >
                    <View style={styles.cercle} >
                        <Ionicons name="arrow-back" size={24} color="#333027" />
                    </View>
                </TouchableOpacity>

                <View><Text style={{ fontSize: 16, fontWeight: "bold" }} >Interview stages</Text></View>

                <TouchableOpacity activeOpacity={.8}>
                    <View>
                        <View style={styles.cercle}>
                            <View style={[styles.point, { marginBottom: 3 }]}></View>
                            <View style={[styles.point, { marginBottom: 3 }]}></View>
                            <View style={styles.point}></View>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>

            <View style={{ marginTop: 16 }}>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>
                    {NomOffre}
                </Text><Text style={{ fontSize: 40, fontWeight: "bold" }}>
                    interview stages
                </Text>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <Carte
                    stage="Stage 1"
                    titre="Resume screen"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"

                    bg_stage="#262628"
                    color_stage="white"

                    bg_color_fleche="#232228"
                    color_arrow="white"

                    bg_color="#684BF1"
                    texte_color="white"
                />

                <Carte
                    stage="Stage 2"
                    titre="Recruitment call"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"

                    bg_stage="white"
                    color_stage="#262628"

                    bg_color_fleche="white"
                    color_arrow="#232228"

                    bg_color="#CD4C47"
                    texte_color="white"
                />

                <Carte
                    stage="Stage 3"
                    titre="Resume screen"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"

                    bg_stage="#262628"
                    color_stage="white"

                    bg_color_fleche="#232228"
                    color_arrow="white"

                    bg_color="#F9CD62"
                    texte_color="black"
                />

                <Carte
                    stage="Stage 4"
                    titre="Finalisation"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"

                    bg_stage="white"
                    color_stage="#262628"

                    bg_color_fleche="white"
                    color_arrow="#232228"

                    bg_color="#262628"
                    texte_color="white"
                />

            </ScrollView>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#EFECE3",
        padding: 16,
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 48,
    },


    haut: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    cercle: {
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

})

export default Process;
