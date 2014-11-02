Package.describe({
  name: 'smartbox-theme',
  summary: 'Smartbox theme for meteor',
  version: '1.0.0',
  git: 'https://github.com/NitroLabs/meteor-smartbox-theme.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  // Css files from theme
  api.addFiles("assets/stylesheets/bootstrap.css","client");
  api.addFiles("assets/stylesheets/responsive.css","client");
  api.addFiles("assets/stylesheets/font-awesome-all.css","client");
  api.addFiles("assets/stylesheets/fancybox.css","client");
  api.addFiles("assets/stylesheets/theme.css","client");
  api.addFiles("assets/stylesheets/fonts.css","client");
  // JS files from theme
  api.use('jquery');
  api.use('iron:router');
  api.addFiles("assets/javascripts/bootstrap.js","client");
  api.addFiles("assets/javascripts/jquery.waitUntilExists.js","client");
  api.addFiles("assets/javascripts/jquery.flexslider-min.js","client");
  api.addFiles("assets/javascripts/jquery.tweet.js","client");
  api.addFiles("assets/javascripts/jquery.fancybox.pack.js","client");
  api.addFiles("assets/javascripts/jquery.fancybox-media.js","client");
  api.addFiles("assets/javascripts/script.js","client");


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
  api.addFiles(assets,"client");
});

