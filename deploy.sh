# for github page
sed -i 's/\"homepage\"/\"local-homepage\"/g' package.json && \
sed -i 's/\"github-page-homepage\"/\"homepage\"/g' package.json && \

npm run build && \

# for local dev
sed -i 's/\"homepage\"/\"github-page-homepage\"/g' package.json && \
sed -i 's/\"local-homepage\"/\"homepage\"/g' package.json && \
echo
echo "== deploy.sh Done. =="
echo
