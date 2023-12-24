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

const SignupScreen = ({ navigation }) => {
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
        <Text
          style={{
            padding: 8,
            fontSize: 22,
            fontWeight: "800",
            paddingLeft: "5%",
            marginTop: "6%",
          }}
        >
          Signup
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "5%",
            marginTop: "2%",
          }}
        >
          <View>
            <Image source={require("../assets/images/user1.png")} />
          </View>
          <View style={{ marginLeft: "2%" }}>
            <Text
              style={{
                padding: 2,
              }}
            >
              Profile Picture
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  padding: 8,
                  backgroundColor: "#e4e4e4",
                  borderRadius: 5,
                  paddingHorizontal: 24,
                }}
              >
                <Text>Take Picture</Text>
              </View>
              <View
                style={{
                  padding: 8,
                  backgroundColor: "#e4e4e4",
                  borderRadius: 5,
                  marginLeft: "5%",
                  paddingHorizontal: 24,
                }}
              >
                <Text>Upload</Text>
              </View>
            </View>
          </View>
        </View>
        <KeyboardAvoidingView style={{ marginTop: "5%" }}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
            style={styles.textInput}
            // value={values.Name}
            // onChangeText={handleChange("firstName")}
          />
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
          <TextInput
            placeholder="Age"
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
            Create Account
          </Text>
        </Pressable>
      </ScrollView>
      <StatusBar />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
  signup: {
    position: "absolute",
    marginTop: "60%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: "70%",
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
