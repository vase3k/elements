import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import createFoldersPlugin from './src/js/createFolder';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    //base: '/elements/dist/',
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                event: resolve(__dirname, 'event.html'),
                dom: resolve(__dirname, 'dom.html'),
                mobile: resolve(__dirname, 'mobile.html'),
                async: resolve(__dirname, 'async.html'),
            },
        },
    },
    plugins: [createFoldersPlugin()],
});
