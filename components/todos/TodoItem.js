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
import { Swipeable } from 'react-native-gesture-handler';
import { generalStyles } from '../../generalStyles';

export const TodoItem = ({ todo, deleteItem }) => {
  // States
  const [done, setDone] = useState(false);
  const [modal, setModal] = useState(false);

  // Done Handler
  const handleDoneTodo = () => {
    setDone(!done);
  };
  // Swipe and delete handler
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

  // Update Modal Handler

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
                // defaultValue={taskValue}
                // onChangeText={(text) => setTaskValue(text)}
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
            { text: 'OK' }
          )
        }
        onLongPress={() => setModal(true)}
      >
        <View style={styles.itemView}>
          <Text
            style={
              done === true
                ? { textDecorationLine: 'line-through' }
                : { textDecorationLine: 'none' }
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
    borderWidth: 1,
    borderBottomColor: '#ccc',
    borderColor: '#fff',
    backgroundColor: '#fff',
    padding: 15,
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
