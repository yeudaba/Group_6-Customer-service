import express from 'express'
const app = express()
const port = 3000

function listener(req,res){
    res.send('Hello World')
}

// Mock data
const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Black Pepper"],
    instructions: "Boil pasta. Cook pancetta. Mix with eggs and cheese. Combine all and serve."
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    ingredients: ["Chicken", "Yogurt", "Tomato", "Garlic", "Garam Masala"],
    instructions: "Marinate chicken. Grill it. Cook sauce. Combine and simmer."
  },
  {
    id: 3,
    name: "Avocado Toast",
    ingredients: ["Bread", "Avocado", "Lemon", "Chili Flakes", "Salt"],
    instructions: "Toast bread. Mash avocado with lemon. Spread and top with chili flakes."
  }
];

app.get('/recipes', (req, res) => {
  res.json(recipes);
});




app.get('/home',listener)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
