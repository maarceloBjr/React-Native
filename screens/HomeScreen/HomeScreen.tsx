import { View, Text, Image, TouchableOpacity, Alert, Button } from "react-native";
import React, { useEffect, useState } from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { StatusBar } from "expo-status-bar";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../App";

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  };
  
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [otpCode, setOTPCode] = useState("");

  return (
    <View className= 'flex-1 bg-[#F8CCA4]'>
      <View className="items-center">
        <Image
          className="max-h-60 mt-24"
          source={require("../../assets/Logos/logo1.png")}
          resizeMode="contain"
        />
        <OTPInputView
          pinCount={4}
          style={{ width: "80%", height: 150 }}
          autoFocusOnLoad={false}
          code={otpCode}
          onCodeChanged={(code) => {
            setOTPCode(code);
          }}
          codeInputFieldStyle={{
            width: 55,
            height: 55,
            borderWidth: 3,
            borderRadius: 10,
            borderColor: "#F07E31",
            color: "#F07E31",
            fontWeight: "bold",
            fontSize: 18,
          }}
          codeInputHighlightStyle={{ borderColor: "#1D1D1D", color: "#1D1D1D" }}
        />
        <TouchableOpacity
          className="bg-[#F07E31] rounded-lg w-44 h-14 items-center justify-center self-center mt-12"
          onPress={() => navigation.navigate('UserSelect')}
        >
          <Text className="font-bold text-[#1D1D1D] text-xl">Entrar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
      <View className="items-center justify-center pb-6 bg-[#F8CCA4]">
        <Text className="text-[#1D1D1D] italic">Isto é um rodapé - 2023 ©</Text>
      </View>
    </View>
  );
}

export default HomeScreen;