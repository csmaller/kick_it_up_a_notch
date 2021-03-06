const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/coreysmaller/code/kick_it_up_a_notch/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/coreysmaller/code/kick_it_up_a_notch/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/coreysmaller/code/kick_it_up_a_notch/src/pages/blog.js"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/Users/coreysmaller/code/kick_it_up_a_notch/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/coreysmaller/code/kick_it_up_a_notch/src/pages/index.tsx"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/coreysmaller/code/kick_it_up_a_notch/src/templates/blog-post.js")))
}

