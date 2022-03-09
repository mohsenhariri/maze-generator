PATH := node_modules/.bin:${PATH}
.PHONY: all dev clean dev pyserve manifest
include .env.dev
export

SRC := ./src
DIST := ./dist
PY := python3

ifeq ($(SSL), true)
PROTOCOL := HTTPS
else
PROTOCOL := HTTP
endif
URL := $(PROTOCOL)://$(HOST):$(PORT)

cert:
		openssl req -x509 -new -config ./certs/openssl.conf -out ./certs/cert.pem -keyout ./certs/key.pem

clean:
		rm -rf $(DIST)/*

manifest:
		cp -r $(SRC)/manifest/* $(DIST)

dev:
		webpack serve --config webpack.dev.js

dev-disk:
		export writeToDisk="true" && webpack serve --config webpack.dev.js

build-dev: clean manifest
		webpack --config webpack.dev.js

build-prod: clean manifest
		webpack --config webpack.prod.js
		

pyserve:
		$(PY) -m http.server --directory $(DIST)

nodeserve:
		http-server $(DIST) -p $(PORT)

nodeserve-https:
		http-server $(DIST) -S -C ./certs/cert.pem  -K ./certs/key.pem -p $(PORT)

chrome:
		./chrome-linux/chrome \
		--incognito\
		--user-data-dir=./chrome-data-temp\
		--ignore-urlfetcher-cert-requests\
		--unsafely-treat-insecure-origin-as-secure=$(URL)\
		"$(URL)"

twa:
		bubblewrap init --manifest $(URL)/twa-manifest.json