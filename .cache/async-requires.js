// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/Users/jess2/Projects/jess2xyz/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/jess2/Projects/jess2xyz/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/jess2/Projects/jess2xyz/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/jess2/Projects/jess2xyz/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("/Users/jess2/Projects/jess2xyz/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/jess2/Projects/jess2xyz/.cache/data.json")

