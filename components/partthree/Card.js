import {View,StyleSheet} from 'react-native'
const Card = props => {
    return <View style={{...props.style,...styles.card}}>{props.children}</View>
}

const styles = StyleSheet.create({
    card:{
        shadowColor: 'black',
        elevation:5,
        padding:30,
        borderRadius:11
    }
})
export default Card;