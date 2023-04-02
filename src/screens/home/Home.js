import { SafeAreaView,ScrollView,View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { BottomTabs, Categories, Header,RestaurantItems,SearchBar } from '../../components'
import {styles} from './styles'

import { Divider} from '@rneui/base';
import { yelpApiKey } from '../../utils';



const Home = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [city, setCity] = useState('San Francisco');
  const [activeTab, setActiveTab] = useState('delivery')


  const getRestaurantsFromYelp = async () => {
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
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
      setRestaurantsData(data?.businesses?.filter((business) => business?.transactions?.includes(activeTab.toLowerCase())))
      )
    } catch (error) {
      console.log(error)
    }

    }
  useEffect(() => {
      getRestaurantsFromYelp()
  }, [city,activeTab])
  
//  console.log(restaurantsData)

  return (
    <SafeAreaView style={styles.safeArea}>
     <View style={styles.rootView}>
     <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
     <SearchBar setCity={setCity}/>
     </View>
   <ScrollView showsVerticalScrollIndicator={false}>
   <Categories/>
   <RestaurantItems restaurants={restaurantsData}/>
   </ScrollView>
   <Divider width={1}/>
   <BottomTabs/>
    </SafeAreaView>
  )
}

export default Home