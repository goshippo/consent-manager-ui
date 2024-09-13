# Define variables for commands
YARN_CLEAN = yarn clean
YARN_BUILD = yarn build
SHELL_SCRIPT = ./update_css.sh

build:
	rm -rf build
	yarn build
	./build.sh

.PHONY: build
