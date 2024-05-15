import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			// 别名必须以 / 开头、结尾
			// "/@/": root, -- vite 内部在用，这里不能用了
			// "/root/": __dirname, -- vite 内部在用，这里不能用了
			// remove i18n waring
			"vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
			"@": path.resolve(__dirname, "./src"),
			"#": path.resolve(__dirname, "./types"),
		},
		// dedupe: "", // 一般SSR+ESM使用
		// conditions: "",
		// mainFields: "",
		// extensions: "",
		// preserveSymlinks: "",
	},
	server: {
		// host: "localhost",
		port: 3833,
		strictPort: true, // 存在冲突端口，则继续下找可用端口
		// https: "", // boolean | https.ServerOptions
		open: true, // boolean | string
		proxy: {
			// string shorthand
			// "/foo": "http://localhost:4567/foo",
			"/api": {
				target: "http://jsonplaceholder.typicode.com",
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ""),
			},
			// with RegEx
			// "^/fallback/.*": {
			//   target: "http://jsonplaceholder.typicode.com",
			//   changeOrigin: true,
			//   rewrite: (path) => path.replace(/^\/fallback/, "")
			// },
			// 使用 proxy 实例
			// "api": {
			//   target: "http://jsonplaceholder.typicode.com",
			//   changeOrigin: true,
			//   configure: () => {
			//      // proxy http-proxy
			//   },
			// },
			// '/socket.io': {
			// 	target: 'ws://localhost:3000',
			// 	ws: true
			// }
		},
		cors: true, // boolean | CorsOptions
		// headers: false, // OutgoingHttpHeaders 指定服务器响应的 header
		hmr: true, // boolean | { protocol?: string, host?: string, port?: number, path?: string, timeout?: number, overlay?: boolean }
		// watch: "", // object
		// middlewareMode: "",
		// base: "", // string | undefined
		// fs: {
		//  strict: "",
		//  allow: "",
		//  deny: "",
		// },
		// origin: "",
		// sourcemapIgnoreList: "", // false | (sourcePath: string, sourcemapPath: string) => boolean
	},
});
