import { StyleSheet,Dimensions } from "react-native";
const deviceSize=Dimensions.get("window")
export default StyleSheet.create({
    container:{
        flex:1,
        
    },
    image:{
        width:deviceSize.width*1,
        height:deviceSize.height*0.35,
        
    },
    body_container:{
        flex:1,
        alignItems:"center",
        borderWidth:1,
        borderColor:"white",
        borderBottomColor:"grey"
        
        
        
        
    },
    name:{
        fontWeight:"bold",
        fontSize:25,
        color:"#b71c1c"
        
    },
    country:{
        fontWeight:"bold",
        color:"#b71c1c",
        fontSize:15,

    },
    description:{
        fontSize:17,
        fontWeight:"700"
    },
    button:{
        flex:1,
        marginLeft:5,
        marginRight:5,
        borderRadius:20,
        marginBottom:5,
        padding:5,
    }
    
})