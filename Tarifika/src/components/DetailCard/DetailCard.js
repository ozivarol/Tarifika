import styles from "./DetailCard.style"
import { View,Text,Image,Button,Linking} from "react-native"
import React,{useCallback} from "react"



const DetailCard = ({details}) =>{
    
   
    
    
    return(
        <View style={styles.container}>
            <Image source={{uri:details.strMealThumb}} style={styles.image} />
            
            <View style={styles.body_container}>
             <Text style={styles.name}>{details.strMeal}</Text>
             <Text style={styles.country}>{details.strArea}</Text>
            </View>
            
            <Text style={styles.description}>{details.strInstructions}</Text>
            <View style={styles.button}>
              <Button title="Watch On Youtube" color={"red"} onPress={ () => {Linking.openURL(details.strYoutube)}} />
            </View>
            
        </View>
          
        
    )



}

export default DetailCard