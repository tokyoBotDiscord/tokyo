import express from "express"
export = {
  run: () => {
    const { green } = require("cli-color")
    const app = express();
    app.get('/', (__, res) => {
      res.sendStatus(200)
    });
    app.listen(process.env.PORT, () => {
      console.log(green.bold("[SERVER]: ") + "WebServer is ready!")
    })
  }
}