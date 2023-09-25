import { StyleSheet, View, Text, SafeAreaView, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import {CaretLeft } from 'phosphor-react-native';

import background from "../../../assets/background1.png";
import logo from "../../../assets/logo.png";

export default function ConfirmSMS({ navigation }) {

  return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={background} resizeMode="cover" style={styles.image}>
            <View style={styles.containerLogo}>
              <Image source={logo} />
              <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={25} />
                </TouchableOpacity>
            </View>   
            </View>   
            
          
            <View style={styles.containerForm}>
              <Text style={styles.title}>Confirme o código recebido</Text>
              <View style={styles.codeContainer}>
                <TextInput
                    style={styles.form}
                    maxLength={1}
                />
                <TextInput
                    style={styles.form}
                    maxLength={1}
                />
                <TextInput
                    style={styles.form}
                    maxLength={1}
                />
                <TextInput
                    style={styles.form}
                    maxLength={1}
                />
                <TextInput
                    style={styles.form}
                    maxLength={1}
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.buttonText}>CONFIRMAR</Text>
              </TouchableOpacity>
            </View>
        </ImageBackground>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFAC03'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 4,
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 100,
    marginTop: 20,
  }, 

  containerForm: {
    flex: 3,
    margin: 50,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  title: {
    fontSize: 20,
    marginBottom: 20
  },
  form: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 18,
    width: 40,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#CCC'
  },
  button: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#023047',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  codeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});