import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    color: '#2C2F4A',
    marginBottom: 30,
  },
  insideContainer: {
    margin: 10,
  },
  input: {
    width: '100%',
  },
  btnSignIn: {
    backgroundColor: '#2D82D6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: '100%',
    borderRadius: 8,
    elevation: 2,
    marginTop: 15,
  },
  textSignIn: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  error: {
    color: '#D75D5D',
    fontSize: 12,
    paddingLeft: 10,
  },
});

export default styles;
