import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { getUserById, updateUser } from "../services/UserService";
import { useNavigation } from "@react-navigation/native";

const ScreenProfile = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params || {};
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleGetUser = async () => {
    try {
      const response = await getUserById(id);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.error("Get user failed:", error);
    }
  };

  useEffect(() => {
    handleGetUser();
  }, [id]);

  const handleChangePassword = () => {
    if (password) {
      updateUser(id, { password });
      setPassword("");
      console.log("Password changed successfully.");
    } else {
      console.log("Please fill in all fields.");
    }
  };

  const handleLogout = () => {
    Alert.alert("Logged Out", "You have been logged out.");
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Screen_01", {
            id: user.id,
            name: user.name,
          })
        }
      >
        <Icon name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>User Profile</Text>
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfoRow}>
          <Text style={styles.label}>User ID:</Text>
          <Text style={styles.userInfo}>{user.id}</Text> {/* Display User ID */}
        </View>
        <View style={styles.userInfoRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.userInfo}>{user.name}</Text> {/* Display Name */}
        </View>
        <View style={styles.userInfoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.userInfo}>{user.email}</Text>{" "}
          {/* Display Email */}
        </View>
      </View>

      <Text style={styles.label}>Change Password:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="New Password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.changePasswordButton}
        onPress={handleChangePassword}
      >
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  userInfoContainer: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  userInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  label: {
    fontSize: 18,
    color: "#444",
    flex: 1,
  },
  userInfo: {
    fontSize: 16,
    color: "#666",
    flex: 1,
    textAlign: "right",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  changePasswordButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ScreenProfile;
