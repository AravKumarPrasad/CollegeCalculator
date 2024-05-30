import express from "express";
import bodyParser from "body-parser";
import { dirname, parse } from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get("/" , (req , res) => {
    res.render("frontPage.ejs");
})

app.post("/theory-practical" , (req , res) => {
    res.render("theoryPract.ejs");
})
// app.get("/theory", (req, res) => {
//     res.render("index.ejs");
// });

app.post("/theory" , (req , res) =>{
    res.render("index.ejs");
})

app.post("/practical" , (req , res)=>{
    res.render("practical.ejs");
})

app.post("/TheoryPractSubmit" , (req , res) =>{
    const assignment2 = parseFloat(req.body.Assignment);
    const surprise2 = parseFloat(req.body.Surprise);
    const attendance2 = parseFloat(req.body.Attendence);
    const avg2 = parseFloat(req.body.Avg);
    const quiz2 = parseFloat(req.body.Quiz);
    const practicalMst2 = parseFloat(req.body.PracticalMst);
    const mst12 = parseFloat(req.body.Mst1);
    const mst22 = parseFloat(req.body.Mst2);
    const finalPractical2 = parseFloat(req.body.FinalPractical);
    const finals2 = parseFloat(req.body.Finals);

    const sum2 = ((assignment2*0.6) + (surprise2/3) + (attendance2) + (quiz2) + (mst12/2) + (mst22/2) + (finals2/2) + ((avg2*10)*0.0667 ) + (finalPractical2/2) + (practicalMst2/3.69));
    const formattedans = sum2.toFixed(2);

    res.render("theoryPract.ejs" , {SumAns : formattedans})
});
app.post("/TheorySubmit", (req, res) => {
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

app.post("/practical-submit"  , (req , res) => {
    const Avg3 = parseFloat(req.body.AverageM);
    const Practical3 = parseFloat(req.body.Practicals);
    const Finalest = parseFloat(req.body.FinalEST);

    const ans = ((Practical3) + ((Avg3*10)/6.66) + (Finalest));
    const formattedPracticalans = ans.toFixed(2);

    res.render("practical.ejs" , {practicalSum : formattedPracticalans});
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


