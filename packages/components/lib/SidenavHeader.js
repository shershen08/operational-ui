"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var glamorous_1 = require("glamorous");
var Icon_1 = require("./Icon");
var size = 60;
var Container = glamorous_1.default.div({
    label: "sidenavheader",
    width: "100%"
});
var Content = glamorous_1.default.div(function (_a) {
    var theme = _a.theme, isActive = _a.isActive, isExpanded = _a.isExpanded;
    return ({
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
        height: size,
        flex: "0 0 " + size + "px",
        color: isActive ? theme.colors.linkText : theme.colors.white,
        borderBottom: isExpanded ? "1px solid #515151" : "none",
        backgroundColor: isExpanded ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0)",
        ":hover": {
            backgroundColor: isExpanded ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.1)"
        }
    });
});
var Label = glamorous_1.default.div({
    width: "fit-content",
    whiteSpace: "nowrap"
});
var IconContainer = glamorous_1.default.div({
    width: size,
    height: size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 " + size + "px"
});
exports.default = function (props) { return (
// See ./SidenavItem.tsx for reason why class name is set.
React.createElement(Container, { key: props.id, css: props.css, onClick: props.onClick, className: ["op_sidenavheader", props.className].filter(function (a) { return !!a; }).join(" ") },
    React.createElement(Content, { isActive: !!props.active, isExpanded: !!props.expanded },
        React.createElement(IconContainer, null, props.icon === String(props.icon) ? React.createElement(Icon_1.default, { name: props.icon, size: 24 }) : props.icon),
        React.createElement(Label, null, props.label)),
    props.expanded ? props.children : null)); };
//# sourceMappingURL=SidenavHeader.js.map