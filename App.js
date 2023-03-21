import React, { useState } from "react";
// hooks are used as to apply the states in the function components
// useState is used to use the states in the function component
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

// using state we can add dynamic content as the output
export default function App() {
  // const [, setName] = useState("shreyas");
  // const [person, setAge] = useState("40");
  // const handler = () => {
  //   setName("maste");
  //   setPerson({ name: "kulkarni", age: 56 });
  // };

  // video 6

  const [people, setPeople] = useState([
    { name: "shreyas", id: "1" },
    { name: "nikhil", id: "2" },
    { name: "abhishek", id: "3" },
    { name: "maste", id: "4" },
    { name: "kulkarni", id: "5" },
    { name: "hey", id: "6" },
    { name: "kodape", id: "7" },
    // id can also be used
    // but the app will throw an error as it expects a key
    // but will still work
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };
  return (
    <View style={styles.container}>
      {/* view is similar to the div component in HTML , where we use to wrap the components */}
      {/* <Text>hello {name}</Text> */}

      {/* <View style={styles.buttonContainer}>
        <Button title="update name" onPress={handler} />
      </View> */}

      {/* video 5 => adding a button and taking the input from the user
      And dynamically update the texts by taking reference from the user*/}
      {/* <Text>Enter the name please:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. Devon Larratt"
        onChangeText={(val) => setName(val)}
        // changes real time texts when the user starts typing
      />

      <Text>hello {name}</Text>
      <TextInput
        // multiline
        keyboardType="number-pad "
        style={styles.input}
        placeholder="e.g. Devon Larratt"
        onChangeText={(val) => setAge(val)}
        // changes real time texts when the user starts typing
      />
      <Text>hello {person}</Text> */}

      {/* video 6 key value pair and how to store the data*/}
      {/* <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}

      {/* video 7- displaying using flat list components */}

      <FlatList
        // the difference between the flatlist and the scrollview
        // flatlist will only load if you scroll
        // whereas the scrollview will load everything
        // and then will give option of scroll
        numColumns={2}
        keyExtractor={
          (item) => item.id
          // item.id is used to avoid the error
          // in this we just have to return
          // what property on the objexts is going to be used for the key
        }
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          // prior we returned a view with the key
          // flatlist always looks for the key hence the view are not needed
        )}
      />

      {/* video 8=> touchable components  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 20,
    backgroundColor: "lavender",
    padding: 20,
    fontSize: 25,
  },
  header: {
    backgroundColor: "orange",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 5,
    margin: 10,
    width: 200,
    fontSize: 18,
  },
});
