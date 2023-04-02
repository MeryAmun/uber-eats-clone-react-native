import { View, StyleSheet } from 'react-native'
import  HeaderButton from './HeaderButton'

const Header = ({activeTab, setActiveTab}) => {

    return (
        <View style={styles.root}>
        <HeaderButton title='Delivery' activeTab={activeTab} setActiveTab={setActiveTab}/>
        <HeaderButton title='Pickup' activeTab={activeTab} setActiveTab={setActiveTab}/>
        </View>
      )
}


export default Header;

const styles = StyleSheet.create({
    root:{
      flexDirection:'row',
      alignSelf:'center',
      marginTop:10
    },
    secondStyle:{
        // color:'white',

    }
    })