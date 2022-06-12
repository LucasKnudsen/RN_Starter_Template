import { SafeAreaView, StatusBar, Text, TouchableOpacity } from 'react-native'
import Toast from 'react-native-toast-message'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import { FONTS } from './src/styles/theme'
import { toast } from './src/services'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar />
      <Text style={{ ...FONTS.largeTitle, textAlign: 'center' }}>
        HELLO STARTER TEMPLATE
      </Text>

      <Icon name='rocket' size={30} color='#900' />

      <TouchableOpacity onPress={() => toast.success('Welcome to the starter template.')}>
        <Text>Hey</Text>
      </TouchableOpacity>
      <Toast />
    </SafeAreaView>
  )
}

export default App
