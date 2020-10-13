rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:Kinsj/kin-ui-vite.git &&
git push -f -u origin master &&
cd -
echo 'https://kinsj.github.io/kin-ui-vite/#/'