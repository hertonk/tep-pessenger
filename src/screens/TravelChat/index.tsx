import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image, StatusBar } from 'react-native';
import {CaretLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const profile =  require('../../../assets/profile.png');

interface Message {
  id: string;
  text: string;
}

const ChatApp: React.FC = ({ navigation })  => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage: Message = {
        id: new Date().getTime().toString(),
        text: messageInput,
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

 

  return (
    
    <View style={styles.container}>
      <StatusBar backgroundColor="#EFAC03" barStyle={'light-content'} />
      <View style={styles.headerContainer}>
        <View style={styles.header}>
            <View style={styles.header1}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={25} />
                </TouchableOpacity>
            </View>

            <View>
             <Image style={styles.profileImage} source={profile} />
            </View>
          
            <View style={styles.header2}>
                <Text style={styles.title}> Hertonk </Text>
                <Text style={styles.subTitle}> Digitando.... </Text>
            </View>
        </View>
        </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
          
        )} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma mensagem..."
          value={messageInput}
          onChangeText={(text) => setMessageInput(text)}
        />
        <TouchableOpacity style={styles.sendMensage} onPress={sendMessage}>
            <Text style={styles.sendMensageText}> Enviar </Text>
        </TouchableOpacity>
      </View>
    </View>
 
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },

  headerContainer: {
  },

  header: {
    paddingTop: 15,
    backgroundColor: '#EFAC03',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  header2: {
    flex: 5,
    justifyContent: 'flex-end',
    paddingLeft: 30,
  },

  subTitle: {
    color: 'grey',
    paddingLeft: 7,
  },

  profileImage: {
    flexDirection: 'row',
    width: 70,
    height: 70,
  },
  
  title: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
  },

  messageContainer: {
    marginTop: 12,
    marginLeft: 190,
    backgroundColor: '#EFAC03',
    borderColor: '#000',
    borderWidth: 1.5,
    borderRadius: 8,
    width: 200,
  },
  messageText: {
    fontSize: 16,
    color: "#f0f0f0",
    marginLeft: 9,
    marginTop: 5,
    marginBottom: 9,
    marginRight: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 2,
  },
  input: {
    flex: 1,
    padding: 8,
    marginRight: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    
  },

  sendMensage: {
    backgroundColor: '#023047',
    height: '100%',
    width: '23%',
    borderRadius: 12,
    marginRight: 2,
  },

  sendMensageText: {
    padding: 10,
    color: "#f0f0f0",
    justifyContent: 'center',
    textAlign: 'center',
  }
});

export default ChatApp;
