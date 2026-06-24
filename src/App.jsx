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

import { useEffect, useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [locationsList, setLocationsList] = useState([]);

  const [selectedWeather, setSelectedWeather] = useState(null);
  const [selectedForecast, setSelectedForecast] = useState(null);

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
    }
  };

  const handleShowMore = (weather) => {
    setSelectedWeather(weather);

    forecastApi(weather.name).then((res) => {
      setSelectedForecast(res);
      console.log(res);
      
    });
  };

  useEffect(() => {
    if (location === "") {
      return;
    }

    weatherApi(location).then((res) => {
      setLocationsList((prevLocations) => [...prevLocations, res]);
      console.log(res);
    });
  }, [location]);

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

        <News />
        <SearchPhotos />
      </main>

      <Footer />

      {isModalOpen && (
        <Modal handleModalToggle={handleModalToggle} createName={createName} />
      )}
    </>
  );
}

export default App;
