const express = require('express');

const app = express();
const ExpressError = require('./expressError');

const {parseNumbers, calcMeans, calcMedian, calcMode} = require('./helpers')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', (req, res, next) => {
    try{
        let numsQuery = req.query.nums;

        if(!numsQuery){
        throw new ExpressError("Numbers must be entered and separated with commas.", 400);
        }

        let nums = parseNumbers(numsQuery);
        let mean = calcMeans(nums)

        return res.json({ operation: 'mean', value: mean});
    }
    catch(error){
        next(error);
    }
});

app.get('/median', (req, res, next) => {
    try{
        let numsQuery = req.query.nums;

        if(!numsQuery){
            throw new ExpressError("Numbers must be entered and separated with commas.", 400);
        }

        let nums = parseNumbers(numsQuery);
        let median = calcMedian(nums);

        return res.json({operation: 'median', value: median});
    }
    catch(error){
        next(error);
    }
});

app.get('/mode', (req, res, next) => {

    try{
        let numsQuery = req.query.nums;

        if(!numsQuery){
            throw new ExpressError("Numbers must be entered and separated with commas.", 400);
        }

        let nums = parseNumbers(numsQuery);
        let mode = calcMode(nums);

        return res.json({operation: 'mode', value: mode});
    }
        catch(error){
        next(error);
    }
});

app.get('/all', (req, res, next) => {

    try{
        let numsQuery = req.query.nums;

        if(!numsQuery){
            throw new ExpressError("Numbers must be entered and separated with commas.", 400);
        }

        let nums = parseNumbers(numsQuery);
        let mean = calcMeans(nums);
        let median = calcMedian(nums);
        let mode = calcMode(nums);

        return res.json({operation: 'all', mean, median, mode});
    }
        catch(error){
        next(error);
    }
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});


app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
  });