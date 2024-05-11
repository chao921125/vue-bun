# API
```shell
# Mac Linux Windows 安装 bun
curl -fsSL https://bun.sh/install | bash

powershell -c "irm bun.sh/install.ps1 | iex"

# bun 升级 或者继续执行安装
bun upgrade
# 创建项目
bun create vite bun-vue
bun init
# 依赖包操作
bun add vue
bun add -D @types/vue
bun remove ts-node
bun install
bun run dev --watch
# 基于 package.json 更新到最新的依赖版本
bun update
# 将 package.json 内部依赖版本更新到最新
bunx taze -w
```
