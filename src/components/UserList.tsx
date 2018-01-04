import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { graphql, ApolloProvider, } from 'react-apollo';
import gql from 'graphql-tag';

export const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row",
    minHeight: 70,
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: "#999",
    fontWeight: "bold"
  }
});

interface User {
  id: number;
  email: string;
  confirmedAt: string;
}

interface Response {
  users: User[];
}

const UserList = () => (
  <View style={ styles.root }>

  </View>
);

export default UserList;
