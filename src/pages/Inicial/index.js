import React , { useState } from 'react';
import { StyleSheet , Text , View ,TextInput ,Pressable , Keyboard , TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

export default function Inicial({navigation}) {
        const [nome , setSectionName] = useState('');

         function cadastroInicial(){
              navigation.navigate("Home")
         } 

    return (
      <View style={styles.container}>
        <Header name="Dados Pessoais"/> 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                            <Text style={styles.formLabel} >Nome</Text>
                            <TextInput
                                style={styles.inputSection}
                                placeholder=""  
                            />    
                
                            <TouchableOpacity
                                    style={styles.btn}
                                    onPress={()=>{
                                        cadastroInicial()
                                    }}    
                                >

                                <Text style={styles.textBtn}>INICIAR</Text>                  
                          </TouchableOpacity>


            </Pressable>
      </View>
    );
}


const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: '#EBF5FB',
    },
    
    form:{
      flex: 0,
      marginBottom: 0,
      backgroundColor: '#EBF5FB',
      borderRadius: 10,
      padding: 5,
      marginTop: 10,
    },

    formLabel:{
      fontSize: 18,
      fontWeight: 'bold',
      alignItems:'center',
      margin: 5,
      justifyContent: 'center',
      textAlign: 'center',
    },

    inputSection:{
      fontSize: 16,
      fontWeight: 'bold',
      width:"100%",
      borderRadius: 10 ,
      backgroundColor: "#5DADE2",
      height: 60 ,
      margin: 5,
      color: "#EBF5FB",
      justifyContent: 'center',
      textAlign: 'center',
    },
    btn:{
      width: '100%',
      height: 60 ,
      margin: 5,
      backgroundColor: '#F92e6A',
      borderRadius: 10 ,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textBtn:{
      fontSize: 16,
      fontWeight: 'bold',
      color: "#EBF5FB",
    }

    
  });