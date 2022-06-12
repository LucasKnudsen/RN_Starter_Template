import { SafeAreaView, StatusBar, Text } from 'react-native'
import React from 'react'
import { FONTS } from './src/constants/theme'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <StatusBar />
      <Text style={{ ...FONTS.largeTitle, textAlign: 'center' }}>
        HELLO STARTER TEMPLATE
      </Text>
    </SafeAreaView>
  )
}

export default App
