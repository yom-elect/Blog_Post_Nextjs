webpackHotUpdate("static\\development\\pages\\robots\\[id].js",{

/***/ "./util/getUsers.js":
/*!**************************!*\
  !*** ./util/getUsers.js ***!
  \**************************/
/*! exports provided: getAllUsers, getAllUsersIds, getUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsersIds", function() { return getAllUsersIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);


var getAllUsers = function getAllUsers() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getAllUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("https://jsonplaceholder.typicode.com/users"));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", {
            robots: data
          });

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]], Promise);
};
var getAllUsersIds = function getAllUsersIds() {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getAllUsersIds$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(getAllUsers());

        case 2:
          data = _context2.sent;
          return _context2.abrupt("return", data.robots.map(function (info) {
            return {
              params: {
                id: info.id.toString()
              }
            };
          }));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};
var getUserInfo = function getUserInfo(id) {
  var _await$getAllUsers, robots;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getUserInfo$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(getAllUsers());

        case 2:
          _await$getAllUsers = _context3.sent;
          robots = _await$getAllUsers.robots;
          _context3.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(robots);

        case 5:
          if ((_context3.t1 = _context3.t0()).done) {
            _context3.next = 11;
            break;
          }

          ele = _context3.t1.value;

          if (!(robots[ele].id == id)) {
            _context3.next = 9;
            break;
          }

          return _context3.abrupt("return", {
            props: {
              data: robots[ele]
            }
          });

        case 9:
          _context3.next = 5;
          break;

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, null, Promise);
};

/***/ })

})
//# sourceMappingURL=[id].js.e19ff3becc55f06860bf.hot-update.js.map