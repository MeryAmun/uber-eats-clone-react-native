import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'


const HeaderButton = ({title,
  secondStyle,
  activeTab,
setActiveTab}) => {


  return (
     <TouchableOpacity onPress={() =>setActiveTab(title)} style={[styles.touchable,{
      backgroundColor:activeTab === title ? 'black' :'white'
     }]} >
     <Text style={[styles.text,{
      color:activeTab === title  ? 'white' :'black'
     }]}>{title}</Text>
     </TouchableOpacity>
  )
}

export default HeaderButton;

const styles = StyleSheet.create({
  touchable:{
    paddingHorizontal:16,
    paddingVertical:6,
    borderRadius:30,
  },
  text:{
    fontSize:15,
    fontWeight:900
  }
  })