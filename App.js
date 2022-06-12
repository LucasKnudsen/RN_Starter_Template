import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTS } from './src/constants/theme'

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ ...FONTS.largeTitle, textAlign: 'center' }}>
        HELLO STARTER TEMPLATE
      </Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
