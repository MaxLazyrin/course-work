#!/bin/bash

for page in $(ls ./pages); do
    if [ -f "./pages/${page}/src/cypress.json" ] && [ -f "./pages/${page}/src/docker-compose.yaml" ]; then
        echo "$page"
        docker-compose -f "./pages/${page}/src/docker-compose.yaml" up --build --force-recreate --exit-code-from cypress 2>&1 | egrep "All specs passed!| failed "
    fi
done