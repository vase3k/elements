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
                event: 'event.html',
                dom: 'dom.html',
                mobile: 'mobile.html',
                async: 'async.html',
                null: 'null.html',
                classlist: 'classlist.html',
            },
        },
    },
    plugins: [createFoldersPlugin()],
});
