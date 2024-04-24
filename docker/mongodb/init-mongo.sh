#!/bin/bash
set -e

MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=$MONGO_ROOT_PASSWORD
MONGO_INITDB_DATABASE=$MONGO_DATABASE
MONGO_USERNAME=$MONGO_USERNAME
MONGO_PASSWORD=$MONGO_PASSWORD

"${mongo[@]}" "$MONGO_INITDB_DATABASE" <<-EOJS
    db.createUser({
        user: $MONGO_USERNAME,
        pwd: $MONGO_PASSWORD,
        roles: [
            { role: 'readWrite', db: $MONGO_INITDB_DATABASE }
        ]
    })
EOJS
