export const picturesApi = (
  location,
  page = 1,
  perPage = 12,
  appid = "53447549-63e4f657a81894568835d01b5",
) => {
  return fetch(
    `https://pixabay.com/api/?key=${appid}&q=${location}&image_type=photo&safesearch=true&page=${page}&per_page=${perPage}`,
  ).then((res) => res.json());
};
