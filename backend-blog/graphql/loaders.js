const { RecordID } = require('orientjs');
var OrientDB = require('orientjs');

let server = OrientDB({
              host: 'localhost',
              port: '2424',
              username: 'root',
              password: 'root'
            });

let db = server.use('HannahsBlog');

const createBlog = (root, {}) => {
  try{
    // let query = `SELECT * FROM BLOG WHERE title=:parameter1`;

    // let result = db.query(query, 
    //   {
    //     params: {
    //       parameter1: "BLOG"
    //     }
    //   }
    // );

    // return result;
  } catch (err) {
    console.log("Create Blog: ", err);
  }
}

const createComment = (root, {}) => {
  try{
    // let query = `SELECT * FROM BLOG WHERE title=:parameter1`;

    // let result = db.query(query, 
    //   {
    //     params: {
    //       parameter1: "BLOG"
    //     }
    //   }
    // );

    // return result;
  } catch (err) {
    console.log("Create Blog: ", err);
  }
}

const createUser = (root, {}) => {
  try{
    // let query = `SELECT * FROM BLOG WHERE title=:parameter1`;

    // let result = db.query(query, 
    //   {
    //     params: {
    //       parameter1: "BLOG"
    //     }
    //   }
    // );

    // return result;
  } catch (err) {
    console.log("Create Blog: ", err);
  }
}

const getBlog = (root, {}) => {
  try{
    // let query = `SELECT * FROM BLOG WHERE title=:parameter1`;

    // let result = db.query(query, 
    //   {
    //     params: {
    //       parameter1: "BLOG"
    //     }
    //   }
    // );

    // return result;
  } catch (err) {
    console.log("Create Blog: ", err);
  }
}

const getCommentsFromBlog = (root, {}) => {
  try{
    // let query = `SELECT * FROM BLOG WHERE title=:parameter1`;

    // let result = db.query(query, 
    //   {
    //     params: {
    //       parameter1: "BLOG"
    //     }
    //   }
    // );

    // return result;
  } catch (err) {
    console.log("Create Blog: ", err);
  }
}


const getUser = (root, {}) => {
  try{
    // let query = `SELECT * FROM BLOG WHERE title=:parameter1`;

    // let result = db.query(query, 
    //   {
    //     params: {
    //       parameter1: "BLOG"
    //     }
    //   }
    // );

    // return result;
  } catch (err) {
    console.log("Create Blog: ", err);
  }
}

module.exports.createBlog = createBlog;
module.exports.createComment = createComment;
module.exports.createUser = createUser;
module.exports.getBlog = getBlog;
module.exports.getCommentsFromBlog = getCommentsFromBlog;
module.exports.getUser = getUser;