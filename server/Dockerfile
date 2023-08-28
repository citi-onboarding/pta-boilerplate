FROM node:18.16

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package.json yarn.loc[k] ./

RUN yarn install 

COPY . .

EXPOSE 3001

CMD [ "yarn", "dev" ]

# para a documentação seguida para construção desse arquivo, vá para o step 3 do link:
# https://www.digitalocean.com/community/tutorials/como-construir-uma-aplicacao-node-js-com-o-docker-pt