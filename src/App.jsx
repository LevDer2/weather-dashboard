import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { WeatherList } from "./components/WeatherList/WeatherList";
import { WeatherMoreSection } from "./components/WeatherMoreSection/WeatherMoreSection";
import { News } from "./components/News/News";
import { SearchPhotos } from "./components/SearchPhotos/SearchPhotos";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";

import { weatherApi } from "./weatherApi";
import { forecastApi } from "./forecastApi";
import { picturesApi } from "./picturesApi";
import { newsApi } from "./newsApi";

import { useEffect, useState } from "react";

function App() {
  // ! Weather States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [locationsList, setLocationsList] = useState(
    JSON.parse(localStorage.getItem("locationsList")) || [],
  );
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [selectedForecast, setSelectedForecast] = useState(null);

  // ! Images States
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageQuery, setImageQuery] = useState("");
  const [imagePage, setImagePage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [isImagesLoading, setIsImagesLoading] = useState(false);

  // ! News States
  const [newsQuery, setNewsQuery] = useState("");
  const [selectedNews, setSelectedNews] = useState([]);
  const [newsPage, setNewsPage] = useState(1);
  const [totalNews, setTotalNews] = useState(0);
  const [isNewsLoading, setIsNewsLoading] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const createName = (name) => {
    setName(name);
  };

  const createLocation = (locat) => {
    setLocation(locat);
  };

  const handleDeleteLocation = (id) => {
    setLocationsList((prevLocations) =>
      prevLocations.filter((location) => location.id !== id),
    );

    if (selectedWeather?.id === id) {
      setSelectedWeather(null);
      setSelectedForecast(null);

      setImageQuery("");
      setSelectedImages([]);
      setImagePage(1);
      setTotalImages(0);

      setNewsQuery("");
      setSelectedNews([]);
      setNewsPage(1);
      setTotalNews(0);
    }
  };

  const handleShowMore = (weather) => {
    setSelectedWeather(weather);

    forecastApi(weather.name).then((res) => {
      setSelectedForecast(res);
    });

    // ! Images reseting

    setImageQuery(weather.name);
    setSelectedImages([]);
    setImagePage(1);
    setTotalImages(0);

    // ! News reseting

    setNewsQuery(weather.name);
    setSelectedNews([]);
    setNewsPage(1);
    setTotalNews(0);

    loadImages(weather.name, 1);
    loadNews(weather.name, 1);
  };

  const handleLoadMoreImages = () => {
    if (isImagesLoading) {
      return;
    }
    if (selectedImages.length >= totalImages) {
      return;
    }
    const nextPage = imagePage + 1;
    loadImages(imageQuery, nextPage);
  };

  const loadImages = (query, page = 1) => {
    if (isImagesLoading) {
      return;
    }

    setIsImagesLoading(true);

    picturesApi(query, page)
      .then((res) => {
        setSelectedImages((prevImages) => [...prevImages, ...res.hits]);

        setTotalImages(res.totalHits);
        setImagePage(page);
      })
      .catch((error) => {
        console.log("Images loading error:", error);
      })
      .finally(() => {
        setIsImagesLoading(false);
      });
  };

  const handleLoadMoreNews = () => {
    if (isNewsLoading) {
      return;
    }
    if (selectedNews.length >= totalNews) {
      return;
    }

    const nextPage = newsPage + 1;
    loadNews(newsQuery, nextPage);
  };

  const loadNews = (query, page = 1) => {
    if (isNewsLoading) {
      return;
    }
    setIsNewsLoading(true);
    newsApi(query, page)
      .then((res) => {
        setSelectedNews((prevNews) => [...prevNews, ...res.articles]);
        setTotalNews(res.totalResults);
        setNewsPage(page);
        console.log(res);
      })
      .catch((error) => {
        console.log("News loading error:", error);
      })
      .finally(() => {
        setIsNewsLoading(false);
      });
  };

  useEffect(() => {
    if (location === "") {
      return;
    }

    weatherApi(location).then((res) => {
      setLocationsList((prevLocations) => {
        const isAlreadyAdded = prevLocations.some((item) => item.id === res.id);

        if (isAlreadyAdded) {
          return prevLocations;
        }

        return [...prevLocations, res];
      });
    });
  }, [location]);

  useEffect(() => {
    localStorage.setItem("locationsList", JSON.stringify(locationsList));
  }, [locationsList]);

  return (
    <>
      <Header handleModalToggle={handleModalToggle} name={name} />

      <main>
        <Hero createLocation={createLocation} />

        <WeatherList
          locationsList={locationsList}
          name={name}
          handleDeleteLocation={handleDeleteLocation}
          handleShowMore={handleShowMore}
        />

        <WeatherMoreSection
          weather={selectedWeather}
          forecast={selectedForecast}
        />

        {newsQuery && (
          <News
            news={selectedNews}
            locationName={newsQuery}
            onLoadMoreNews={handleLoadMoreNews}
            isNewsLoading={isNewsLoading}
            hasMoreNews={selectedNews.length < totalNews}
          />
        )}

        {imageQuery && (
          <SearchPhotos
            images={selectedImages}
            locationName={imageQuery}
            onLoadMoreImages={handleLoadMoreImages}
            isImagesLoading={isImagesLoading}
            hasMoreImages={selectedImages.length < totalImages}
          />
        )}
      </main>

      <Footer />

      {isModalOpen && (
        <Modal handleModalToggle={handleModalToggle} createName={createName} />
      )}
    </>
  );
}

export default App;
