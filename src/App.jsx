import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { WeatherList } from "./components/WeatherList/WeatherList";
import { News } from "./components/News/News";
import { SearchPhotos } from "./components/SearchPhotos/SearchPhotos";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
import { weatherApi } from "./weatherApi";
import { useEffect, useState } from "react";
import { newsApi } from "./newsApi";

function App() {
  // weatherApi().then((res) => {
  //   console.log(res);
  // });
  // newsApi().then((res) => {
  //   console.log(res);
  // })

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [locationsList, setLocationsList] = useState([]);

  const handleDeleteLocation = (id) => {
    setLocationsList((prevLocations) =>
      prevLocations.filter((location) => location.id !== id),
    );
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const createName = (name) => {
    setName(name);
  };

  const createLocation = (locat) => {
    setLocation(locat);
  };

  useEffect(() => {
    if (location === "") {
      return;
    } else {
      weatherApi(location).then((res) => {
        setLocationsList((prevLocations) => [...prevLocations, res]);
        console.log(res);
        console.log(locationsList);
      });
    }
  }, [location]);

  return (
    <>
      <Header handleModalToggle={handleModalToggle} name={name} />

      <main>
        <Hero createLocation={createLocation} />
        <WeatherList locationsList={locationsList} name={name} handleDeleteLocation={handleDeleteLocation}/>
        <News />
        <SearchPhotos />
      </main>

      <Footer />

      {/* Modal поки без логіки відкриття/закриття. {isModalOpen && <Modal />} */}
      {isModalOpen && (
        <Modal handleModalToggle={handleModalToggle} createName={createName} />
      )}
    </>
  );
}

export default App;
