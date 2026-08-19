import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../theme/colors';


export default function MusicPlayer() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contente}>

        <Text styles={styles.eyebrow}>TOCANDO AGORA</Text>
        <Text styles={styles.title}>GMUSIC</Text>
        <Text styles={styles.description}>
            Nosso player começa aqui
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})