const OrientDBClient = require("orientjs").OrientDBClient;
const _ = require("lodash");

class OrientDBConnectionPool {
  constructor() {
    console.log("Constructing OrientDBConnectionPool for development");
    this.hostname = "localhost";
    this.port = 2424;
    this.databaseName = "HannahsBlog";
    this.username = "root";
    this.password = "root";
    this.maxPoolConnections = 5;
    this.client = null;
    this.pool = null;

    console.log("Hostname:", this.hostname);
    console.log("Port:", this.port);
    console.log("Database Name:", this.databaseName);
    console.log("Username:", this.username);
    console.log("Max connections:", this.maxPoolConnections);
  }

  // Connects the instance of this class to OrientDB. Separate from the constructor since
  // it uses asynchronous code and therefore needs to be awaited or invoked as a Promise
  async connect() {
    try {
      this.client = await OrientDBClient.connect({
        host: this.hostname,
        port: this.port
      });
    }
    catch (err) {
      console.log("Error occurred connecting to OrientDB and establishing client instance!");
      console.log(err);
      return;
    }

    console.log("OrientDB client connected...");

    try {
      this.pool = await this.client.sessions({
        name: this.databaseName,
        username: this.username,
        password: this.password,
        pool: { max: this.maxPoolConnections }
      });
    }
    catch (err) {
      console.log("Error occurred establishing the connection pool for the OrientDB client!");
      console.log(err);
      return;
    }

    console.log(`OrientDB connection pool ready on ${this.hostname}:${this.port} - ${this.databaseName}`);
  }

  // Acquires a connection from the pool. The caller is responsible for calling close
  // on the returned object!
  async acquire() {
    let dbConnection = await this.pool.acquire();
    return dbConnection;
  }

  // Closes the entire connection pool. You typically don't want to call this unless you
  // are running a quick command line application and calling this at the end (such as with a test suite)
  async closeClient() {
    await this.client.close();
    console.log("OrientDB client closed");
  }
}

module.exports.OrientDBConnectionPool = OrientDBConnectionPool;