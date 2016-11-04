#!/bin/bash

set -o errexit #abort if any command fails

REPO=https://yarostbaklajana:$GH_TOKEN@github.com/yarostbaklajana/TodoList.git

./copy-files.sh

# config
git config --global user.email "yarostbaklajana@gmail.com"
git config --global user.name "Travis CI"

# deploy
cd public
git init
git add --all
git commit -m "Deployed to Github Pages"
git push --force --quiet $REPO master:gh-pages 
echo "Successfully pushed changes to GitHub Pages"
