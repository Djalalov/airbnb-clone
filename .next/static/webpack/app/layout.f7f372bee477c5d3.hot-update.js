"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"aaf6a5336f2b\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/NjI2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImFhZjZhNTMzNmYyYlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./app/components/navbar/UserMenu.tsx":
/*!********************************************!*\
  !*** ./app/components/navbar/UserMenu.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"(app-client)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Avatar */ \"(app-client)/./app/components/Avatar.tsx\");\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem */ \"(app-client)/./app/components/navbar/MenuItem.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst UserMenu = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setIsOpen((value)=>!value);\n    }, []);\n    const onRent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: onRent,\n                        className: \"hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer\",\n                        children: \"Airbnb your home\"\n                    }, void 0, false, {\n                        fileName: \"/home/el/projects/el-airbnb/app/components/navbar/UserMenu.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: toggleOpen,\n                        className: \"p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineMenu, {}, void 0, false, {\n                                fileName: \"/home/el/projects/el-airbnb/app/components/navbar/UserMenu.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden md:block\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/el/projects/el-airbnb/app/components/navbar/UserMenu.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/el/projects/el-airbnb/app/components/navbar/UserMenu.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/el/projects/el-airbnb/app/components/navbar/UserMenu.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/el/projects/el-airbnb/app/components/navbar/UserMenu.tsx\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onClick: ()=>{},\n                            label: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/home/el/projects/el-airbnb/app/components/navbar/UserMenu.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onClick: ()=>{},\n                            label: \"Sign up\"\n                        }, void 0, false, {\n                            fileName: \"/home/el/projects/el-airbnb/app/components/navbar/UserMenu.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/el/projects/el-airbnb/app/components/navbar/UserMenu.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/el/projects/el-airbnb/app/components/navbar/UserMenu.tsx\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/el/projects/el-airbnb/app/components/navbar/UserMenu.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, undefined);\n};\n_s(UserMenu, \"dcxoIuv6mRLEWkYofcOrcFyJI4k=\");\n_c = UserMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserMenu);\nvar _c;\n$RefreshReg$(_c, \"UserMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL1VzZXJNZW51LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDOEM7QUFDQztBQUNoQjtBQUNHO0FBRWxDLE1BQU1LLFdBQVcsSUFBTTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUs7SUFFMUMsTUFBTU8sYUFBYVIsa0RBQVdBLENBQUMsSUFBTTtRQUNwQ08sVUFBVUUsQ0FBQUEsUUFBUyxDQUFDQTtJQUNyQixHQUFHLEVBQUU7SUFFTCxNQUFNQyxTQUFTVixrREFBV0EsQ0FBQyxJQUFNLENBQUMsR0FBRyxFQUFFO0lBRXZDLHFCQUNDLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDRDt3QkFDQUUsU0FBU0g7d0JBQ1RFLFdBQVU7a0NBQ1Y7Ozs7OztrQ0FHRCw4REFBQ0Q7d0JBQ0FFLFNBQVNMO3dCQUNUSSxXQUFVOzswQ0FFViw4REFBQ1YseURBQWFBOzs7OzswQ0FDZCw4REFBQ1M7Z0NBQUlDLFdBQVU7MENBQ2QsNEVBQUNULCtDQUFNQTtvQ0FBQ1csS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLZlIsd0JBQ0EsOERBQUNLO2dCQUFJQyxXQUFVOzBCQUNkLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2QsOERBQUNSLGlEQUFRQTs0QkFBQ1MsU0FBUyxJQUFNLENBQUM7NEJBQUdFLE9BQU07Ozs7OztzQ0FDbkMsOERBQUNYLGlEQUFRQTs0QkFBQ1MsU0FBUyxJQUFNLENBQUM7NEJBQUdFLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpDO0dBdkNNVjtLQUFBQTtBQXlDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvVXNlck1lbnUudHN4PzAwY2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFpT3V0bGluZU1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4uL0F2YXRhclwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCIuL01lbnVJdGVtXCI7XG5cbmNvbnN0IFVzZXJNZW51ID0gKCkgPT4ge1xuXHRjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGNvbnN0IHRvZ2dsZU9wZW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG5cdFx0c2V0SXNPcGVuKHZhbHVlID0+ICF2YWx1ZSk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBvblJlbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0b25DbGljaz17b25SZW50fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgcHktMyBweC00IHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1uZXV0cmFsLTEwMCB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdEFpcmJuYiB5b3VyIGhvbWVcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVPcGVufVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInAtNCBtZDpweS0xIG1kOnB4LTIgYm9yZGVyLVsxcHhdIGJvcmRlci1uZXV0cmFsLTIwMCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtMyByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2hhZG93LW1kIHRyYW5zaXRpb25cIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEFpT3V0bGluZU1lbnUgLz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlxuXHRcdFx0XHRcdFx0PEF2YXRhciBzcmM9e1wiXCJ9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHtpc09wZW4gJiYgKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJvdW5kZWQteGwgc2hhZG93LW1kIHctWzQwdnddIG1kOnctMy80IGJnLXdoaXRlIG92ZXJmbG93LWhpZGRlbiByaWdodC0wIHRvcC0xMiB0ZXh0LXNtXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGN1cnNvci1wb2ludGVyXCI+XG5cdFx0XHRcdFx0XHQ8TWVudUl0ZW0gb25DbGljaz17KCkgPT4ge319IGxhYmVsPVwiTG9naW5cIiAvPlxuXHRcdFx0XHRcdFx0PE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHt9fSBsYWJlbD1cIlNpZ24gdXBcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyTWVudTtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiQWlPdXRsaW5lTWVudSIsIkF2YXRhciIsIk1lbnVJdGVtIiwiVXNlck1lbnUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVPcGVuIiwidmFsdWUiLCJvblJlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3JjIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/navbar/UserMenu.tsx\n"));

/***/ })

});