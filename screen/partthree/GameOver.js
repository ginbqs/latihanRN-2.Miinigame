import {View,Text, StyleSheet,Button,Image} from 'react-native'
import Card from '../../components/partthree/Card'
import MainButton from '../../components/partthree/MainButton'

const GameOver = props => {
    return(
        <Card style={styles.container}>
            <Text style={styles.title}>The Game Over</Text>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../../assets/download.jpg')} 
                    // source={{
                    //     uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
                    // }}
                    style={styles.image} 
                    resizeMode='cover'/>
            </View>
            <Text style={styles.font}>Number Guess : {props?.numberRounds}</Text>
            <Text style={styles.font}>Number Was : {props?.useNumber}</Text>
            <View style={styles.button}>
                <MainButton onPress={props.onReStart}>Mulai Lagi</MainButton>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        width:200,
        height:200,
        borderRadius:200,
        overflow:'hidden',
        marginVertical:20
    },  
    image:{
        width:'100%',
        height:'100%'
    },  
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    container : {
        padding:30,
        alignItems:'center'
    },
    button:{
        marginTop:20
    }
})

export default GameOver;