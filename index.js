import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const assignment = parseFloat(req.body.Assignment);
    const surprise = parseFloat(req.body.Surprise);
    const attendance = parseFloat(req.body.Attendence);
    const quiz = parseFloat(req.body.Quiz);
    const mst1 = parseFloat(req.body.Mst1);
    const mst2 = parseFloat(req.body.Mst2);
    const finals = parseFloat(req.body.Finals);
    const sum = ((assignment) + (surprise/3) + (attendance) + (quiz) + (mst1/2) + (mst2/2) + (finals));
    const formattedSum = sum.toFixed(2);

    res.render("index.ejs" , {totalSum : formattedSum })
    // res.send('The sum is: ' + sum);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


