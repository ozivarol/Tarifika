import React,{useCallback} from "react"
import { View,Text,FlatList } from "react-native"
import useFetchM from "../../hooks/meals/useFetchM"
import Config from "react-native-config"
import DetailCard from "../../components/DetailCard/DetailCard"
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Detail({route,navigation}){
    const {idMeal} =route.params
    const {loading,error,data} =useFetchM(`${Config.API_URL3}${idMeal}`) 
    console.log(data)
    if (loading){
        return <Loading />
    }
    
    if(error){
        return <Error />
    }
    

    const renderDetail = ({item}) => <DetailCard details={item}/>
    return(
        <FlatList 
         data={data}
         renderItem={renderDetail}
        
        
        />

    )
}
export default Detail