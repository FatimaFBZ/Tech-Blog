const { Article } = require('../models');
const articledata = [
  {
    title: 'How to learn Js in 40 days',
    content: 'Informative and educative',
    author_id: 1,
  },
  {
    title: 'Great food for long life',
    content: 'Health',
    author_id: 2,
  },
  {
    title: 'how to save for great vacation',
    content: 'Economic',
    author_id: 3,
  },
 
];
const seedArticle = () => Article.bulkCreate(articledata);
module.exports = seedArticle;