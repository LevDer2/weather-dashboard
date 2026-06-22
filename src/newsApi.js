// TODO: Коли місто користувача прийшло на сервер то знайти спосіб як забрати мову та вставити її в language

export const newsApi = (
  apiKey = "612d607db4f84b48955738deb759c762",
  language = "ua"
) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=weather&language=${language}&apiKey=${apiKey}`,
  ).then((res) => res.json());
};


