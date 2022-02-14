import {View,TouchableHighlight,StyleSheet,Text} from 'react-native'
import Colors from '../../constant/Color'
const MainButton = props =>{
    return (
        <TouchableHighlight onPress={() => props.onPress()}>
            <View style={styles.container}>
                <Text style={styles.textButton}>{props.children}</Text>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    textButton:{
        fontSize:15
    },
    container:{
        padding:15,
        backgroundColor:Colors.primary,
        borderRadius:8,
        marginHorizontal:5,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default MainButton