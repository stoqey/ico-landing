# base image
FROM node:10.23.0-stretch as builder

WORKDIR /app

COPY packages/landing /app

RUN yarn && yarn export

# Use lighter image
FROM mhart/alpine-node:slim-10.19
COPY --from=builder /app .
ENV NODE_ENV=production
EXPOSE 80
CMD ["node","node_modules/.bin/serve", "-d", "out", "-p", "80"]
