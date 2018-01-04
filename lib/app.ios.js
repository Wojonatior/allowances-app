"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const App = () => (React.createElement(react_native_1.View, { style: styles.container },
    React.createElement(react_native_1.Text, null, "nice")));
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
react_native_1.AppRegistry.registerComponent('Allowances', () => App);
//# sourceMappingURL=app.ios.js.map