import react from 'react';
import {Text , View, Image, StyleSheet}from 'react-native';


const Interview =()=>{
    return(
        <>
        

        <View style={styles.haut} >
            <View>
                <Image style={styles.rond_icone} source={require("../assets/Img/Expand_left.png")}/>
            </View>
            <View><Text style={{ fontSize : 16, fontWeight : "bold" }} >Interview stages</Text></View>
                
            <View><Image style={styles.rond_icone} source={require("../assets/Img/Meatballs_menu.png")}/></View>
        </View>

        <View style={{marginTop : 16}}>
            <Text style = {{ fontSize : 40 , fontWeight : "bold", lineHeight : 32}}>
                Amazone interviex stages
            </Text>
        </View>

        <View style={styles.box1}>

            <View style={styles.elem_box} >
                <Text style={styles.texte_stage}>Stage 1</Text>
                <Image style={styles.rond_icone} source={require("../assets/Img/Arrow_right.png")} />
            </View>

            <View>
                <Text style={styles.texte_resume
                } >Resume screen</Text>
                <Text style={{ color : "white" }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</Text>
            </View>
        </View>

        <View style={styles.box2} >

            <View style={styles.elem_box }>
                <Text style={styles.texte_stage2} >Stage 2</Text>
                <Image style={styles.rond_icone} source={require("../assets/Img/Arrow_right.png")} />
            </View>

            <View>
                <Text style={styles.texte_recruit}>Recruitment call</Text>
                <Text style={{ color : "white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</Text>
            </View>
        </View>

        <View style={styles.box3}>

            <View style={styles.elem_box }>
                <Text style={styles.texte_stage3}>Stage 3</Text>
                <Image style={styles.rond_icone} source={require("../assets/Img/Arrow_right.png")} />
            </View>

            <View>
                <Text style={styles.texte_assess}>Assessments</Text>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</Text>
            </View>
        </View>


        </>
        

        
    )
}


const styles = StyleSheet.create({

    haut :{
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center" ,
    },


rond_icone: {
    height : 8,
    width : 8,
    borderWidth: 2,
    borderColor : "#CCC9C0" ,
    borderRadius : 100,
    paddingHorizontal : 16,
    paddingVertical : 16,

},

box1 :{
    backgroundColor : "#684BF1",
    paddingHorizontal : 16,
    paddingVertical : 24,
    borderRadius : 16,
    marginTop : 8,
},

box2 :{
    backgroundColor : "#CD4C47",
    paddingHorizontal : 16,
    paddingVertical : 24,
    borderRadius : 16,
    marginTop : 8,
},

box3 :{
    backgroundColor : "#F9CD62",
    paddingHorizontal : 16,
    paddingVertical : 24,
    borderRadius : 16,
    marginTop : 8,
},


elem_box :{
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center",
},

texte_stage : {
    color : "white",
    backgroundColor : "#262628",
    borderRadius : 100,
    paddingHorizontal : 10,
    paddingVertical : 5
},

texte_resume : {
    color : "white",
   fontSize : 30
},

texte_stage2 : {
    color : "#212322",
    backgroundColor : "white",
    borderRadius : 100,
    paddingHorizontal : 10,
    paddingVertical : 5
},

texte_recruit : {
    color : "white",
   fontSize : 30
},

texte_stage3 : {
    color : "white",
    backgroundColor : "#262628",
    borderRadius : 100,
    paddingHorizontal : 10,
    paddingVertical : 5
},

texte_assess : {
   fontSize : 30
},

})

export default Interview;
