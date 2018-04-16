import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, WebView } from 'react-native';
import PlaidAuthenticator from './components/PlaidAuthenticator';

type State = {
  data: {
    metadata: {
      institution: {
        name: string,
        institution_id: string
      },
      public_token: string
    }
  },
  status: string
}

export default class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: {
        metadata: {
          institution: {
            name: "",
            institution_id: ""
          },
          public_token: ""
        }
      },
      status: 'LOGIN_BUTTON'
    };
  }

  render() {
    console.log(this.state.status)

    switch(this.state.status) {
      case 'CONNECTED':
        return this.renderDetails()
      case 'LOGIN_BUTTON':
      case 'EXIT':
        return this.renderButton();
      default:
        return this.renderLogin();
    }
  }

  renderButton = () => {
    return <View style={styles.container}>
      <TouchableOpacity onPress={() => this.setState({status: ''})}>
        <Text style={styles.paragraph}>Login with Plaid</Text>
      </TouchableOpacity>
    </View>
  }

  onLoadStart = (props: any) => {
    console.log('onLoadStart', props);
  };

  onLoad = (props: any) => {
    console.log('onLoad', props);
  };

  onLoadEnd = (props: any) => {
    console.log('onLoadEnd', props);
  };

  renderLogin() {
    return (
      <PlaidAuthenticator
        publicKey="f5ff4c97e6a7c21d60e49643d9e11e"
        onMessage={this.onMessage.bind(this)}
        env="sandbox"
        product="auth,transactions"
        clientName="Allowances"
      />
    );
  }

  renderDetails() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Institution</Text>
        <Text style={styles.value}>
          {this.state.data.metadata.institution.name}
        </Text>
        <Text style={styles.paragraph}>Institution ID</Text>
        <Text style={styles.value}>
          {this.state.data.metadata.institution.institution_id}
        </Text>
        <Text style={styles.paragraph}>Token</Text>
        <Text style={styles.value}>
          {this.state.data.metadata.public_token}
        </Text>
      </View>
    );
  }

  onMessage(data: any) {
    console.log(data);
    this.setState({ data, status: data.action.substr(data.action.lastIndexOf(':') + 1).toUpperCase() });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  },
  value: {
    marginBottom: 20,
    textAlign: 'center'
  }
});
