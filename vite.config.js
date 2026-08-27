import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
// GitHub Pages 프로젝트 사이트 배포 경로에 맞춰 base 를 설정한다.
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
});
