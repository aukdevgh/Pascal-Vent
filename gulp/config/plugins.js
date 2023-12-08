import replace from 'gulp-replace'; // Поиск и замена
import gulpPlumber from 'gulp-plumber'; // Обработка ошибок
import notify from 'gulp-notify'; //  Сообщения (подсказки)
import browserSync from 'browser-sync'; // Локальный сервер
import newer from 'gulp-newer'; // Проверка обновления изображении
import ifPlugin from 'gulp-if'; // Условное ветвление

// Экспортируем объуект
export const plugins = {
    replace: replace,
    plumber: gulpPlumber,
    notify: notify,
    browsersync: browserSync,
    newer: newer,
    if: ifPlugin,
};
