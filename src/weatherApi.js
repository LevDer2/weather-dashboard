export const weatherApi = (
  location,
  appid = "145b29c257dcc2ce0c2d4052d14e9bf8",
) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      location,
    )}&appid=${appid}&units=metric`,
  ).then(async (res) => {
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  });
};
