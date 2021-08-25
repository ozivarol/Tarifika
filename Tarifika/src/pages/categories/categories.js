import React,{useState,useEffect} from "react"
import {Text,FlatList, View } from "react-native";
import Config from "react-native-config";
import axios from "axios"
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import CategoreisCard from "../../components/CategoriesCard";
import useFetch from "../../hooks/useFetch";
import Opening from "../../components/Opening/Opening";
const Categories = ({navigation}) =>{
    const {loading,data,error} = useFetch(Config.API_URL)
    console.log(data)
    const HandelCategorySelect = (strCategory) =>{
        navigation.navigate("MealsPage",{strCategory})


    }
    if (loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }
    

    const renderCategories = ({item}) => <CategoreisCard categories={item} onSelect={() => HandelCategorySelect(item.strCategory)}/>
    
    
    return(
        <View>
         <Opening />
         <FlatList 
          data={data}
          renderItem={renderCategories}

        
        
         />
        </View>
        
    )


    
}
export default Categories