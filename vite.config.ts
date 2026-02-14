// https://vite.dev/config/
export default {
  server: {
    watch: { 
      ignored: ['**/public/**'] 
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  preview: {
    historyApiFallback: false
  },
  appType: 'mpa'
}

