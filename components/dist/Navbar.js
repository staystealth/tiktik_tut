"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var tiktik_logo_png_1 = require("../utils/tiktik-logo.png");
var Navbar = function () {
    return (react_1["default"].createElement("div", { className: "w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4" },
        react_1["default"].createElement(link_1["default"], { href: "/" },
            react_1["default"].createElement("div", { className: "w-[100px] md:w-[130px]" },
                react_1["default"].createElement(image_1["default"], { className: "cursor-pointer", src: tiktik_logo_png_1["default"], alt: "tikTik", layout: "responsive" })))));
};
exports["default"] = Navbar;
