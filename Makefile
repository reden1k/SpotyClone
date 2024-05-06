install:
	npm install

setup:
	npm ci

config-app:
    npx webpack --config webpack.app.config.cjs

config-auth:
    npx webpack --config webpack.auth.config.cjs