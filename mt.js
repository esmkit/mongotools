import { MTCommand } from "./dist/index.js"; // as library client you may use : import { MongoTools, MTOptions, MTCommand } from "node-mongotools";

// take first command line argument
const action = process.argv.slice(2)[0];
new MTCommand().doAction(action);
