import {useState} from 'react'
import { StyleSheet, View, FlatList,Text } from 'react-native';
// import * as Font from 'expo-font'
// import {AppLoading} from 'font'

import Header from './components/partthree/Header';
import GameOver from './screen/partthree/GameOver';
import GameScreen from './screen/partthree/GameScreen';
import GameStart from './screen/partthree/GameStart';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.tff')
//   })
// }

export default function App() {
  const [useNumber,setUseNumber] = useState()
  const [guessRounds,setGuessRounds] = useState(0)
  const [dataLoaded,setDataLoaded] = useState(false)

  // if(!dataLoaded){
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //     />
  //   )
  // }

  const startGame = (selectedNumber) => {
    setUseNumber(selectedNumber)
    setGuessRounds(0)
  }
  const gameOverHandle = numOfRounds =>{
    setGuessRounds(numOfRounds)
  }
  const configureNewGame = () => {
    setGuessRounds(0)
    setUseNumber(null)
  }

  let content = <GameStart startGame={startGame} />

  if(useNumber && guessRounds <=0){
    content = <GameScreen userChoise={useNumber} startGame={startGame} onGameOver={gameOverHandle} />
  }else if(guessRounds > 0){
    content = <GameOver numberRounds={guessRounds} useNumber={useNumber} onReStart={configureNewGame} />
  }
  return (
    <View style={styles.container}>
        <Header title="Tebak Angka" />
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex:1,
  },

});
