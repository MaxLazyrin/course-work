#!/bin/bash

for page in $(ls ./pages); do
    if [ -f "./pages/${page}/src/cypress.json" ] && [ -f "./pages/${page}/src/docker-compose.yaml" ]; then
        echo true
        docker-compose -f "./pages/${page}/src/docker-compose.yaml" up --build --force-recreate --exit-code-from cypress
    fi
done