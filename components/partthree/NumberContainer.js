import {View, StyleSheet, Text} from 'react-native'
import Colors from '../../constant/Color';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center'
        
    },
    text:{
        textAlign:'center',
        margin:10,
        paddingHorizontal:30,
        paddingVertical:10,
        borderWidth:5,
        borderColor:Colors.accent,
        fontSize:40,
        borderRadius:12
    },
    btn:{
        width:100,
        height:70
    }
})
export default NumberContainer;