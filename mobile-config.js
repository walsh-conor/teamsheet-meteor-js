App.info({
  id: 'com.wit.conorwalsh',
  name: 'TeamSheet',
  description: 'The match fixtures app',
  author: 'Conor Walsh',
  email: 'cw.conorwalsh@gmail.com',
  website: 'https://teamsheet-meteor.herokuapp.com'
});

// Set up resources such as icons and launch screens.
App.icons({
  'android_ldpi': 'resources/icons/ts-logo-36.png',
  'android_mdpi': 'resources/icons/ts-logo-48.png',
  'android_hdpi': 'resources/icons/ts-logo-72.png',
  'android_xhdpi': 'resources/icons/ts-logo-96.png'
});

App.launchScreens({
  'android_ldpi_portrait': 'resources/splash/Drawing.png',
  'android_ldpi_landscape': 'resources/splash/Drawing.png',
  'android_mdpi_portrait': 'resources/splash/Drawing.png',
  'android_mdpi_landscape': 'resources/splash/Drawing.png',
  'android_hdpi_portrait': 'resources/splash/Drawing.png',
  'android_hdpi_landscape': 'resources/splash/Drawing.png',
  'android_xhdpi_portrait': 'resources/splash/Drawing.png',
  'android_xhdpi_landscape': 'resources/splash/Drawing.png'
});

App.accessRule('*');