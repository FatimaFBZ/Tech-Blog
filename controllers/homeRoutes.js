const router = require('express').Router();
const {Article, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all Articles for homepage
router.get('/', async (req, res) => {

    try {
      console.log('check homepage')
      const articleData = await Article.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });

      const articles = articleData.map((article) =>
      article.get({ plain: true })
    );

    res.render('homepage', {
        articles,
        logged_in:req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET one  Article
router.get('/articles/:id', async (req, res) => {
    console.log(req.body);
    try {
      const  ArticleData = await Article.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
           
          },
        ],
      });
  
      const  article =  ArticleData.get({ plain: true });
      res.render('articles', {
           article,
           logged_in:req.session.logged_in
         });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  //signup route
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });

   //logout route
   router.get('/dashboard', (req, res) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }
    res.render('dashboard');
    logged_in:req.session.logged_in
  });

  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect.destroy(()=>{
          res.status(204).end();
      });
      return;
    } else{
        res.status(204).end();
    }
   
  });

  module.exports = router;