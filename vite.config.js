import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: './',
    plugins: [react(), svgr()],
    server: {
        port: 3000
    },

    optimizeDeps: {
        include: ['jsonwebtoken', 'crypto-browserify', 'stream-browserify', 'buffer'],
        exclude: ['brorand', 'elliptic'] // Excluir estos módulos problemáticos
    },

    resolve: {
        alias: {
            // Alias para tus componentes (rutas absolutas)
            '@context': path.resolve(__dirname, 'src/context'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@components-plantillas': path.resolve(__dirname, 'src/components/plantillas'),
            '@components-sidebar': path.resolve(__dirname, 'src/components/sidebar'),
            '@components-editor': path.resolve(__dirname, 'src/components/editor'),
            '@components-headers': path.resolve(__dirname, 'src/components/headers'),

            // Polyfills con rutas absolutas
            'brorand': path.resolve(__dirname, 'node_modules/brorand/browser.js'),
            'crypto': path.resolve(__dirname, 'node_modules/crypto-browserify'),
            'stream': path.resolve(__dirname, 'node_modules/stream-browserify'),
            'util': path.resolve(__dirname, 'node_modules/util'),
            'buffer': path.resolve(__dirname, 'node_modules/buffer'),
            'process': path.resolve(__dirname, 'node_modules/process/browser.js'),
            'path': path.resolve(__dirname, 'node_modules/path-browserify'),
            'vm': path.resolve(__dirname, 'node_modules/vm-browserify'),
            'elliptic': path.resolve(__dirname, 'node_modules/elliptic/elliptic.js')
        },
    },

    define: {
        'process.env': {},
        'global': 'globalThis'
    }
});