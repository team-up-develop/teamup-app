import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import AvatarImage from '../Atoms/AvatarImage';
import theme from '../../constants/Theme';
interface Props {
  
}

const UserProfile = () => {
  const image = { uri: "https://reactjs.org/logo-og.png" };

  return (
    <View style={ styles.card }>
      <ImageBackground source={image} style={styles.image}>
        <AvatarImage />
        <View style={ styles.userInfo }>
          <Text style={ styles.name }>Kazuya Sakamoto</Text>
        </View>
        <Button style={ styles.button } mode="contained" onPress={() => console.log('Pressed')}>
          編集する
        </Button>
      </ImageBackground>
    </View>
  )
}

export default UserProfile;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 120,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 26,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  userInfo: {
    paddingTop: 22,
    paddingLeft: 10,
    paddingRight: 10,
  },
  name: {
    fontSize: 18,
    color: theme.colors.white,
    fontWeight: '600'
  },
  button: {
    height: 34,
    color: theme.colors.blue,
  }
})