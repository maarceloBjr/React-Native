import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => console.log(otpCode);
  const [otpCode, setOTPCode] = useState("");

  return (
    <NavigationContainer>
      <View className="flex-auto items-center bg-[#F8CCA4]">
        {/* <Text className="mt-64 text-xl">LOGO</Text> */}
        <Image
          className="flex-1 max-h-60 mt-24"
          source={require("./assets/Logos/logo1.png")}
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
          className="bg-[#F07E31] hover:bg-cyan-600 rounded-lg w-44 h-14 items-center justify-center self-center mt-12"
          onPress={onPress}
        >
          <Text className="font-bold text-[#1D1D1D] text-xl">Entrar</Text>
        </TouchableOpacity>
        {/* <Text className="align-end">Teste rodapé</Text> */}
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
