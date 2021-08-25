import React from "react"
import Opening from "./components/Opening/Opening"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import categories from "../src/pages/categories"
import meal from "../src/pages/meal"
import detail from "../src/pages/detail"
const Stack = createNativeStackNavigator();


function App(){
  return(
    <NavigationContainer>
      <Opening />
      <Stack.Navigator>
        
        <Stack.Screen name="CategoriesPage" component={categories} options={{title:"Categories",headerTintColor:"#ffa000",headerTitleStyle:{fontSize:20,fontWeight:"bold"},headerTitleAlign:"center"}} />
        <Stack.Screen name="MealsPage" component={meal} options={{title:"MealsPage",headerTintColor:"#ffa000",headerTitleStyle:{fontSize:20,fontWeight:"bold"},headerTitleAlign:"center"}} />
        <Stack.Screen name="DetailPage" component={detail} options={{title:"DetailPage",headerTintColor:"#ffa000",headerTitleStyle:{fontSize:20,fontWeight:"bold"},headerTitleAlign:"center"}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App