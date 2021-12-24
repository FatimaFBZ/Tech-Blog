const { Comment } = require('../models');
const commentdata = [
  {
    comment: 'Wonderful and very great explanation',
    commenter_id: 1,
    post_id: 2,
  },
  {
    comment: 'great',
    commenter_id: 2,
    post_id: 1,
  },
  {
    comment: 'nice job',
    commenter_id: 3,
    post_id: 3,
  },
 
 
];
const seedComment = () => Comment.bulkCreate(commentdata);
module.exports = seedComment;