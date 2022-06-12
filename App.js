import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SHADOW } from './src/constants/theme'

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <StatusBar />
      <Text style={{ ...FONTS.largeTitle, textAlign: 'center' }}>
        HELLO STARTER TEMPLATE
      </Text>

      <View style={{ height: 300, width: 300, ...SHADOW.strong }}></View>
    </SafeAreaView>
  )
}

export default App
