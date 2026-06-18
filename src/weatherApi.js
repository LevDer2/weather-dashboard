// TODO: Коли користувач пише в input місто давати це місто на сервер в name

export const weatherApi = (
  name = "Tokio",
  appid = "145b29c257dcc2ce0c2d4052d14e9bf8",
) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${appid}`,
  ).then((res) => res.json());
};