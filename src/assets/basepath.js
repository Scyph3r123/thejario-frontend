const isProduction = import.meta.env.MODE === 'production';

const basePath = isProduction
  ? import.meta.env.VITE_APP_BASE_PATH
  : 'http://localhost:1337';

export default basePath;