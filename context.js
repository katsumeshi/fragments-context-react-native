import React from "react";
import { StyleSheet, Text, View } from "react-native";
const { Provider, Consumer } = React.createContext("blue");

export default class Context extends React.Component {
  render() {
    return (
      <Provider value={"red"}>
        <A />
      </Provider>
    );
  }
}

function A(props) {
  return (
    <View>
      <B />
    </View>
  );
}

function B(props) {
  return (
    <View>
      <C />
    </View>
  );
}

function C(props) {
  return (
    <Consumer>
      {theme => {
        console.log(theme);
        console.log(props);
        return (
          <View
            style={{ width: 100, height: 100, backgroundColor: `${theme}` }}
          />
        );
      }}
    </Consumer>
  );
}
