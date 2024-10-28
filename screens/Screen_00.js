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
        Alert.alert("Registration Successful", "You can now log in!");
        navigation.navigate("Screen_login", { name: name });
      } catch (error) {
        console.error("Registration failed:", error);
        Alert.alert("Error", "Failed to create user.");
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
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
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
