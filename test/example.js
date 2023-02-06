import lorix from "../lorix.js";

const dataArray = [
    {"colA": 1, "colB": 2},
    {"colA": 2, "colB": 3},
    {"colA": 3, "colB": 4}
];

let df = lorix.DataFrame.fromArray(dataArray);

df.head();
console.log(df);
