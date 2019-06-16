sed 's/\"homepage\"/"local-homepage"/g' package.json && \
sed 's/\"github-page-homepage\"/"homepage"/g' package.json && \

npm run build && \

sed 's/\"homepage\"/"github-page-homepage"/g' package.json && \
sed 's/\"local-homepage\"/"homepage"/g' package.json && \
echo " == deploy.sh Done. =="
