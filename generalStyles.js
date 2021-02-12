import { StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({
  inputTaskManager: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 50,
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 15,
    width: 250,
  },
  buttonView: {
    borderWidth: 1,
    borderRadius: 60,
    borderColor: '#ccc',
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#ccc',
    // padding: 50,
  },
});
