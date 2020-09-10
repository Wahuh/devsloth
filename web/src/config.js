export default {
  apiUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://api.localhost'
      : 'https://api.devtruck.com',
}
