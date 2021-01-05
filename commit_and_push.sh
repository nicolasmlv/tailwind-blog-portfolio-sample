npm run buildcss:prod
git add . -A
git commit -am "$1"
git push
npm run buildcss:dev