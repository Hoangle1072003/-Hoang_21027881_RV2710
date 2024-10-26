import { Image, Text, View } from "react-native";

const Title = ({ name, image }) => {
  return (
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
          {name}
        </Text>
      </View>
      <View>
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={image}
        />
      </View>
    </View>
  );
};
export default Title;
