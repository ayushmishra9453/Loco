import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { StatusBar } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          borderWidth: 1,
          borderColor: "#e4e4e4",
          padding: 18,
          elevation: 12,
          shadowColor: "#fff",
          shadowOpacity: 0.8,
          textAlign: "center",
          fontSize: 18,
        }}
      >
        Profile
      </Text>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15%",
        }}
      >
        <Image source={require("../assets/images/user2.png")} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "2%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/images/location.png")} />
          <Text style={{ marginLeft: "1%" }}>New York City</Text>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          margin: 16,
          borderWidth: 1,
          padding: 8,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#e4e4e4",
          elevation: 12,
          shadowColor: "#fff",
          shadowOpacity: 0.8,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderWidth: 1,
            justifyContent: "space-between",
            alignItems: "center",
            padding: 14,
            borderRadius: 20,
            borderColor: "#e4e4e4",
          }}
        >
          <View>
            <Text style={{ textDecorationLine: "underline", fontSize: 16 }}>
              sally@gmail.com
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "600" }}>EMAIL</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>32</Text>
            <Text style={{ fontSize: 10, fontWeight: "600" }}>AGE</Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 8 }}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          General Statistics
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
            padding: 10,
            borderRadius: 20,
            borderColor: "#e4e4e4",
            elevation: 12,
            shadowColor: "#fff",
            shadowOpacity: 0.8,
            marginTop: "5%",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image source={require("../assets/images/check.png")} />
            <Text style={{ marginLeft: "8%" }}>Places Visited</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              paddingHorizontal: 26,
              borderRadius: 20,
              paddingVertical: 2,
            }}
          >
            <Text>5</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
            padding: 10,
            borderRadius: 20,
            borderColor: "#e4e4e4",
            elevation: 12,
            shadowColor: "#fff",
            shadowOpacity: 0.8,
            marginTop: "5%",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image source={require("../assets/images/clock.png")} />
            <Text style={{ marginLeft: "8%" }}>Hours Travelled</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              paddingHorizontal: 26,
              borderRadius: 20,
              paddingVertical: 2,
            }}
          >
            <Text>18</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
            padding: 10,
            borderRadius: 20,
            borderColor: "#e4e4e4",
            elevation: 12,
            shadowColor: "#fff",
            shadowOpacity: 0.8,
            marginTop: "5%",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image source={require("../assets/images/award.png")} />
            <Text style={{ marginLeft: "8%" }}>Surveys Completed</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              paddingHorizontal: 26,
              borderRadius: 20,
              paddingVertical: 2,
            }}
          >
            <Text>9</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          position: "absolute",
          bottom: 0,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingVertical: 16,
          borderColor: "#e4e4e4",
        }}
      >
        <Image source={require("../assets/images/circle.png")} />
        <Image source={require("../assets/images/Icon-Plus.png")} />
        <Image source={require("../assets/images/circle.png")} />
      </View>
      <StatusBar />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
  },
});
