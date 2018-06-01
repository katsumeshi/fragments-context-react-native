import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Fragments extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Text>test1 </Text>
        <Text>test2 </Text>
        <Text>test3 </Text>
        <Text>test4 </Text>
      </React.Fragment>
    );
  }
}
