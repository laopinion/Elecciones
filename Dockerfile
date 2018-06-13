FROM ubuntu
EXPOSE 8080

WORKDIR /app

ADD package.json /app/
# RUN npm install
RUN apt-get update && apt-get install -y nodejs && apt-get install -y npm
# RUN apt-get install libkrb5-dev
RUN npm install --only=prod
# RUN npm rebuild

ADD . /app

CMD ["node", "server"]
