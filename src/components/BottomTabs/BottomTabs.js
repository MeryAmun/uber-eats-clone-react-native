import { View, Text,StyleSheet } from 'react-native'
import IconHolder from './IconHolder';


const BottomTabs = () => {
  return (
    <View style={styles.root}>
      <IconHolder icon='home' title='Home'/>
      <IconHolder icon='search' title='Search'/>
      <IconHolder icon='shopping-bag' title='Shopping Bag'/>
      <IconHolder icon='receipt' title='Orders'/>
      <IconHolder icon='user' title='Accounts'/>
    </View>
  )
}

export default BottomTabs;
const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        margin:10,
        marginHorizontal:30,justifyContent:'space-between'
    }
})