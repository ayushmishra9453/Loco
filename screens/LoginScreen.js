import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confimrPassword, setConfirmPassword] = useState(null);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/background.png")}
        style={{ height: "40%" }}
      />
      <ScrollView style={styles.signup}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              padding: 8,
              fontSize: 22,
              fontWeight: "800",
              paddingLeft: "5%",
              marginTop: "6%",
            }}
          >
            Login
          </Text>

          <Image
            source={require("../assets/images/user3.png")}
            style={{ marginTop: "6%", marginRight: "5%" }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "5%",
            marginTop: "2%",
          }}
        >
          <View style={{ marginLeft: "2%" }}></View>
        </View>
        <KeyboardAvoidingView style={{ marginTop: "5%" }}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
            style={styles.textInput}
            // value={values.Name}
            // onChangeText={handleChange("firstName")}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
            style={styles.textInput}
            // value={values.Name}
            // onChangeText={handleChange("firstName")}
          />
        </KeyboardAvoidingView>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "600",
              padding: 20,
              fontSize: 16,
            }}
          >
            Login
          </Text>
        </Pressable>
      </ScrollView>
      <StatusBar />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
  signup: {
    position: "absolute",
    marginTop: "75%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: "50%",
    width: "100%",
  },
  textInput: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 40,
    borderWidth: 1,
    paddingLeft: 10,
    padding: 8,
    borderColor: "#e4e4e4",
    marginTop: 14,
  },
  button: {
    backgroundColor: "#dd8716",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: "10%",
    alignSelf: "center",
  },
});
