import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 40,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
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

export default Styles;
