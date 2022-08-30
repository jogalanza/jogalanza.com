module.exports = {
  publicPath: process.env.CORDOVA_PLATFORM === 'electron' || 
    process.env.CORDOVA_PLATFORM === 'android' ||
    process.env.CAPACITOR_PLATFORM === 'yes' ? '' :  
    process.env.NODE_ENV === 'production' ? process.env.APP_ENV ? `/${process.env.APP_ENV}/` : '/' : '/',
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
