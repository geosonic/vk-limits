import Icon28UserOutline from '../web_modules/@vkontakte/icons/dist/28/user_outline.js';
import Icon28NameTagOutline from '../web_modules/@vkontakte/icons/dist/28/name_tag_outline.js';
import Icon28PictureStackOutline from '../web_modules/@vkontakte/icons/dist/28/picture_stack_outline.js';
import Icon28Users3Outline from '../web_modules/@vkontakte/icons/dist/28/users_3_outline.js';
import Icon28DocumentOutline from '../web_modules/@vkontakte/icons/dist/28/document_outline.js';
import Icon28UserSquareOutline from '../web_modules/@vkontakte/icons/dist/28/user_square_outline.js';
import Icon28UploadOutline from '../web_modules/@vkontakte/icons/dist/28/upload_outline.js';
import Icon28MarketOutline from '../web_modules/@vkontakte/icons/dist/28/market_outline.js';
import Icon28MarketLikeOutline from '../web_modules/@vkontakte/icons/dist/28/market_like_outline.js';
import Icon24Crop from '../web_modules/@vkontakte/icons/dist/24/crop.js';
import Icon24Fullscreen from '../web_modules/@vkontakte/icons/dist/24/fullscreen.js';
import Icon28MusicOutline from '../web_modules/@vkontakte/icons/dist/28/music_outline.js';
import Icon28VideocamOutline from '../web_modules/@vkontakte/icons/dist/28/videocam_outline.js';
import Icon28MessageOutline from '../web_modules/@vkontakte/icons/dist/28/message_outline.js';
import Icon28UsersOutline from '../web_modules/@vkontakte/icons/dist/28/users_outline.js';
import Icon28RecentOutline from '../web_modules/@vkontakte/icons/dist/28/recent_outline.js';
import Icon28AdvertisingOutline from '../web_modules/@vkontakte/icons/dist/28/advertising_outline.js';
import Icon28WorkOutline from '../web_modules/@vkontakte/icons/dist/28/work_outline.js';
import Icon20EducationOutline from '../web_modules/@vkontakte/icons/dist/20/education_outline.js';
import Icon28KeySquareOutline from '../web_modules/@vkontakte/icons/dist/28/key_square_outline.js';
import Icon28ArticleOutline from '../web_modules/@vkontakte/icons/dist/28/article_outline.js';
import Icon28HorseToyOutline from '../web_modules/@vkontakte/icons/dist/28/horse_toy_outline.js';
import Icon28FavoriteOutline from '../web_modules/@vkontakte/icons/dist/28/favorite_outline.js';
import Icon28LikeOutline from '../web_modules/@vkontakte/icons/dist/28/like_outline.js';
import Icon28AttachOutline from '../web_modules/@vkontakte/icons/dist/28/attach_outline.js';
import Icon28ServicesOutline from '../web_modules/@vkontakte/icons/dist/28/services_outline.js';
import Icon28GridSquareOutline from '../web_modules/@vkontakte/icons/dist/28/grid_square_outline.js';
import Icon28ListOutline from '../web_modules/@vkontakte/icons/dist/28/list_outline.js';
import Icon28DownloadOutline from '../web_modules/@vkontakte/icons/dist/28/download_outline.js';
import Icon28SearchOutline from '../web_modules/@vkontakte/icons/dist/28/search_outline.js';
import Icon28Search from '../web_modules/@vkontakte/icons/dist/28/search.js';

/**
 * Данные лимитов
 *
 * - [Иконки](https://vkcom.github.io/icons/)
 * - [Цвета](https://github.com/VKCOM/VKUI/blob/master/src/styles/bright_light.css)
 */
