"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Login_1 = require("./Login");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("div", { className: "" },
            React.createElement("nav", null,
                React.createElement("div", { className: "nav-wrapper blue darken-3" },
                    React.createElement("a", { href: "#", className: "brand-logo" }, "Hockey personnal assistant 333"),
                    React.createElement("ul", { id: "nav-mobile", className: "right hide-on-med-and-down" },
                        React.createElement("li", null,
                            React.createElement(Login_1.default, null)))))));
    };
    return Header;
}(React.Component));
exports.default = Header;
//# sourceMappingURL=Header.js.map