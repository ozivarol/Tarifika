import { StyleSheet,Dimensions} from "react-native";
const deviceSize=Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffa000"


    },
    name:{
        fontWeight:"bold",
        position:"relative",
        color:"#000000",
        fontSize:25,
        
        
        
    },
    body_container:{
        flex:1,
        margin:7,
        alignItems:"center",
        
        
        
        
        

    },
    image:{
        width:deviceSize.width*0.945,
        height:deviceSize.height*0.23,
        borderRadius:15,
        position:"relative",
        
        padding:5,
        flexDirection:"column-reverse"
        

       
        
        
        

    },
    image_container:{
        paddingStart:10,
        backgroundColor:"#ffe97d",
        justifyContent:"flex-end",
        alignItems:"center",
        borderWidth:1,
        borderRadius:5,
        opacity:0.8,
        flexDirection:"column-reverse"

        
    }
})