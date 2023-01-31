export const heading = "Convert A Currency";
export const API_DOMAIN = "https://free.currconv.com/api/v7/convert?q=";
export const API_KEY = "cba4ea00b9b369eb755e";
export const endpointPath = (from, to) =>
  `${API_DOMAIN}${from}_${to}&compact=ultra&apiKey=${API_KEY}`;