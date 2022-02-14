import {View,StyleSheet,Text} from 'react-native'

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props?.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height:70,
        backgroundColor:'#009DAE',
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize:30,
        padding:10,
        color:'white'
    }
})

export default Header