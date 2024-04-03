"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.register = void 0;

var register = function register(req, res) {
  var _req$body, email, password, name, role, photo, gender;

  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password, name = _req$body.name, role = _req$body.role, photo = _req$body.photo, gender = _req$body.gender;

          try {} catch (err) {}

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.register = register;

var login = function login(req, res) {
  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {} catch (err) {}

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.login = login;