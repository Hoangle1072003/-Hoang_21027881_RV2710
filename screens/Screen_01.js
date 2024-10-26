import {FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";

const Screen_01 = () => {
    const categories_data = [
        {id: 1, name: "Resort", image: require("../assets/data/resort.png")},
        {id: 2, name: "Homestate", image: require("../assets/data/homestay.png")},
        {id: 3, name: "Hotel", image: require("../assets/data/hotel.png")},
        {id: 4, name: "Lodge", image: require("../assets/data/lodge.png")},
        {id: 5, name: "Villa", image: require("../assets/data/villa.png")},
        {id: 6, name: "Apartment", image: require("../assets/data/apartment.png")},
        {id: 7, name: "Hostel", image: require("../assets/data/hostel.png")},
        {id: 8, name: "Seeall", image: require("../assets/data/seeall.png")},
    ]
    const popular_destination_data = [
        {id: 1, image: require("../assets/data/photo1.png")},
        {id: 2, image: require("../assets/data/photo2.png")},
        {id: 3, image: require("../assets/data/photo3.png")},
        {id: 4, image: require("../assets/data/photo4.png")},
        {id: 5, image: require("../assets/data/photo5.png")},
    ]

    const categoryAPI = "https://671cad1309103098807ad126.mockapi.io/category";
    const popluraAPI = "https://671cad1309103098807ad126.mockapi.io/popular";
    const [categories, setCategories] = useState([]);
    const [popular_destination, setPopular_destination] = useState([]);

    useEffect(() => {
        axios.get(categoryAPI)
            .then((res) => {
                setCategories(res.data);
                console.log(res.data)
            }).catch((err) => {
            console.log(err)
        })
        axios.get(popluraAPI)
            .then((res) => {
                setPopular_destination(res.data);
                console.log(res.data)
            }).catch((err) => {
            console.log(err)
        })
    }, [])

    const renderItemCategories = ({item}) => {
        return (
            <View style={{flex: 1, alignItems: "center", marginVertical: 10}}>
                <Image source={item.image} style={{width: 50, height: 50}}/>
                <Text style={{marginTop: 5}}>{item.name}</Text>
            </View>
        )
    }
    const renderItemPopular_destination = ({item}) => {
        return (
            <View style={{
                flex: 1,
                alignItems: "center",
                marginVertical: 10,
                marginHorizontal: 10
            }}>
                <Image source={item.image} style={{width: 100, height: 100, borderRadius: 100}}/>
            </View>
        )
    }
    const renderItemPopular_destination_recommend = ({item}) => {
        return (
            <View style={{
                flex: 1,
                alignItems: "center",
                marginVertical: 10,
                marginHorizontal: 10
            }}>
                <Image source={item.image} style={{width: 100, height: 100}}/>
            </View>
        )
    }
    return (
        <>
            {/*    header*/}
            <View style={{
                backgroundColor: "#5958b2",
                with: "100%",
                height: 200,
            }}>
                {/*    top*/}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 20,
                    paddingHorizontal: 20,
                }}>
                    <View>
                        <Image style={{
                            width: 50,
                            height: 50,
                        }} source={require("../assets/data/logoicon.png")}/>
                    </View>
                    <View>
                        <View style={{
                            position: "relative",
                        }}>
                            <TextInput style={{
                                backgroundColor: "#fff",
                                width: 250,
                                height: 40,
                                borderRadius: 20,
                                padding: 10,
                            }} placeholder="Search"/>
                        </View>
                        <View style={{
                            position: "absolute",
                            right: 10,
                            top: 10,
                        }}>
                            <Image style={{
                                width: 20,
                                height: 20,
                            }} source={require('../assets/data/findicon.png')}/>
                        </View>
                    </View>
                </View>
                {/*bottom*/}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 20,
                }}>
                    <View style={{
                        flexDirection: "row",
                        gap: 20,
                    }}>
                        <View>
                            <Image style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                            }} source={require('../assets/data/personicon.png')}/>
                        </View>
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "center",
                        }}>
                            <View>
                                <Text style={{
                                    color: "#fff",
                                    fontWeight: "bold",
                                }}>Welcome!</Text>
                            </View>
                            <View style={{
                                marginVertical: 10,
                            }}>
                                <Text style={{
                                    color: "#fff",
                                }}>Donna Stroupe</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../assets/data/ringicon.png')}/>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.container}>
                {/*    categories*/}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 20,
                }}>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold",
                        }}>Categori</Text>
                    </View>
                    <View>
                        <Image style={{
                            width: 20,
                            height: 20,
                        }} source={require("../assets/data/3gach.png")}/>
                    </View>
                </View>
                {/*    FLatList Categories*/}
                <FlatList data={categories}
                          renderItem={renderItemCategories}
                          keyExtractor={(item) => item.id}
                          numColumns={4}
                />
                {/*    popular destination*/}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 20,
                }}>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold",
                        }}>Popular Destination</Text>
                    </View>
                    <View>
                        <Image style={{
                            width: 20,
                            height: 20,
                        }} source={require("../assets/data/3gach.png")}/>
                    </View>
                </View>
                {/*    Flat list popular destination*/}
                <FlatList data={popular_destination.slice(0, 3)}
                          renderItem={renderItemPopular_destination}
                          keyExtractor={(item) => item.id}
                          numColumns={3}
                />
                {/*    recommended*/}
                <View style={{
                    marginVertical: 20,
                }}>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold",
                        }}>Popular Destination</Text>
                    </View>
                </View>
                {/*    Flat list recommended*/}
                <FlatList data={popular_destination.slice(3, 5)}
                          renderItem={renderItemPopular_destination_recommend}
                          keyExtractor={(item) => item.id}
                          numColumns={2}
                />
            </ScrollView>
            {/*    footer*/}
            <View style={{
                backgroundColor: "#5958b2",
                with: "100%",
                height: 100,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
            }}>
                <View style={styles.footer_class}>
                    <Image style={styles.footer_image} source={require("../assets/data/homeicon.png")}/>
                    <Text>Home</Text>
                </View>
                <View style={styles.footer_class}>
                    <Image style={styles.footer_image} source={require("../assets/data/exploreicon.png")}/>
                    <Text>Explore</Text>
                </View>
                <View style={styles.footer_class}>
                    <Image style={styles.footer_image} source={require("../assets/data/searchicon.png")}/>
                    <Text>Search</Text>
                </View>
                <View style={styles.footer_class}>
                    <Image style={styles.footer_image} source={require("../assets/data/profileicon.png")}/>
                    <Text>Profile</Text>
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
    footer_image: {
        width: 50,
        height: 50,
    },
    footer_class: {
        flexDirection: "column",

        alignItems: "center",
    }
});
export default Screen_01;
