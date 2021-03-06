"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const UserList = () => (React.createElement(react_native_1.View, { style: styles.root }));
exports.default = UserList;
const styles = react_native_1.StyleSheet.create({
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
//# sourceMappingURL=Hello.js.map