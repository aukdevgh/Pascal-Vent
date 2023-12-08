// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const builFolder = `./dist`; // Также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${builFolder}/js/`,
        css: `${builFolder}/css/`,
        html: `${builFolder}/`,
        images: `${builFolder}/img/`,
        fonts: `${builFolder}/fonts/`,
        data: `${builFolder}/data/`,
    },
    src: {
        js: `${srcFolder}/assets/js/app.js`,
        scss: `${srcFolder}/assets/scss/style.scss`,
        html: `${srcFolder}/*.pug`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,avif,ico,webmanifest,xml}`,
        data: `${srcFolder}/tpl/data/**/*.*`,
    },
    watch: {
        js: `${srcFolder}/assets/js/**/*.js`,
        scss: `${srcFolder}/assets/scss/**/*.scss`,
        html: `${srcFolder}/**/*.pug`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,avif,ico,webmanifest,xml}`,
        data: `${srcFolder}/tpl/data/**/*.*`,
    },
    clean: builFolder,
    builFolder: builFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
};
