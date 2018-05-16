import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { styles } from './styles';

type Props = {
  onSignIn: () => void
}

export default class SignIn extends React.Component<Props, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Allowances</Text>

        <View style={styles.input}>
          <Text style={styles.label}>Email</Text>
          <TextInput placeholder="Email" style={styles.inputField}></TextInput>
        </View>

        <View style={styles.input}>
          <Text style={styles.label}>Password</Text>
          <TextInput placeholder="Password" style={styles.inputField}></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    )
  }

  handleSignIn = () => {
    this.props.onSignIn();
  }
}
