#!/usr/bin/env bash
# Abementis Asset Organization & GitHub Sync Script

echo "--- Step 1: Navigating to repository ---"
cd ~/abementis-landing || { echo "Directory not found!"; exit 1; }

echo "--- Step 2: Organizing brand assets ---"
mkdir -p public/brand public/images docs app/about app/contact components

# Move logo.png into public/brand/ if it's sitting in public/ or root
if [ -f "public/logo.png" ]; then
  mv public/logo.png public/brand/logo.png
  echo "Moved public/logo.png to public/brand/logo.png"
elif [ -f "logo.png" ]; then
  mv logo.png public/brand/logo.png
  echo "Moved root logo.png to public/brand/logo.png"
fi

echo "--- Step 3: Ensuring git keeps empty directories ---"
touch public/brand/.gitkeep public/images/.gitkeep docs/.gitkeep

echo "--- Step 4: Staging and committing changes ---"
git add .
git status

echo "--- Step 5: Pulling remote changes (rebase) and pushing ---"
git pull origin main --rebase
git push origin main

echo "--- Success! All assets organized and synced with GitHub. ---"
