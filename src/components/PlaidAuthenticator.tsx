import * as React from 'react';
import { WebView } from 'react-native';

type Props = {
  publicKey: string,
  onMessage: ({}) => void,
  env: string,
  product: string,
  clientName?: string,
  webhook?: string,
  plaidRef?: () => void,
  style?: {},
  token?: string
}

export default class PlaidAuthenticator extends React.Component<Props, {}> {
  render() {
    let {
      publicKey,
      env,
      product,
      clientName,
      webhook,
      style,
      token
    } = this.props;

    webhook = "https://requestb.in";

    let uri = `https://cdn.plaid.com/link/v2/stable/link.html?key=${
      publicKey
    }&env=${env}&apiVersion=v2&product=${product}&selectAccount=true&clientName=${
      clientName
    }&isMobile=true&isWebView=true`;

    uri = token !== undefined ? `${uri}&token=${token}` : uri;
    uri = webhook !== undefined ? `${uri}&webhook=${webhook}` : uri;

    return (
      <WebView
        style={this.props.style}
        ref={this.props.plaidRef}
        source={{ uri }}
        onMessage={this.onMessage}
      />
    );
  }

  onMessage = (e: any) => {
    this.props.onMessage(JSON.parse(e.nativeEvent.data));
  };
}
