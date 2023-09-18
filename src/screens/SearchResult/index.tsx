import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Star, Phone, MapPin, MapTrifold, CaretLeft } from 'phosphor-react-native';

import profile from  '../../../assets/profile.png';

export default function SearchResult({ navigation }) {

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View style={styles.header1}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={20} />
                </TouchableOpacity>
            </View>
            <View style={styles.header2}>
                <Text style={styles.title}>Resultado da Pesquisa</Text>
            </View>
        </View>
        <View style={styles.content}>
           <View style={styles.principalContent}>
              <ScrollView style={styles.formContainer}>
                <View style={[styles.itemResult, styles.shadowProp]}>
                    <View style={styles.headerItem}>
                        <View style={styles.profileItem}>
                            <Image source={profile} />
                            <View style={styles.headerItemText}>
                                <Text style={styles.nick}>hertonk</Text>
                                <Text style={styles.name}>Herton Vilarim</Text>
                                <View style={styles.starsItem}>
                                    <Star size={18} weight="fill" />
                                    <Star size={18} weight="fill" />
                                    <Star size={18} weight="fill" />
                                    <Star size={18} weight="fill" />
                                    <Star size={18} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View>
                            <View style={styles.subItem1}>
                                <MapTrifold size={20} weight="fill" style={styles.icon} />
                                <Text style={styles.textItem}>Início da Rota:</Text>
                                <Text>Floresta</Text>
                            </View>
                            <View style={styles.subItem1}>
                                <MapPin size={20} weight="fill" style={styles.icon} />
                                <Text style={styles.textItem}>Fim da Rota:</Text>
                                <Text>Petrolina</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.subItem2}>
                                <Text style={styles.textItem2}>Ar condicionado:</Text>
                                <Text>Sim</Text>
                            </View>
                            <View style={styles.subItem2}>
                                <Text style={styles.textItem2}>Reboque:</Text>
                                <Text>Sim</Text>
                            </View>
                            <View style={styles.subItem2}>
                                <Text style={styles.textItem2}>Animais:</Text>
                                <Text>Sim</Text>
                            </View>
                            <View style={styles.subItem2}>
                                <Text style={styles.textItem2}>Encomendas:</Text>
                                <Text>Pequenas, Médias e Grandes</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Agendar Viagem</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.itemResult, styles.shadowProp]}>
                    <View style={styles.headerItem}>
                        <View style={styles.profileItem}>
                            <Image source={profile} />
                            <View style={styles.headerItemText}>
                                <Text style={styles.nick}>hertonk</Text>
                                <Text style={styles.name}>Herton Vilarim</Text>
                                <View style={styles.starsItem}>
                                    <Star size={18} weight="fill" />
                                    <Star size={18} weight="fill" />
                                    <Star size={18} weight="fill" />
                                    <Star size={18} weight="fill" />
                                    <Star size={18} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View>
                            <View style={styles.subItem1}>
                                <MapTrifold size={20} weight="fill" style={styles.icon} />
                                <Text style={styles.textItem}>Início da Rota:</Text>
                                <Text>Floresta</Text>
                            </View>
                            <View style={styles.subItem1}>
                                <MapPin size={20} weight="fill" style={styles.icon} />
                                <Text style={styles.textItem}>Fim da Rota:</Text>
                                <Text>Petrolina</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.subItem2}>
                                <Text style={styles.textItem2}>Ar condicionado:</Text>
                                <Text>Sim</Text>
                            </View>
                            <View style={styles.subItem2}>
                                <Text style={styles.textItem2}>Reboque:</Text>
                                <Text>Sim</Text>
                            </View>
                            <View style={styles.subItem2}>
                                <Text style={styles.textItem2}>Animais:</Text>
                                <Text>Sim</Text>
                            </View>
                            <View style={styles.subItem2}>
                                <Text style={styles.textItem2}>Encomendas:</Text>
                                <Text>Pequenas, Médias e Grandes</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Agendar Viagem</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.itemResult, styles.shadowProp]}>
                    <View style={styles.headerItem}>
                        <View style={styles.profileItem}>
                            <Image source={profile} />
                            <View style={styles.headerItemText}>
                                <Text style={styles.nick}>hertonk</Text>
                                <Text style={styles.name}>Herton Vilarim</Text>
                                <View style={styles.starsItem}>
                                    <Star size={18} weight="fill" />
                                    <Star size={18} weight="fill" />
                                    <Star size={18} weight="fill" />
                                    <Star size={18} weight="fill" />
                                    <Star size={18} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View>
                            <View style={styles.subItem1}>
                                <MapTrifold size={20} weight="fill" style={styles.icon} />
                                <Text style={styles.textItem}>Início da Rota:</Text>
                                <Text>Floresta</Text>
                            </View>
                            <View style={styles.subItem1}>
                                <MapPin size={20} weight="fill" style={styles.icon} />
                                <Text style={styles.textItem}>Fim da Rota:</Text>
                                <Text>Petrolina</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.subItem2}>
                                <Text style={styles.textItem2}>Ar condicionado:</Text>
                                <Text>Sim</Text>
                            </View>
                            <View style={styles.subItem2}>
                                <Text style={styles.textItem2}>Reboque:</Text>
                                <Text>Sim</Text>
                            </View>
                            <View style={styles.subItem2}>
                                <Text style={styles.textItem2}>Animais:</Text>
                                <Text>Sim</Text>
                            </View>
                            <View style={styles.subItem2}>
                                <Text style={styles.textItem2}>Encomendas:</Text>
                                <Text>Pequenas, Médias e Grandes</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Agendar Viagem</Text>
                        </TouchableOpacity>
                    </View>
                </View>
              </ScrollView>
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
    flex: 9,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  formContainer: {
    width: '100%',
  },
  formIcons: {
    backgroundColor: 'pink'
  },
  itemResult: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  profileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  starsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  subItem1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 5,
    alignItems: 'center'
  },
  subItem2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 5,
    alignItems: 'center'
  },
  textItem: {
    fontWeight:'bold',
    marginRight: 5
  },
  icon: {
    marginHorizontal: 5
  },
  textItem2: {
    fontWeight:'bold',
    marginRight: 5,
    fontStyle: 'italic'
  },
  name: {
    fontSize: 16
  },
  nick: {
    fontSize: 24,
    marginVertical: 5
  },
  headerItemText: {
    marginLeft: 20
  }
});