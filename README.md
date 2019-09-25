## BUILD APP FOR PLAYERS API
docker build -t test-es .
## RUN CONTAINER FOR PLAYERS API
docker run -p 9500:3200 -it test-es
## FETCH API FOR PLAYERS
localhost:9500/players/