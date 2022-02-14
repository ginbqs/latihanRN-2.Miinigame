import {useState,useRef, useEffect} from 'react'
import {View,Text,ScrollView,StyleSheet, Alert,FlatList} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import Card from '../../components/partthree/Card'
import MainButton from '../../components/partthree/MainButton'
import NumberContainer from '../../components/partthree/NumberContainer'
import Color from '../../constant/Color'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude)
    }else{
        return rndNum
    }
}
const renderListItem = (listLength,itemData) => {
    return (
        <View style={styles.list}>
            <Text>#{listLength - itemData.index}</Text>
            <Text>{itemData.item}</Text>
        </View>
    )
}
const GameScreen = props => {
    const initialGuess = generateRandomBetween(1,100,props.userChoise);
    const [currentGuess,setCurrentGuess] = useState(initialGuess)
    const [passGuess,setPassGuess] = useState([initialGuess])
    const [rounds,setRounds] = useState(0)

    const currentLow = useRef(1)
    const currentHight = useRef(100)

    useEffect(() => {
        if(currentGuess == props.userChoise){
            props.onGameOver(rounds)
        }
    },[currentGuess,props.userChoise,props.onGameOver])

    const nextGuessHandler = (direction) => {
        if((direction=='lower' && currentGuess < props.userChoise) || (direction=='greater' && currentGuess > props.userChoise)){
            Alert.alert('Yakin bro?',"Ini salah lho...",[{text:'batal',style:'cancel'}])
            return
        }
        if(direction==='lower'){
            currentHight.current = currentGuess
        }else{
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current,currentHight.current,currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(current => current + 1)
        setPassGuess(currentPassGuess => [nextNumber,...currentPassGuess])
        console.log(passGuess)
    }
    return(
        <View>
            <Text style={styles.title}>Tebak</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <View style={styles.buttonContainer}>
                    <MainButton onPress={nextGuessHandler.bind(this,'lower')} style={{width:100}}>
                        <Ionicons name='md-remove' size={24} color='white' />
                    </MainButton>
                    <MainButton onPress={nextGuessHandler.bind(this,'greater')}>
                        <Ionicons name='md-add' size={24} color='white' />
                    </MainButton>
                </View>
            </Card>
            <ScrollView>
                <FlatList 
                    keyExtractor={(item) => item}
                    data={passGuess}
                    renderItem={renderListItem.bind(this,passGuess.length)}
                />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    title:{
        fontSize:50,
        textAlign:'center'
    },  
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    list:{
        flexDirection:'row',
        justifyContent:'space-around',
        borderColor:Color.primary,
        marginVertical:5,
        marginHorizontal:30,
        borderRadius:5,
        padding:15,
        borderWidth:1    
    }
})
export default GameScreen;