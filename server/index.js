import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server running fine 🚀");
});

app.listen(5000, () => console.log("Backend running on port 5000"));

