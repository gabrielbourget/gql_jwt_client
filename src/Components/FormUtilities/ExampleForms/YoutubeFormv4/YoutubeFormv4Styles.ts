import { StyleSheet } from 'aphrodite';

export const styleGen = () => {
  return StyleSheet.create({
    formCradle: {
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
    },
    formControl: {
      marginBottom: 20,
    },
    error: {
      marginTop: 5,
      color: 'red',
    },
    labelStyle: {
      fontWeight: 'bold',
      display: 'flex',
      marginBottom: 5
    },
    formField: {
      display: 'block',
      width: 400,
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 12,
      paddingRight: 12,
      fontSize: 14,
      lineHeight: 1.42857143,
      color: '#555',
      backgroundColor: '#FFF',
      backgroundImage: 'none',
      border: `1px solid #CCC`,
      borderRadius: 4,
    },
  })
};
