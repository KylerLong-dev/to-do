# setup
Webpack Starter Setup
This setup includes an HTML loader, CSS loader, and Image Compressor. 

Work within the src file and then deploy via dist directory. 

Images within the src directory will be optimized via plugin, while those within the public 
folder will be left as is. 

Scripts:
-npm run build (npx webpack - will bundle everything into dist)
-npm run dev (npx webpack serve & - live server load)
-npm deploy (git subtree push --prefix dist origin gh-pages) - for live deployment to github pages
