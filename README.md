## BUILD APP FOR PLAYERS API
docker build -t test-es .
## RUN CONTAINER FOR PLAYERS API
docker run -p 3200:9500 -it test-es