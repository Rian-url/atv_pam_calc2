import { Text, SafeAreaView, StyleSheet, input, view } from 'react-native';
import React, { useState, useEffect} from 'react'

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [n1, setN1] = useState (0)
  const [n2, setN2] = useState (0)
  const [n3, setN3] = useState (0)
  
   function grades ()  {
     const media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3))/3
     if (media >= 6) {
       return document.getElementById("result").innerHTML = "Aprovado(a)";}
   else {
    return document.getElementById("result").innerHTML = "Reprovado(a)";}
  }


return (
  <view>
   <SafeAreaView style={styles.div}>
    <h1> CALCULADORA </h1>
    <input type='number' value={n1} onChange={(e) => setN1(e.target.value)}/>
    <input type='number' value={n2} onChange={(e) => setN2(e.target.value)}/>
    <input type='number' value={n3} onChange={(e) => setN3(e.target.value)}/>
    <input type='submit' value='Calcular' onClick={grades}/>
    <label id='result' style={styles.label}> </label>
    </SafeAreaView>
    </view>
  );
 } 


const styles = StyleSheet.create({
  label: {
    
  }
});
