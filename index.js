const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/weather", require("./routes/weather/index"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log(`Server started at ${PORT}`);
});
