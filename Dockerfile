FROM node:lts as dependencies
WORKDIR /frontend-server-gamma
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /frontend-server-gamma
COPY . .
COPY --from=dependencies /frontend-server-gamma/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /frontend-server-gamma
ENV NODE_ENV production

COPY --from=builder /frontend-server-gamma/public ./public
COPY --from=builder /frontend-server-gamma/package.json ./package.json
COPY --from=builder /frontend-server-gamma/.next ./.next
COPY --from=builder /frontend-server-gamma/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]