echo "--get current branch--"
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

echo "--create temp folder--"
mkdir ~/Desktop/temp

echo "--copy public dir contents to temp dir--"
cp -r . ~/Desktop/temp

echo "--switch to master branch--"
git checkout gh-pages

echo "--copy from temp and paste to current dir--"
cp -r ~/Desktop/temp/. .

echo "--remove temp dir from desktop--"
rm -f -R ~/Desktop/temp/

echo "--git add--"
git add -A

echo "--set date to variable--"
currentDate="$(date)"

echo "--add message to git commit--"
git commit -m "${currentDate}"

echo "--git push--"
git push

echo "--switch back to dev branch--"
git checkout $branch
