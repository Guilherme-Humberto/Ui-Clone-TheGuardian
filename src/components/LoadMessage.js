import React from 'react';
import { View, Text } from 'react-native';


const LoadMessage = () => {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text
      style={{
        fontFamily: "PlayfairDisplay_900Black",
        fontSize: 30,
      }}
    >
      Carregando...
    </Text>
  </View>
  );
}

export default LoadMessage;