const express = require("express");
const { db } = require("./db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const helmet = require("helmet");
const {Server} = require("socket.io");
const http = require("http");
require("dotenv").config();
require("./auth/passport");

const app = express();

const server = http.createServer(app);
const io = new Server(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173", //react
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    allowedHeaders:
      "X-Requested-With, x-auth-token, X-HTTP-Method-Override, Content-Type, Accept, access-control-allow-credentials",
  })
);

app.use("/", routes);

app.use(express.json());

const port = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`%s listening at ${port}`);
  });
});
