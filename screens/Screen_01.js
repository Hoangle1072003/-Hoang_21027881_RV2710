import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import Title from "../components/title";
import { fetchCategories } from "../services/CategoryService";
import { fetchPopular } from "../services/PopularService";
import { useNavigation } from "@react-navigation/native";
const Screen_01 = ({ route }) => {
  const { id, name } = route.params || {};
  // const categories_data = [
  //   { id: 1, name: "Resort", image: require("../assets/data/resort.png") },
  //   { id: 2, name: "Homestate", image: require("../assets/data/homestay.png") },
  //   { id: 3, name: "Hotel", image: require("../assets/data/hotel.png") },
  //   { id: 4, name: "Lodge", image: require("../assets/data/lodge.png") },
  //   { id: 5, name: "Villa", image: require("../assets/data/villa.png") },
  //   {
  //     id: 6,
  //     name: "Apartment",
  //     image: require("../assets/data/apartment.png"),
  //   },
  //   { id: 7, name: "Hostel", image: require("../assets/data/hostel.png") },
  //   { id: 8, name: "Seeall", image: require("../assets/data/seeall.png") },
  // ];
  // const popular_destination_data = [
  //   { id: 1, image: require("../assets/data/photo1.png") },
  //   { id: 2, image: require("../assets/data/photo2.png") },
  //   { id: 3, image: require("../assets/data/photo3.png") },
  //   { id: 4, image: require("../assets/data/photo4.png") },
  //   { id: 5, image: require("../assets/data/photo5.png") },
  // ];

  // const categoriesAPI = "https://671cad1309103098807ad126.mockapi.io/category";
  // const popularAPI = "https://671cad1309103098807ad126.mockapi.io/popular";

  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [popular, setPopular] = useState([]);

  const fetchCategories_backend = async () => {
    try {
      const response = await fetchCategories();
      setCategories(response);
      console.log("categories " + response);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPopular_backend = async () => {
    try {
      const response = await fetchPopular();
      setPopular(response);
      console.log("popular " + response);
    } catch (error) {
      console.error(error);
    }
  };

  // const fetchCategories = async () => {
  //   try {
  //     const response = await axios.get(categoriesAPI);
  //     setCategories(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const fetchPopular = async () => {
  //   try {
  //     const response = await axios.get(popularAPI);
  //     setPopular(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    // fetchCategories();
    fetchCategories_backend();
    fetchPopular_backend();
    // fetchPopular();
  }, []);

  const renderItemCategories = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
        <Text>{item.name}</Text>
      </View>
    );
  };
  const renderItemPopular = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            margin: 5,
            borderRadius: 10,
          }}
          source={item.image}
        />
      </View>
    );
  };

  const renderItemPopular01 = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 150,
            height: 150,
            margin: 5,
            borderRadius: 10,
          }}
          source={item.image}
        />
      </View>
    );
  };

  return (
    <>
      {/* header */}
      <View
        style={{
          backgroundColor: "#5958b2",
          height: 150,
          width: "100%",
        }}
      >
        {/* top header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require("../assets/data/logoicon.png")}
            />
          </View>
          <View>
            <TextInput
              style={{
                backgroundColor: "#fff",
                width: 300,
                height: 40,
                borderRadius: 20,
                paddingLeft: 20,
              }}
              placeholder="Search"
            />
          </View>
          <View></View>
        </View>
        {/* bottom header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* avarta + title */}
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <View>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
                source={require("../assets/data/personicon.png")}
              />
            </View>
            <View>
              <View
                style={{
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Welcom!
                </Text>
              </View>
              <Text
                style={{
                  color: "#fff",
                }}
              >
                {name}
              </Text>
            </View>
          </View>
          {/* ring */}
          <View
            style={{
              marginRight: 20,
            }}
          >
            <Image source={require("../assets/data/ringicon.png")} />
          </View>
        </View>
      </View>
      <ScrollView>
        {/* categories */}
        <View
          style={{
            marginVertical: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Categories
            </Text>
          </View>
          <View>
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={require("../assets/data/3gach.png")}
            />
          </View>
        </View>
        {/* FlatList categories */}
        <FlatList
          data={categories}
          renderItem={renderItemCategories}
          keyExtractor={(item) => item?.id?.toString()}
          numColumns={4}
        />
        {/* popular */}
        <Title
          name="Popular Destination"
          image={require("../assets/data/3gach.png")}
        />
        {/* Flat List popular */}
        <FlatList
          data={popular.slice(0, 3)}
          renderItem={renderItemPopular}
          keyExtractor={(item) => item?.id?.toString()}
          numColumns={3}
        />
        {/* recommend */}
        <View
          style={{
            marginVertical: 15,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Recommend
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginHorizontal: 20,
          }}
        ></View>
        {/* Flat list */}
        <FlatList
          data={popular.slice(3, 5)}
          renderItem={renderItemPopular01}
          keyExtractor={(item) => item?.id?.toString()}
          numColumns={2}
        />
      </ScrollView>
      {/* footer */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#5958b2",
        }}
      >
        <View style={styles.class_footer}>
          <Image
            style={styles.image_footer}
            source={require("../assets/data/homeicon.png")}
          />
          <Text
            style={{
              color: "#fff",
            }}
          >
            Home
          </Text>
        </View>
        <View style={styles.class_footer}>
          <Image
            style={styles.image_footer}
            source={require("../assets/data/exploreicon.png")}
          />
          <Text
            style={{
              color: "#fff",
            }}
          >
            Explore
          </Text>
        </View>
        <View style={styles.class_footer}>
          <Image
            style={styles.image_footer}
            source={require("../assets/data/searchicon.png")}
          />
          <Text
            style={{
              color: "#fff",
            }}
          >
            Search
          </Text>
        </View>
        <View style={styles.class_footer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Screen_profile", {
                id: id,
                name: name,
              })
            }
          >
            <Image
              style={styles.image_footer}
              source={require("../assets/data/profileicon.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "#fff",
            }}
          >
            Profile
          </Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  image_footer: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  class_footer: {
    alignItems: "center",
    color: "#fff",
  },
});
export default Screen_01;
