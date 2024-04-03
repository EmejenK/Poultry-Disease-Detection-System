"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _auth = _interopRequireDefault(require("./Routes/auth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var PORT = process.env.PORT || 8000;
var corsOptions = {
  origin: "http://localhost:5000",
  credentials: true,
  optionsSuccessStatus: 200
};
app.get("/", function (req, res) {
  res.send("Hello World");
}); //connect to mongodb

_mongoose["default"].set("strictQuery", false);

var connectDB = function connectDB() {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_mongoose["default"].connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 3:
          console.log("MongoDB connected successfully!");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("MongoDB connection failed", _context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}; //middlewares


app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
app.use((0, _cors["default"])(corsOptions));
app.use("/api/v1/auth", _auth["default"]); //domain/api/v1/auth/register

app.listen(PORT, function () {
  connectDB();
  console.log("Server is running on port ".concat(PORT));
});