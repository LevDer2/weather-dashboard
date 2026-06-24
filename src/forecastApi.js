export const forecastApi = (
  location,
  appid = "145b29c257dcc2ce0c2d4052d14e9bf8",
) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${appid}&units=metric`,
  ).then((res) => res.json());
};
