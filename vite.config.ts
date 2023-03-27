import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";

const pathResolve = (dir: string): any => {
    return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
    "@": pathResolve("src"),
};

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias,
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/global.scss";`,
            },
        },
    },
    server: {
        open: true,
        host: "0.0.0.0",
    },
});
