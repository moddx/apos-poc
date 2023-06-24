#!/bin/sh

npx tailwindcss -i modules/asset/ui/src/index.css  -o modules/asset/ui/src/index.scss && npm run dev
