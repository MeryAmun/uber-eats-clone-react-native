import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const IconHolder = ({icon, title}) => (
    <TouchableOpacity>
 <View style={styles.root}>
     <FontAwesome5 name={icon} size={25} style={styles.icon}/>
     <Text>{title}</Text>
   </View>
    </TouchableOpacity>
  
  )


export default IconHolder;

const styles = StyleSheet.create({
    root:{
        
        alignItems:'center'
    },
    icon:{
        marginBottom:3,
        alignSelf:'center'
    }
})