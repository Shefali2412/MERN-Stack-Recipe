import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/recipes", recipesRouter)

mongoose.connect("mongodb+srv://shefalijohnson98:uyyT3BLH8KlMjPNT@recipes.g5go5gl.mongodb.net/")
    

app.listen(3001, () => console.log("Server started")); 
