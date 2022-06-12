import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import Toast from 'react-native-toast-message'
import React from 'react'
import { COLORS, FONTS, SHADOW } from './src/styles/theme'
import { toastConfig } from './src/styles'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar />
      <Text style={{ ...FONTS.largeTitle, textAlign: 'center' }}>
        HELLO STARTER TEMPLATE
      </Text>

      <View style={{ height: 300, width: 300, ...SHADOW.strong }}></View>
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  )
}

export default App
