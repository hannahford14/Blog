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

const getBlog = async (root, {}) => {
  let db = await pool.acquire();
  try {
    let result = await db.query(`SELECT * FROM Blog`).one();
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
module.exports.getBlog = getBlog;
module.exports.getCommentsFromBlog = getCommentsFromBlog;
module.exports.getUser = getUser;