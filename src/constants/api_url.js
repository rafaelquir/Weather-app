const location = "Caracas,ve"
const api_key = "d198f898c981f09a7ca7069af0ab024a"
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`