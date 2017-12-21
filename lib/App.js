"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const Hello_1 = require("./components/Hello");
class App extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.Text, { style: styles.welcome }, "Welcome to React Native!"),
            React.createElement(react_native_1.Text, { style: styles.instructions }, "To get started, edit index.ios.js"),
            React.createElement(react_native_1.Text, { style: styles.instructions },
                "Press Cmd+R to reload,",
                '\n',
                "Cmd+D or shake for dev menu"),
            React.createElement(Hello_1.default, { name: "Mr. Zuckerberg" })));
    }
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
react_native_1.AppRegistry.registerComponent('Allowances', () => App);
//# sourceMappingURL=App.js.map