"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const enzyme_to_json_1 = require("enzyme-to-json");
const app_1 = require("../app");
it('renders correctly', () => {
    const wrapper = enzyme_1.shallow(React.createElement(app_1.default, null));
    expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
});
//# sourceMappingURL=app.js.map