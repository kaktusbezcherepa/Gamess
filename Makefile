install:
	npm ci
menu-game:
	node bin/menu-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .