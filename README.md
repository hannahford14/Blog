------------------------------------------ STARTING THE DATABASE --------------------------------------------------------
preliminary steps:
1) Download Docker via https://docs.docker.com/get-docker/
2) Download Orientdb: https://www.orientdb.org/
3) Once Docker and OrientDB is up and running enter the following commands: docker run -d --name orientdb -p 2424:2424 -p 2480:2480 -e ORIENTDB_ROOT_PASSWORD=root orientdb:latest 

Steps: 
1) Open terminal
2) run `sudo docker start orientdb`
3) once you're done using oreintdb run: `sudo docker stop orientdb`
