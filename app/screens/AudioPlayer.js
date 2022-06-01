import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function AudioPlayer() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({uri: 'https://dns4.vippendu.com/download/128k-dmmuv/Scapegoat.mp3'});
    setSound(sound);
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}
