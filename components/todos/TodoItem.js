import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Text,
  StyleSheet,
  Alert,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
import { generalStyles } from '../../generalStyles';

export const TodoItem = ({ todo, deleteItem }) => {
  const [done, setDone] = useState(false);
  const [modal, setModal] = useState(false);

  const handleDoneTodo = () => {
    setDone(!done);
  };

  const RightAction = () => (
    <TouchableOpacity
      style={styles.rightAction}
      onPress={(id) => deleteItem(todo.id)}
    >
      <Text style={styles.rightTextAction}>
        {' '}
        {''}Delete {''}{' '}
      </Text>
    </TouchableOpacity>
  );
  const getCurrentDate = () => {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();

    console.log(date);
    return `${date}-${month}-${year} , ${hour}:${minute}`;
  };

  return (
    <Swipeable
      renderRightActions={RightAction}
      onSwipeableLeftOpen={() => console.log('Open')}
      backgroundColor='red'
    >
      <Modal
        animationType='fade'
        transparent={false}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal  closed');
          setModal(!modal);
        }}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>Update Todo</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={(generalStyles.inputTaskManager, { bottom: 20 })}
            >
              <TextInput
                placeholder='Update todo'
                style={generalStyles.textInput}
              />
            </KeyboardAvoidingView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModal(!modal)}
            >
              <Text style={styles.buttonText}>Update</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() =>
          Alert.alert(
            'Attention',
            'Please longpress text to update and swipe left to delete',
            [{ text: 'OK' }]
          )
        }
        onLongPress={() => setModal(true)}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
          backgroundColor: '#fff',
          borderRightColor: '#fff',
          borderRightWidth: 1,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <View style={styles.itemView}>
          <Text
            style={
              done === true
                ? {
                    textDecorationLine: 'line-through',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }
                : {
                    textDecorationLine: 'none',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }
            }
          >
            {todo.value}
          </Text>
          <TouchableOpacity
            value={done}
            onPress={handleDoneTodo}
            style={styles.checkbox}
          >
            {done && <Text>&#10004;</Text>}
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#ffd52e' }}>{getCurrentDate()}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  itemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 0,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  rightAction: {
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  rightTextAction: {
    color: '#fff',
  },
  modalView: {
    marginVertical: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 130,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    position: 'absolute',
    top: 50,
    flex: 1,
    width: '100%',
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196f3',
    position: 'absolute',
    bottom: 70,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
