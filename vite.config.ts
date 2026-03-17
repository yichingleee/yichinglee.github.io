import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const repositorySlug = process.env.GITHUB_REPOSITORY ?? env.GITHUB_REPOSITORY ?? '';
    const explicitBase = env.VITE_BASE_PATH || process.env.VITE_BASE_PATH;
    const base =
      explicitBase ||
      (repositorySlug
        ? repositorySlug === 'yichingleee/yichingleee.github.io'
          ? '/'
          : `/${repositorySlug.split('/')[1]}/`
        : '/');

    return {
      // Build the correct asset base for either a root Pages repo or a project Pages repo.
      base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
