import { SafeAreaView, StatusBar, Text, TouchableOpacity } from 'react-native'
import Toast from 'react-native-toast-message'
import React from 'react'
import { FONTS } from './src/styles/theme'
import { toast } from './src/services'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar />
      <Text style={{ ...FONTS.largeTitle, textAlign: 'center' }}>
        HELLO STARTER TEMPLATE
      </Text>

      <TouchableOpacity onPress={() => toast.success('Welcome to the starter template.')}>
        <Text>Hey</Text>
      </TouchableOpacity>
      <Toast />
    </SafeAreaView>
  )
}

export default App
