import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { loginUser } from "../services/UserService";
import { useNavigation } from "@react-navigation/native";

const Screen_login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email && password) {
      try {
        const response = await loginUser({ email, password });
        console.log(response);
        const { name } = response.data;
        navigation.navigate("Screen_01", { name });
      } catch (error) {
        console.error("Login failed:", error);
        Alert.alert(
          "Error",
          "Failed to log in. Please check your credentials."
        );
      } finally {
        setEmail("");
        setPassword("");
      }
    } else {
      Alert.alert("Error", "Please fill in all fields.");
    }
  };

  const handleBackToRegister = () => {
    navigation.navigate("Screen_00"); // Chuyển đến màn hình đăng ký
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBackToRegister} style={styles.link}>
        <Text style={styles.linkText}>Don't have an account? Register</Text>
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

export default Screen_login;
