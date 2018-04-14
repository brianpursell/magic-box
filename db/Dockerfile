# FROM ubuntu:16.04

# COPY . /code

# WORKDIR /code

# RUN apt-get update && apt-get install -y \
# 				postgresql \
# 				postgresql-contrib
FROM postgres:10.3-alpine
COPY *.sql /docker-entrypoint-initdb.d/
RUN chmod a+r /docker-entrypoint-initdb.d/*