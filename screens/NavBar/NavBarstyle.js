import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  link: {
    textDecorationLine: 'none',
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
