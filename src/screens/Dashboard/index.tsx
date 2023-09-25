import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { CaretLeft } from 'phosphor-react-native';

import profile from  '../../../assets/profile.png';
import navigatiorart from '../../../assets/navigatorart.png';

export default function Dashboard({ navigation }) {

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <View style={styles.header1}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.header2}>
              <Text style={styles.title}>Início</Text>
            </View>
        </View>
        <View style={styles.content}>
           <View style={styles.subheader}>
            <View style={styles.subheaderAlign}>
                <Text style={styles.titleSubHeader}>Olá Passageiro!</Text>
                <Text style={styles.subTitleSubHeader}>Seja bem vindo(a)!</Text>
            </View>
            <View style={styles.subheaderAlign}>
                <Image source={profile} style={styles.profile} />
            </View>
           </View>
           <View style={styles.principalContent}>
              <Image source={navigatiorart} style={styles.art} />
              <Text style={styles.textArt}>Há motoristas próximo {'\n'}de você agora!</Text>
              <Text style={styles.subTextArt}>Localize o motorista que você{'\n'} procura e contrate online</Text>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SearchTravel')}>
                <Text style={styles.buttonText}>Pesquisar Viagem</Text>
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
  subheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 20
  },
  content: {
    flex: 8,
    backgroundColor: 'white',
    padding: 40,
  },

  header1: {
    flex: 2,
    alignItems: 'center',
    justifyContent:  'flex-end',
  },

  header2: {
    flex: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold'
  },
  profile: {
    width: 52,
    height: 52
  },
  titleSubHeader: {
    fontSize: 24,
  },
  subTitleSubHeader: {
    fontSize: 19,
    marginTop: 5
  },
  subheaderAlign: {
    alignItems: 'center'
  },
  principalContent: {
    padding: 15,
    alignItems: 'center',
    marginVertical: 15
  },
  art:{
    marginVertical: 10
  },
  textArt: {
    marginVertical: 15,
    fontSize: 24,
    textAlign: 'center'
  },
  subTextArt: {
    marginVertical: 10,
    fontSize: 18,
    textAlign: 'center'
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
});