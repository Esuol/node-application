const ENV = process.env.REACT_APP_ENV

const config =  {
  production: {
    base_url: 'production:api'
 },
 development: {
    base_url: 'http://localhost:3006/api/',
 },
}

module.exports = config[ENV]