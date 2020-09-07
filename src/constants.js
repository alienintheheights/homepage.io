
export const MOBILE_MAX = 700
// filter[orderby]=date&order=desc&
export const WP_PER_PAGE = 6
export const WP_BASE_URL = 'https://www.andrewlienhard.io/press/wp-json/wp/v2'
export const WP_POSTS_URL =  WP_BASE_URL + '/posts?_embed&per_page=' + WP_PER_PAGE + '&page='
export const WP_POST_URL =  WP_BASE_URL + '/posts/'
export const WP_COMMENTS_URL = WP_BASE_URL + '/comments?per_page=100&post='

export const HELLOS = {
    'Chinese'    : '你好',
    'French'     : 'Bonjour',
    'German'     : 'Hallo',
    'Greek'      : 'Χαίρετε',
    'Italian'    : 'Ciao',
    'Japanese'   : 'こんにちは世界',
    'Korean'     : '여보세요 세계',
    'Portuguese' : 'Olá',
    'Russian'    : 'Привет',
    'Spanish'    : 'Hola',
    'Estonian'   : 'Tere',
    'Serbian'    : 'Zdravo',
    'Czech'      : 'Ahoj',
    'Turkish'    : 'Selam',
    'Hebrew'     : 'שׁלום',
    'Zulu'       : 'Sawubona'
}

