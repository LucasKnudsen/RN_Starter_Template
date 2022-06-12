import Toast from 'react-native-toast-message'
import { COLORS } from '../../../styles'

const toast = {
  success(text1, text2, { ...args }) {
    Toast.show({
      type: 'success',
      text1,
      text2,
      topOffset: 50,

      ...args,
    })
  },

  error(text1, text2, { ...args }) {
    Toast.show({
      type: 'error',
      text1,
      text2,
      topOffset: 50,
      style: {
        fontSize: 15,
        fontWeight: '400',
        color: COLORS.dark,
      },
      ...args,
    })
  },

  info(text1, text2, { ...args }) {
    Toast.show({
      type: 'info',
      text1,
      text2,
      topOffset: 50,

      ...args,
    })
  },
}

export default toast

// Toast.show({
//   type: 'success | error | info',
//   position: 'top | bottom',
//   text1: 'Hello',
//   text2: 'This is some something 👋',
//   visibilityTime: 4000,
//   autoHide: true,
//   topOffset: 30,
//   bottomOffset: 40,
//   onShow: () => {},
//   onHide: () => {}
// })
