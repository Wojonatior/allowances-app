import * as React from 'react';
import { WebView } from 'react-native';

type Props = {
  publicKey: string,
  selectAccount?: string,
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
      selectAccount,
      env,
      product,
      clientName,
      webhook,
      style,
      token
    } = this.props;

    console.log(this.props);

    webhook = "https://requestb.in";

    let uri = `https://cdn.plaid.com/link/v2/stable/link.html?key=${
      publicKey
    }&env=${env}&apiVersion=v2&product=${product}&selectAccount=true&clientName=${
      clientName
    }&isMobile=true&isWebView=true&public_token=""`;

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
    /*
      Response example for success
      {
        "action": "plaid_link-undefined::connected",
        "metadata": {
          "account": {
            "id": null,
            "name": null
          },
          "account_id": null,
          "public_token": "public-sandbox-e697e666-9ac2-4538-b152-7e56a4e59365",
          "institution": {
            "name": "Chase",
            "institution_id": "ins_3"
          }
        }
      }
    */

    this.props.onMessage(JSON.parse(e.nativeEvent.data));
  };
}
