import { ErrorToast, InfoToast, SuccessToast } from 'react-native-toast-message'

export const toastConfig = {
  success: (props) => (
    <SuccessToast
      {...props}
      text2Style={{
        fontSize: 11,
        color: COLORS.dark,
        fontWeight: 'bold',
      }}
    />
  ),
  info: (props) => (
    <InfoToast
      {...props}
      text2Style={{
        fontSize: 11,
        color: COLORS.dark,
        fontWeight: 'bold',
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      text2Style={{
        fontSize: 11,
        color: COLORS.dark,
        fontWeight: 'bold',
      }}
    />
  ),
}
