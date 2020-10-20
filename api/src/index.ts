import App from "./app";
import "./database";
import dotenv from "dotenv";

dotenv.config();

function main() {
  App.listen(App.get("port"));
  console.log("server on port", App.get("port"));
}

main();
