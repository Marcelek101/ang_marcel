
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/zdjecia"
  },
  {
    "renderMode": 2,
    "route": "/zdjecia2"
  },
  {
    "renderMode": 2,
    "route": "/ustawienia"
  },
  {
    "renderMode": 2,
    "route": "/wesprzyj"
  }
],
  assets: {
    'index.csr.html': {size: 509, hash: '58017fd311f5ae60f59eacf76233bb15783100b940d0efd77c428653bb5b9b60', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: '7775e5de90816adae3f11e3af1f1df56f15caa73b9184d32a37a254a0a0a40e6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6867, hash: 'c0774de9d9cfd5c12111829976be8ff783658fff3b4717a371ea3bf667ccb842', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6867, hash: 'c0774de9d9cfd5c12111829976be8ff783658fff3b4717a371ea3bf667ccb842', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6867, hash: 'c0774de9d9cfd5c12111829976be8ff783658fff3b4717a371ea3bf667ccb842', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'zdjecia/index.html': {size: 6867, hash: 'c0774de9d9cfd5c12111829976be8ff783658fff3b4717a371ea3bf667ccb842', text: () => import('./assets-chunks/zdjecia_index_html.mjs').then(m => m.default)},
    'zdjecia2/index.html': {size: 6867, hash: 'c0774de9d9cfd5c12111829976be8ff783658fff3b4717a371ea3bf667ccb842', text: () => import('./assets-chunks/zdjecia2_index_html.mjs').then(m => m.default)},
    'ustawienia/index.html': {size: 6867, hash: 'c0774de9d9cfd5c12111829976be8ff783658fff3b4717a371ea3bf667ccb842', text: () => import('./assets-chunks/ustawienia_index_html.mjs').then(m => m.default)},
    'wesprzyj/index.html': {size: 6867, hash: 'c0774de9d9cfd5c12111829976be8ff783658fff3b4717a371ea3bf667ccb842', text: () => import('./assets-chunks/wesprzyj_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
