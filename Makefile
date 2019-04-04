include Makefile.include.mk

help:
	$(call init.help)
	$(call dev.help)
	$(call gen.help)
	$(call commit.help)
	$(call test.help)
	@echo "\n"

init:
	yarn install

install:
	yarn install

# shortcut for launch.local
dev:
	npm run dev

mock:
	npm run mock

build:
	npm build

build.dev:
	npm run build.dev

build.prod:
	npm run build.prod

mock.server:
	find ./ -name ".DS_Store" -delete
	npm run mock:server

launch.help:
	$(call launch.help)
	@echo "\n"
launch:
	$(call launch.help)
	@echo "\n"
launch.local:
	npm run local
launch.dev:
	npm run launch.dev
launch.prod:
	npm run launch.prod

gen.help:
	$(call gen.help)
	@echo "\n"
gen:
	npm run gen

commit.help:
	$(call commit.help)
	@echo "\n"
commit:
	npx git-cz

# release
release.help:
	$(call release.help)
	@echo "\n"
release:
	npm run release
release.master:
	npm run release
	git push --follow-tags origin master
release.dev:
	npm run release
	git push --follow-tags origin dev

deploy:
	$(call deploy.help)
	@echo "\n"
deploy.help:
	$(call deploy.help)
	@echo "\n"
deploy.dev:
	./deploy/dev/packer.sh
	git add .
	git commit -am "build: development"
	git push
	@echo "------------------------------"
	@echo "deploy to docker done!"
	@echo "todo: restart docker container"
deploy.prod:
	./deploy/production/packer.sh
	git add .
	git commit -am "build: production"
	git push
	@echo "------------------------------"
	@echo "deploy to docker done!"
	@echo "todo: restart docker container"


clean.cache:
	rm -rf ./node_modules/.cache
test.help:
	$(call test.help)
	@echo "\n"
test:
	npm run test
test.e2e:
	npm run test:e2e
test.dev:
	npm run test:dev
test.watch:
	npm run test:watch
test.coverage:
	npm run test:cover
test.report.text:
	npm run test:cover

# lint code
lint.help:
	$(call lint.help)
	@echo "\n"
lint:
	npm run lint
lint.watch:
	npm run lint:watch # use dialyzer

