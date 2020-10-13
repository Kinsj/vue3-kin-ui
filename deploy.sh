rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:Kinsj/kin-ui-vite.git &&
git remote add gitee https://gitee.com/kinsj/kin-ui-vue3.git &&
git push -f -u origin master &&
git push -f -u gitee master &&
cd -
echo 'https://kinsj.github.io/kin-ui-vite'
echo 'http://kinsj.gitee.io/kin-ui-vue3'