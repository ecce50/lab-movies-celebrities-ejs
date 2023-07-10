// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// Create a new celebrity
router.post('/new-celebrity', async (req, res, next) => {
  // Get the data
  console.log(req.body)
  const data = req.body
  try {
    // Create a new document with the data
    const newRecipe = await Recipe.create(data)
    console.log(newRecipe)
    // Redirect to some page
    res.redirect(`/recipes/${newRecipe._id}`)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router