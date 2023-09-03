const { getDbStoreData } = require("./store");
const fs = require("fs")

async function start() {
  const args = process.argv;

  const scriptArguments = args.slice(2);

  if (scriptArguments.length >= 2) {
    const limit = parseInt(scriptArguments[0]);
    const offset = parseInt(scriptArguments[1]);

    const result = await getDbStoreData(offset, limit);

    console.log(
      `We got ${limit} number of rows between ${offset} and ${
        result.length < offset + limit ? result.length : offset + limit
      }`
    );
    
  } else {
    console.error("Insufficient arguments. Provide at least 2 arguments.");
  }
}

start();
