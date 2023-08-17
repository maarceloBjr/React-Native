import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type UserSelectRouteProp = NativeStackNavigationProp<
  RootStackParamList,
  "UserSelect"
>;

type UserSelectProps = {
  navigation: UserSelectRouteProp;
};

const UserSelect: React.FC<UserSelectProps> = ({ navigation }) => {
  const listaUsuarios: ICheckboxButton[] = [
    {
      id: 0,
      text: "Marcelo",
      style: {
        marginVertical: 10,
      },
      textStyle: styles.textStyle,
      fillColor: "#F07E31",
      unfillColor: "#F8CCA4",
    },
    {
      id: 1,
      text: "Eduardo",
      style: {
        marginVertical: 10,
      },
      textStyle: styles.textStyle,
      fillColor: "#F07E31",
      unfillColor: "#F8CCA4",
    },
    {
      id: 2,
      text: "Guilherme",
      style: {
        marginVertical: 10,
      },
      textStyle: styles.textStyle,
      fillColor: "#F07E31",
      unfillColor: "#F8CCA4",
    },
    {
      id: 3,
      text: "Bruno",
      style: {
        marginVertical: 10,
      },
      textStyle: styles.textStyle,
      fillColor: "#F07E31",
      unfillColor: "#F8CCA4",
    },
    {
      id: 4,
      text: "Cássio",
      style: {
        marginVertical: 10,
      },
      textStyle: styles.textStyle,
      fillColor: "#F07E31",
      unfillColor: "#F8CCA4",
    },
  ];

  return (
    <View className="flex-1 bg-[#F8CCA4] items-center">
      <Image
        className="flex-1 max-h-16 mt-24"
        source={require("../../assets/Logos/logo2.png")}
        resizeMode="contain"
      />
      <Text className="font-bold justify-center text-[#1D1D1D] text-xl pt-14">
        Selecione o usuário:
      </Text>

      <View className="mt-16">
        <BouncyCheckboxGroup
          data={listaUsuarios}
          style={{ flexDirection: "column" }}
          onChange={(selectedItem: ICheckboxButton) => {
            console.log("SelectedItem: ", JSON.stringify(selectedItem));
          }}
        />
      </View>

      <TouchableOpacity
        className="bg-[#F07E31] rounded-lg w-44 h-14 items-center justify-center self-center mt-16"
        onPress={() => navigation.navigate("UserSelect")}
      >
        <Text className="font-bold text-[#1D1D1D] text-xl">Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    marginVertical: 10,
  },
  textStyle: {
    textDecorationLine: "none",
    fontSize: 18,
    lineHeight: 22.5,
    color: "#1D1D1D",
  },
});

export default UserSelect;
