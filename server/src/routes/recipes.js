import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try{
        const response = await RecipeModel.find({});
        res.json(response);
    } catch(err) {
        res.json(err);
    }
})

router.post("/", async (req, res) => {
    const recipe = new RecipeModel(req.body)
    try{
        await recipe.save();
        res.json(recipe);
    } catch(err) {
        res.json(err);
    }
})

// Save a Recipe
router.put("/", async (req, res) => {
    const recipe = await RecipesModel.findById(req.body.recipeID);
    const user = await UserModel.findById(req.body.userID);
    try {
      user.savedRecipes.push(recipe);
      await user.save();
      res.status(201).json({ savedRecipes: user.savedRecipes });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Get id of saved recipes
router.get("/savedRecipes/ids/:userId", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.userId);
      res.status(201).json({ savedRecipes: user?.savedRecipes });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // Get saved recipes
router.get("/savedRecipes/:userId", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.userId);
      const savedRecipes = await RecipesModel.find({
        _id: { $in: user.savedRecipes },
      });
  
      console.log(savedRecipes);
      res.status(201).json({ savedRecipes });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

export {router as recipesRouter}
