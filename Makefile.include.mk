OS := ${shell uname}

.PHONY: test deploy mock

BELONG = "auth_flow"
REPO = "auth_flow"

ifeq ($(OS),Darwin)  # Mac OS X
		BROWSER_TOOL = open
endif
ifeq ($(OS),Linux)
		BROWSER_TOOL = google-chrome
endif
ifeq ($(OS),Windows)
		BROWSER_TOOL = explorer
endif

define browse
	$(BROWSER_TOOL) "$(1)"
endef

define init.help
	@echo "\n"
	@echo "  [valid init commands]"
	@echo "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
	@echo "  init         : 安装 node_modules 依赖"
	@echo "  ....................................................."
	@echo "  install      : 同 init"
	@echo "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
endef

define dev.help
	@echo "\n"
	@echo "  [valid dev commands]"
	@echo "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
	@echo "  dev         : 以开发模式启动开发"
	@echo "  ....................................................."
	@echo "  mock        : 以 mock 模式启动开发"
	@echo "  ....................................................."
	@echo "  mock.server : 启动 mock server"
	@echo "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
endef

define gen.help
	@echo "\n"
	@echo "  [valid generators]"
	@echo "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
	@echo "  gen : 自动生成 container/component/store 的样板代码"
	@echo "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
endef

define commit.help
	@echo "\n"
	@echo "  [valid commit commands]"
	@echo "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
	@echo "  commit : 以规范方式提交 git commit"
	@echo "         | 文档: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines"
	@echo "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
endef

define test.help
	@echo "\n"
	@echo "  [valid test commands]"
	@echo "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
	@echo "  test             : 使用 jest 进行组件单元测试"
	@echo "  ..............................................................."
	@echo "  test.watch       : 单元测试的 watch 模式"
	@echo "  ..............................................................."
	@echo "  test.e2e         : 使用 cypress 进行 e2e 测试"
	@echo "                   | 文档: https://docs.cypress.io/"
	@echo "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
endef

define lint.help
	@echo "\n"
	@echo "  [valid test commands]"
	@echo "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
	@echo "  lint       : 使用 eslint 扫描代码"
	@echo "  ......................................................."
	@echo "  lint.watch : 使用 eslint 的监听模式"
	@echo "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
endef