export const data = [{
  name: 'Пользователь',
  color: 'var(--dynamic_violet)',
  items: [{
    name: 'Username',
    icon: Icon28UserOutline,
    hint: '(адрес страницы)',
    text: 'от 5 до 32 символов',
    link: 'https://vk.com/faq16629'
  }, {
    name: 'Длина имени или фамилии',
    icon: Icon28NameTagOutline,
    text: 'до 32 символов'
  }, {
    name: 'Статус',
    icon: Icon28ArticleOutline,
    text: 'до 140 символов'
  }, {
    name: 'Пароль',
    icon: Icon28KeySquareOutline,
    text: 'от 6 символов'
  }, {
    name: 'Братья, сестры',
    icon: Icon28Users3Outline,
    text: 'до 15 человек'
  }, {
    name: 'Дети и внуки',
    icon: Icon28HorseToyOutline,
    text: 'до 15 детей и до 15 внуков'
  }, {
    name: 'Среднее образования',
    icon: Icon20EducationOutline,
    text: 'до 7 учебных заведений'
  }, {
    name: 'Высшее образования',
    icon: Icon20EducationOutline,
    text: 'до 10 образований'
  }, {
    name: 'Карьера',
    icon: Icon28WorkOutline,
    text: 'до 7 мест работы'
  }, {
    name: 'Военная служба',
    icon: Icon28FavoriteOutline,
    text: 'до 5 воинских частей'
  }, {
    name: 'Мне нравится',
    icon: Icon28LikeOutline,
    text: '500 в сутки'
  }, {
    name: 'Реклама',
    icon: Icon28AdvertisingOutline,
    text: 'появляется через 3 месяца после регистрации'
  }]
}, {
  name: 'Чаты',
  color: 'var(--dynamic_blue)',
  items: [{
    name: 'Число участников',
    hint: '(обычный чат)',
    icon: Icon28UsersOutline,
    text: 'до 500 человек'
  }, {
    name: 'Число участников',
    hint: '(чат сообщества)',
    icon: Icon28Users3Outline,
    text: 'до 3 000 человек'
  }, {
    name: 'Длина сообщения',
    icon: Icon28MessageOutline,
    text: 'примерно до 4096 байт'
  }, {
    name: 'Вложения',
    hint: 'к сообщению',
    icon: Icon28AttachOutline,
    text: 'до 10 вложений'
  }]
}, {
  name: 'Фотографии',
  color: 'var(--dynamic_green)',
  items: [{
    name: 'Допустимые форматы',
    icon: Icon28DocumentOutline,
    text: 'JPG, PNG, GIF',
    link: 'https://vk.com/dev/upload_files'
  }, {
    name: 'Минимальный размер главной фотографии',
    hint: '(пользователя, сообщества или чата)',
    icon: Icon28UserSquareOutline,
    text: '200x200px',
    link: 'https://vk.com/dev/upload_files'
  }, {
    name: 'Минимальный размер фотографии товаров',
    icon: Icon28MarketOutline,
    text: '400x400px',
    link: 'https://vk.com/dev/upload_files_2'
  }, {
    name: 'Минимальный размер фотографии подборки товаров',
    icon: Icon28MarketLikeOutline,
    text: '1280x720px',
    link: 'https://vk.com/dev/upload_files_2'
  }, {
    name: 'Сумма высоты и ширины',
    icon: Icon24Fullscreen,
    text: 'до 14 000 px',
    link: 'https://vk.com/faq8209'
  }, {
    name: 'Размер файла',
    icon: Icon28UploadOutline,
    text: 'не более 50 МБ',
    link: 'https://vk.com/dev/upload_files'
  }, {
    name: 'Соотношение сторон',
    icon: Icon24Crop,
    text: 'не менее 1:20',
    link: 'https://vk.com/dev/upload_files'
  }, {
    name: 'Фотографий в одном альбоме',
    icon: Icon28PictureStackOutline,
    text: 'до 10 000 фотографий',
    link: 'https://vk.com/faq8209'
  }, {
    name: 'Отметки',
    icon: Icon28Users3Outline,
    text: 'до 35 человек',
    link: 'https://vk.com/faq8209'
  }]
}, {
  // Лимитов по максимальному разрешению видео нет
  name: 'Истории',
  color: 'var(--dynamic_red)',
  items: [{
    name: 'Допустимые форматы',
    hint: 'фотографии',
    icon: Icon28DocumentOutline,
    text: 'JPG, PNG, GIF',
    link: 'https://vk.com/dev/upload_files_3'
  }, {
    name: 'Максимальная сумма высоты и ширины',
    icon: Icon24Fullscreen,
    text: '14 000 px',
    link: 'https://vk.com/dev/upload_files_3'
  }, {
    name: 'Размер файла',
    icon: Icon28UploadOutline,
    text: 'не более 10 МБ',
    link: 'https://vk.com/dev/upload_files_3'
  }, {
    name: 'Длительность',
    hint: 'видео',
    icon: Icon28RecentOutline,
    text: 'не более 15 секунд'
  }, {
    name: 'Видеокодек',
    icon: Icon28VideocamOutline,
    text: 'H.264',
    link: 'https://vk.com/dev/upload_files_3'
  }, {
    name: 'Аудиокодек',
    icon: Icon28MusicOutline,
    text: 'AAC',
    link: 'https://vk.com/dev/upload_files_3'
  }]
}, {
  name: 'Документы',
  color: 'var(--dynamic_gray)',
  items: [{
    name: 'Допустимые форматы',
    icon: Icon28DocumentOutline,
    text: 'любые форматы за исключением музыкальных и исполняемых файлов',
    link: 'https://vk.com/dev/upload_files_2?f=10.%20%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2'
  }, {
    name: 'Размер файла',
    icon: Icon28UploadOutline,
    text: 'не более 1024 МБ',
    link: 'https://vk.com/dev/upload_files_2?f=10.%20%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2'
  }]
}, {
  name: 'API',
  color: 'var(--dynamic_orange)',
  items: [{
    name: 'Запросы от пользователя',
    icon: Icon28UserOutline,
    text: '3 в секунду',
    link: 'https://vk.com/dev/api_requests'
  }, {
    name: 'Запросы от сообщества',
    icon: Icon28Users3Outline,
    text: '20 в секунду',
    link: 'https://vk.com/dev/api_requests'
  }, {
    name: 'Запросы от сервиса',
    icon: Icon28ServicesOutline,
    text: '3 в секунду',
    link: 'https://vk.com/dev/api_requests'
  }, {
    name: 'Вызовы методов Execute',
    hint: 'в рамках одного запроса',
    icon: Icon28GridSquareOutline,
    text: 'до 25 обращений к разным методам',
    link: 'https://vk.com/dev/execute'
  }, {
    name: 'Операции Execute',
    hint: 'в рамках одного запроса',
    icon: Icon28ListOutline,
    text: 'до 1000 операций',
    link: 'https://vk.com/dev/execute'
  }, {
    name: 'Размер ответа Execute',
    icon: Icon28DownloadOutline,
    text: 'не более 5 МБ',
    link: 'https://vk.com/dev/execute'
  }, {
    name: 'Лимит на newsfeed.search',
    icon: Icon28SearchOutline,
    text: '1000 вызовов в сутки',
    link: 'https://vk.com/dev/data_limits'
  }, {
    name: 'Лимит на wall.search',
    icon: Icon28Search,
    text: '1000 вызовов в сутки',
    link: 'https://vk.com/dev/data_limits'
  }, {
    name: 'Лимит на wall.get',
    icon: Icon28ArticleOutline,
    text: '5000 вызовов в сутки',
    link: 'https://vk.com/dev/data_limits'
  }]
}];