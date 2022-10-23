"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var react_google_login_1 = require("react-google-login");
var ai_1 = require("react-icons/ai");
var im_1 = require("react-icons/im");
var Sidebar = function () {
    var _a = react_1.useState(true), showSidebar = _a[0], setShowSidebar = _a[1];
    var userProfile = false;
    var normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "block xl:hidden m-2 ml-4 mt-3 text-xl", onClick: function () { return setShowSidebar(function (prev) { return !prev; }); } }, showSidebar ? react_1["default"].createElement(im_1.ImCancelCircle, null) :
            react_1["default"].createElement(ai_1.AiOutlineMenu, null)),
        showSidebar && (react_1["default"].createElement("div", { className: "xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3" },
            react_1["default"].createElement("div", { className: "xl:border-b-2 border-gray-200 xl:pb-4" },
                react_1["default"].createElement(link_1["default"], { href: "/" },
                    react_1["default"].createElement("div", { className: normalLink },
                        react_1["default"].createElement("p", { className: "text-2xl" },
                            react_1["default"].createElement(ai_1.AiFillHome, null)),
                        react_1["default"].createElement("span", { className: "text-xl hidden xl:block" }, "For you")))),
            !userProfile && (react_1["default"].createElement("div", { className: "px-2 py-4 hidden xl:block" },
                react_1["default"].createElement("p", { className: "text-gray-400" }, "Log in to like and comment on videos"),
                react_1["default"].createElement("div", { className: "pr-4" },
                    react_1["default"].createElement(react_google_login_1["default"], { clientId: '', render: function (renderProps) { return (react_1["default"].createElement("button", { className: "cursor-pointer bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#F51997]", onClick: renderProps.onClick, disabled: renderProps.disabled }, "Log in")); }, onSuccess: function () { }, onFailure: function () { }, cookiePolicy: 'single_host_origin' })))),
            react_1["default"].createElement(Discover, null),
            react_1["default"].createElement(SuggestedAccounts, null),
            react_1["default"].createElement(Footer, null)))));
};
exports["default"] = Sidebar;
