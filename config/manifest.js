'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/zonkyio/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Signal Light",
    short_name: "Signal Light",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: 'icon.png',
        sizes: '180x180',
        type: 'image/png'
      }, {
        src: 'icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
