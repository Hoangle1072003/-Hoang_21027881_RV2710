import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { createUser } from "../services/UserService";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import TextBox from "react-native-password-eye";

const Screen_00 = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (name && email && password) {
      try {
        const response = await createUser({ email, password, name });
        console.log(response);
        Toast.show({
          text1: "Success",
          text2: "User created successfully.",
        });
        navigation.navigate("Screen_login", { name: name });
      } catch (error) {
        Toast.show({
          text1: "Error",
          text2: "An error occurred. Please try again.",
        });
        console.error("Registration failed:", error);
      } finally {
        setName("");
        setEmail("");
        setPassword("");
      }
    } else {
      Alert.alert("Error", "Please fill in all fields.");
    }
  };

  const handleGoToLogin = () => {
    navigation.navigate("Screen_login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      /> */}
      <TextBox
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        iconFamily="MaterialCommunityIcons"
        iconAlert="alert-octagon-outline"
        eyeColor="#5958b2"
        containerStyles={styles.textBoxContainer}
        inputStyle={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoToLogin} style={styles.link}>
        <Text style={styles.linkText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  textBoxContainer: {
    marginBottom: 15,
  },

  button: {
    height: 50,
    backgroundColor: "#5958b2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    alignItems: "center",
  },
  linkText: {
    color: "#5958b2",
    fontWeight: "bold",
  },
});

export default Screen_00;
