import React from "react"

import { View,Text,Image,TouchableWithoutFeedback,ImageBackground } from "react-native"
import styles from "./MealsCard.style"

const MealsCard = ({meals,onSelect}) =>{
    return(
    <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <View style={styles.body_container}>
                <ImageBackground source={{uri:meals.strMealThumb}} style={styles.image} imageStyle={{ borderRadius: 15}}>
                <View style={styles.image_container}>
                     
                       
                    <Text style={styles.name}>{meals.strMeal}</Text>
                       
                       
                       
                     
                </View>

                </ImageBackground>
                
                   
               
                
            </View>

        </View>



    </TouchableWithoutFeedback>)


}


export default MealsCard