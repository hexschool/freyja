import * as esbuild from 'esbuild';

esbuild
    .build({
        bundle: true,
        minify: true,
        entryPoints: ['src/app/index.ts'],
        outfile: 'dist/index.js',
        format: 'esm',
        platform: 'node',
        packages: 'external'
    })
    .catch(() => process.exit(1));
