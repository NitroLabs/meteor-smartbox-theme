Package.describe({
  name: 'smartbox-theme',
  summary: 'Smartbox theme for Meteor',
  version: '1.0.1',
  git: 'https://github.com/NitroLabs/meteor-smartbox-theme.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  // Css files from theme
  api.addAssets("assets/stylesheets/bootstrap.css","client");
  api.addAssets("assets/stylesheets/responsive.css","client");
  api.addAssets("assets/stylesheets/font-awesome-all.css","client");
  api.addAssets("assets/stylesheets/fancybox.css","client");
  api.addAssets("assets/stylesheets/theme.css","client");
  api.addAssets("assets/stylesheets/fonts.css","client");
  // JS files from theme
  api.use('jquery');
  api.use('iron:router');
  api.addAssets("assets/javascripts/bootstrap.js","client");
  api.addAssets("assets/javascripts/jquery.waitUntilExists.js","client");
  api.addAssets("assets/javascripts/jquery.flexslider-min.js","client");
  api.addAssets("assets/javascripts/jquery.tweet.js","client");
  api.addAssets("assets/javascripts/jquery.fancybox.pack.js","client");
  api.addAssets("assets/javascripts/jquery.fancybox-media.js","client");
  api.addAssets("assets/javascripts/script.js","client");


  // Make these assets available to the client
  assets = [
    "assets/images/flex-prev.png",
    "assets/images/flex-next.png",
    "assets/images/bottom-shadow.png",
    "assets/images/top-shadow.png",
    "assets/stylesheets/fonts/fontawesome-webfont.woff",
    "assets/stylesheets/fonts/corp/fontawesome-corp-webfont.woff",
    "assets/stylesheets/fonts/fontawesome-webfont.ttf",
    "assets/stylesheets/fonts/corp/fontawesome-corp-webfont.ttf"
  ]
  api.addAssets(assets,"client");
});

