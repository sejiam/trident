// libs
import express from "express"

// configs
const app = express();

// middlewares
app.use(express.urlencoded({extended:true}));

// main
app.listen()


// final
app.listen(3000 , () => {
    console.log("on 3000");
})