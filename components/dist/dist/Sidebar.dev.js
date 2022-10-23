"use strict";

exports.__esModule = true;

var react_1 = require("react");

var link_1 = require("next/link");

var ai_1 = require("react-icons/ai");

var im_1 = require("react-icons/im");

var Sidebar = function Sidebar() {
  var _a = react_1.useState(true),
      showSidebar = _a[0],
      setShowSidebar = _a[1];

  var normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997]';
  return react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
    className: "block xl:hidden m-2 ml-4 mt-3 text-xl",
    onClick: function onClick() {
      return setShowSidebar(function (prev) {
        return !prev;
      });
    }
  }, showSidebar ? react_1["default"].createElement(im_1.ImCancelCircle, null) : react_1["default"].createElement(ai_1.AiOutlineMenu, null)), showSidebar && react_1["default"].createElement("div", {
    className: "xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3"
  }, react_1["default"].createElement("div", {
    className: "xl:border-b-2 border-gray-200 xl:pb-4"
  }, react_1["default"].createElement(link_1["default"], {
    href: "/"
  }, react_1["default"].createElement("div", {
    className: normalLink
  }, react_1["default"].createElement("p", {
    className: "text-2xl"
  }, react_1["default"].createElement(ai_1.AiFillHome, null)), react_1["default"].createElement("span", {
    className: "text-xl hidden xl:block"
  }, "For you"))))));
};

exports["default"] = Sidebar;