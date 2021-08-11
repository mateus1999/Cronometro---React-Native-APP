import React, { Component } from 'react'
import 
  {
  View,
  Text, 
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity
  } 
  from 'react-native'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'INICIAR',
      resultado: '',
      result: 'RESULTADO'
    }

    this.tempo = null;
    
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if(this.tempo != null){
      clearInterval(this.tempo)

      this.tempo = null;

      this.setState({botao: 'VOLTAR'})

    }else{
      this.tempo = setInterval(() => {
      this.setState({numero: this.state.numero + 0.1})
      }, 100);
      this.setState({botao: 'PARAR'})
    } this.setState({result: 'RESULTADO'})
  }

  limpar(){
    if(this.tempo != null){
      clearInterval(this.tempo)
      // Vai limpar o conometro\\
      this.tempo = null;
      this.setState({result: 'RESULTADO'})
    }else{
      this.setState({
        botao: 'VAI',
        resultado:this.state.numero.toFixed(1),
        numero: 0,
        result: 'LIMPAR'
       
      })

    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.calculadora}>Calculadora</Text>
       <Image 
       source={require('./src/cronometro.png')}
       />

       <Text style={styles.time}>{this.state.numero.toFixed(1)}</Text>

       <View style={styles.btnArea}> 
         <TouchableOpacity style={styles.btn}
         onPress={this.vai}
         >
           <Text style={styles.btnTexto}>{this.state.botao}
           </Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.btn}   
         onPress={this.limpar}>
           <Text style={styles.btnTexto}>{this.state.result}</Text>
         </TouchableOpacity>   
       </View>
       <View style={styles.areaUltima}>
       <Text style={styles.tempo}>
            {'Seu Resultado foi = '+ this.state.resultado}
       </Text>
         </View>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  calculadora:{
    color: 'white',
    fontSize: 55,
    fontWeight: 'bold',
    marginBottom: 25

  },  

  time:{
    marginTop: -160,
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold'
  },

  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue'
  },
  areaUltima:{
    marginTop: 40
  },
  tempo: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  }
})