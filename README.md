------------------------------------------ STARTING THE DATABASE --------------------------------------------------------
preliminary steps:

1. Download Docker via https://docs.docker.com/get-docker/
2. Download Orientdb: https://www.orientdb.org/
3. Once Docker and OrientDB is up and running enter the following commands: docker run -d --name orientdb -p 2424:2424 -p 2480:2480 -e ORIENTDB_ROOT_PASSWORD=root orientdb:latest

Steps:

1. Open terminal
2. run `sudo docker start orientdb`
3. once you're done using oreintdb run: `sudo docker stop orientdb`

Manually start Orient DB

1. Cd to desktop
2. CD to Blog
3. Cd to Orientdb folder
4. CD to bin
5. enter the following in the command line: ./server.sh
6. http://localhost:2480/studio/index.html#/

Troubleshooting react not updating properly:
  $ sudo rm -fr node_modules/ package-lock.json
  $ sudo npm cache clean --force
  $ sudo npm i react-scripts --unsafe-perm
  $ sudo npm i --unsafe-perm