import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  Text,
  Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import uuid from 'uuid';
import { Todos } from './components/todos/Todos';
import { generalStyles } from './generalStyles';

export default function App() {
  const [taskValue, setTaskValue] = useState('');
  const [todo, setTodo] = useState([]);
  const handleAddTodo = () => {
    Keyboard.dismiss();
    if (taskValue === '') {
      Alert.alert('Error', 'Please enter a todo', [{ text: 'OK' }]);
    } else {
      setTodo([
        {
          id: uuid(),
          value: taskValue,
        },
        ...todo,
      ]);
    }
    setTaskValue('');
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.signinContainer}>
          <View>
            <Text style={styles.text}>Today's tasks!</Text>
            <ScrollView style={styles.showTodo}>
              {todo === [] ? (
                <Text style={{ fontSize: 20, color: '#bbb' }}>
                  No todo's yet
                </Text>
              ) : (
                <View style={styles.todoStyles}>
                  <Todos todos={todo} setTodos={setTodo} />
                </View>
              )}
            </ScrollView>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={generalStyles.inputTaskManager}
          >
            <TextInput
              placeholder='Add a todo'
              defaultValue={taskValue}
              onChangeText={(text) => setTaskValue(text)}
              style={generalStyles.textInput}
            />
            <TouchableOpacity onPress={handleAddTodo}>
              <View style={generalStyles.buttonView}>
                <Text style={generalStyles.buttonText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <StatusBar style='dark' />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  signinContainer: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    paddingVertical: 60,
  },
  userContainer: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    // color: '#ffd52e',
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  showTodo: {
    paddingHorizontal: 20,
  },
  todoStyles: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
  },
});
