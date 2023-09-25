import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import {CaretLeft} from 'phosphor-react-native';

import navigatiorart from '../../../assets/navigatorart.png';

export default function SearchTravel({ navigation }) {

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <View style={styles.header1}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.header2}>
              <Text style={styles.title}>Pesquisar Viagem</Text>
            </View>
        </View>
        <View style={styles.content}>
           <View style={styles.principalContent}>
              <View style={styles.formContainer}>
                <TextInput style={styles.form} placeholder="Onde você está?" />
                <TextInput style={styles.form} placeholder="Para onde você deseja ir?" />
                <TextInput style={styles.form} placeholder="Na data de 00/00/0000" />
              </View>
              <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('SearchResult')}>
                <Text style={styles.buttonText}>Buscar</Text>
              </TouchableOpacity>
           </View>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFAC03',
  },
  header: {
    flex: 1,
    backgroundColor: '#EFAC03',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 8,
    backgroundColor: '#f5f5f5',
    padding: 40,
  },

  header1: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  header2: {
    flex: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold'
  },
  principalContent: {
    alignItems: 'center',
    marginVertical: 15,
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
  form: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC'
  },
  formContainer: {
    width: '100%',
  },
  formIcons: {
    backgroundColor: 'pink'
  }
});