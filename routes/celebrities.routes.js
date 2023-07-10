// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

/* GET new Celebrity page */
router.get('/new-celebrity', (req, res, next) => {
  console.log(req)
  res.render('celebrities/new-celebrity', { newCeleb })
})

// Create a new celebrity
router.post('/celebrities/new-celebrity', async (req, res, next) => {
  // Get the data
  console.log(req.body)
  const data = req.body
  try {
    // Create a new document with the data
    const newCelebrity = await Celebrity.create(data)
    console.log(newCelebrity)
    // Redirect to some page
    res.redirect(`/celebrities/new-celebrity${newCelebrity._id}`)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router