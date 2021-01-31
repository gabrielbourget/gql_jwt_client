import { StyleSheet } from 'aphrodite';

export const styleGen = () => {
  return StyleSheet.create({
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
  });
}