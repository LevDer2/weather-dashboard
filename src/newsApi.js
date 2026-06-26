export const newsApi = (
  location,
  page = 1,
  perPage = 12,
  apiKey = "612d607db4f84b48955738deb759c762",
) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      location,
    )}&apiKey=${apiKey}&page=${page}&pageSize=${perPage}`,
  ).then((res) => res.json());
};