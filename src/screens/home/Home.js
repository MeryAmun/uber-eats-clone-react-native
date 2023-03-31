import { SafeAreaView,View } from 'react-native'
import React from 'react'
import { Header,SearchBar } from '../../components'
import {styles} from './styles'

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
     <View style={styles.rootView}>
     <Header/>
     <SearchBar/>
     </View>
    </SafeAreaView>
  )
}

export default Home