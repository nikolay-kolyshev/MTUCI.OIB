yarn build
mkdir deploy
rm deploy/index.html
rm deploy/asset-manifest.json
rm -r deploy/static
cp -r build/* deploy/
cd deploy
git add .
git commit -m "build"
git push origin oiblabs
cd ..