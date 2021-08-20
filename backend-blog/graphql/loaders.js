const { RecordID } = require('orientjs');
const { OrientDBConnectionPool } = require("../orientDBConnectionPool");

const pool = new OrientDBConnectionPool();
pool.connect(); // connecting to the database


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

const getBlogsForHome = async (root, {}) => {
  let db = await pool.acquire();

  try {
    let query = `
      SELECT rid, title, image, date, comments FROM (
        MATCH {class: Blog, as: blog}.out("hasComment"){class: Comment, as: comment}
        RETURN
            blog.@rid as rid,
            blog.title as title,
            blog.image as image,
            blog.date as date,
            count(comment.message) as comments GROUP BY rid
      );
    `;

    let result = await db.query(query).all();
    
    return result; 
  } catch (err) {
    logError(err);
    throw userFriendlyUnexpectedError();
  } finally {
    await db.close();
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
module.exports.getBlogsForHome = getBlogsForHome;
module.exports.getCommentsFromBlog = getCommentsFromBlog;
module.exports.getUser = getUser;