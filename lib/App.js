"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_apollo_1 = require("react-apollo");
const apollo_client_1 = require("apollo-client");
const apollo_link_http_1 = require("apollo-link-http");
const apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
const UserList_1 = require("./components/UserList");
const client = new apollo_client_1.ApolloClient({
    link: new apollo_link_http_1.HttpLink({ uri: 'http://localhost:4000/graphql' }),
    cache: new apollo_cache_inmemory_1.InMemoryCache()
});
const App = () => (React.createElement(react_apollo_1.ApolloProvider, { client: client },
    React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(UserList_1.default, null))));
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
react_native_1.AppRegistry.registerComponent('Allowances', () => App);
//# sourceMappingURL=app.js.map