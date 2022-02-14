import {TextInput,StyleSheet} from 'react-native'

const Input = props => {
    return <TextInput {...props} style={{...props.style,...styles.input}}  />
}
const styles = StyleSheet.create({
    input:{
        height:50,
        padding:15,
        borderBottomWidth:1,
        borderColor:'black',
        textAlign:'center',
        marginBottom:10
    }
})
export default Input;