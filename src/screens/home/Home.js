import { SafeAreaView,ScrollView,View } from 'react-native'
import React from 'react'
import { Categories, Header,RestaurantItem,SearchBar } from '../../components'
import {styles} from './styles'

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
     <View style={styles.rootView}>
     <Header/>
     <SearchBar/>
     </View>
   <ScrollView showsVerticalScrollIndicator={false}>
   <Categories/>
   <RestaurantItem/>
   </ScrollView>
    </SafeAreaView>
  )
}

export default Home