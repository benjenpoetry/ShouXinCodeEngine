import { defineConfig } from 'vitepress';
import { navbar, sidebar } from './configs';


export default defineConfig({
    base: '/ShouXinCodeEngine/',
    title: 'VitePress',
    description: 'Vite Description',
    themeConfig: {
        nav: navbar,
        sidebar
    }
});