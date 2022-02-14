import { useEffect, useState } from 'react'
import {View, StyleSheet, Text,Keyboard,Button,TouchableWithoutFeedback,Alert,ScrollView,KeyboardAvoidingView,Dimensions} from 'react-native'
import Card from '../../components/partthree/Card'
import Input from '../../components/partthree/Input'
import MainButton from '../../components/partthree/MainButton'
import NumberContainer from '../../components/partthree/NumberContainer'
import Colors from '../../constant/Color'

const GameStart = props => {
    const [value,setValue] = useState('')
    const [selectValue,setSelectValue] = useState()
    const [confirmed,setConfirmed] = useState(false)
    const [widthButton,setWidthButton] = useState(Dimensions.get('window').width)

    const handleNumberInput = (number) => {
        setValue(number.replace(/[^0-9]/g,''));
    }
    const handleConfirm = () => {
        const chooseNumber = parseInt(value)
        if(isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber >= 99){
            Alert.alert('Angka Salah','Angka hanya diperbolehkan memilih dari 1 sampai 99',[{text:'OK',style:'destructive',onPress:handleReset}])
            return
        }
        setSelectValue(parseInt(value))
        setValue('')
        setConfirmed(true)
        Keyboard.dismiss()
    }
    const handleReset = () => {
        setSelectValue()
        setConfirmed(false)
        setValue('')
    }
    let confirmOutPut
    if(confirmed){
        confirmOutPut = (
            <Card style={styles.littleCard}>
                <Text>Angka yang kamu pilih</Text>
                <NumberContainer reset={handleReset}>
                    {parseInt(selectValue)}
                </NumberContainer>
                <MainButton  onPress={props.startGame.bind(this,selectValue)}>Mulai</MainButton>
            </Card>
        )
    }   
    useEffect(() =>{
        const updateLayout = () => {
            setWidthButton(Dimensions.get('window').width / 4)
        }
        Dimensions.addEventListener('change',updateLayout)
        return () => {
            Dimensions.removeEventListener('change',updateLayout)
        }
    })
    return (
        // <ScrollView style={styles.scrollContainer}>
        // <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30} >
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
        <View style={styles.container}>
           <Text style={styles.title}>Yu, mulai main!</Text>
           <Card style={styles.containerInput}>
                <Text style={styles.subTitle}>Pilih Angka</Text>
                <Input 
                    style={styles.input}
                    placeholder='Pilih Angka'
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={handleNumberInput}
                    value={value}
                />
                <View style={styles.containerButton}>
                    <View style={{...styles.button,width:widthButton}}>
                        <Button title="Reset" color={Colors.accent} onPress={handleReset} />
                    </View>
                    <View style={{...styles.button,width:widthButton}}>
                        <Button title="Confim" color={Colors.primary} onPress={handleConfirm} />
                    </View>
                </View>
            </Card>
            {confirmOutPut}
        </View>
        </TouchableWithoutFeedback> 
        // </KeyboardAvoidingView>
        // </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#71DFE7',
    },
    title:{
        fontSize:20,
        margin:20,
        color:'black'
    },
    subTitle:{
        fontSize:18,
        marginBottom:10
    },
    containerInput:{
        width:'100%',
        alignItems:'center',
    },  
    input:{
        width:100,
    },
    containerButton:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:5
    },
    littleCard:{
        marginVertical:20,
        width:200
    }
})
export default GameStart