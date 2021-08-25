import React from "react"
import { View,Text,FlatList } from "react-native"
import Config from "react-native-config"
import useFetchM from "../../hooks/meals/useFetchM"
import MealsCard from "../../components/MealsCard/MealsCard"
import Loading from "../../components/Loading";
import Error from "../../components/Error";


function Meal({route,navigation}){
    const {strCategory} =route.params
    const {loading,error,data} =useFetchM(Config.API_URL2+"="+strCategory) 
    console.log(data)
    const HandelMealSelect = (idMeal) =>{
        navigation.navigate("DetailPage",{idMeal})


    }
    if (loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }
    const renderMeals = ({item}) =><MealsCard  meals={item} onSelect={() => HandelMealSelect(item.idMeal)} />
    
    
    
    return(
        <FlatList 
         data={data}
         renderItem={renderMeals}
        />
        
    )
}

export default Meal