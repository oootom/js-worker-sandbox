import path from "path";
import { WorkerSandBox } from "../dist/index.js";

async function run() {
  const ws = new WorkerSandBox({
    scriptPath: path.resolve(__dirname, "./worker/react.js"),
  });
  
  const res = await ws.dispatchFetch("http://localhost:8000/");
  
  console.log(await res.text());
  ws.dispose();
}

run();