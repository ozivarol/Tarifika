import React from "react"
import styles from "./CategoreisCard.style"
import { View,Text,Image,TouchableWithoutFeedback } from "react-native"

const CategoriesCard = ({categories,onSelect}) =>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <View style={styles.body_container}>
                      
                      <Image style={styles.image} source={{uri:categories.strCategoryThumb}}/>
                    </View>
                    <View style={styles.body_container2}>
                     <Text style={styles.categories}>{categories.strCategory}</Text>
                    </View>
                    
                    
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

}
export default CategoriesCard