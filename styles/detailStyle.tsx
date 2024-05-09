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
  status: {
    flexDirection: 'row',
    margin: 5,
  },
  status_icon: {},
  iconBorder: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#5d5d5d',
    padding: 5,
    marginRight: 5,
  },
  activeStatus: {
    borderColor: '#66ff00',
  },
});

export default styles;
