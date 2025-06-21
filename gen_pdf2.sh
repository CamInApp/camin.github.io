#!/bin/bash
sudo apt update

sudo apt install -y \
  libatk-bridge2.0-0t64 \
  libatk1.0-0t64 \
  libcups2t64 \
  libdrm2 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  libgbm1 \
  libasound2t64 \
  libpangocairo-1.0-0 \
  libpango-1.0-0 \
  libxss1 \
  libgtk-3-0t64 \
  libnss3 \
  libxshmfence1 \
  libx11-xcb1 \
  libxext6 \
  libxcb1 \
  ca-certificates \
  fonts-noto-cjk \
  fonts-wqy-zenhei \
  fonts-wqy-microhei

npm run pdf:cn
