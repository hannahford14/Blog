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
    let query = `SELECT * FROM BLOG WHERE title=:parameter1`;

    let result = db.query(query, 
      {
        params: {
          parameter1: "BLOG"
        }
      }
    );

    return result;
  } catch (err) {
    console.log("Create Blog: ", err);
  }
}

module.exports.createBlog = createBlog;