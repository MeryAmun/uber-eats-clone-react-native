import { SafeAreaView,ScrollView,View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Categories, Header,RestaurantItems,SearchBar } from '../../components'
import {styles} from './styles'
import { localRestaurants, yelpApiKey } from '../../dummyData/data'



const Home = () => {
  const [restaurantsData, setRestaurantsData] = useState(localRestaurants)


  const getRestaurantsFromYelp = async (searchTerm) => {
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`
    const apiOptions = {
      method: "GET",  
      headers: {
        Authorization: `Bearer ${yelpApiKey}`,
        'Content-type': 'application/json'
      },
     
    }
   
    try {
     return await fetch(url,apiOptions).then((response) => response.json())
      .then((data) => 
      setRestaurantsData(data.businesses)
      )
    } catch (error) {
      console.log(error)
    }

    }
  useEffect(() => {
      getRestaurantsFromYelp()
  }, [])
  
//  console.log(restaurantsData)
  return (
    <SafeAreaView style={styles.safeArea}>
     <View style={styles.rootView}>
     <Header/>
     <SearchBar getRestaurantsFromYelp={getRestaurantsFromYelp}/>
     </View>
   <ScrollView showsVerticalScrollIndicator={false}>
   <Categories/>
   <RestaurantItems restaurants={restaurantsData}/>
   </ScrollView>
    </SafeAreaView>
  )
}

export default Home