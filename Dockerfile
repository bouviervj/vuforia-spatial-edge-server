FROM ubuntu:18.04

RUN apt-get update; apt-get install -y curl git

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

RUN git clone https://github.com/bouviervj/vuforia-spatial-edge-server.git; mv vuforia-spatial-edge-server /app

WORKDIR /app

RUN npm install

RUN ls -la; \
    git submodule update --init --recursive; \
    cd addons/vuforia-spatial-core-addon; \
    npm install; \
    mkdir -p /tmp/Documents

RUN chmod 744 start.sh

# Start the server
EXPOSE 8080
CMD ["/bin/sh", "/app/start.sh"]


