import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { WeatherList } from "./components/WeatherList/WeatherList";
import { News } from "./components/News/News";
import { SearchPhotos } from "./components/SearchPhotos/SearchPhotos";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
import { weatherApi } from "./weatherApi";

function App() {
  // weatherApi().then((res) => {
  //   console.log(res);
  // });
  return (
    <>
      <Header />

      <main>
        <Hero />
        <WeatherList />
        <News />
        <SearchPhotos />
      </main>

      <Footer />

      {/* Modal поки без логіки відкриття/закриття.
          Коли будеш підключати функціонал, можна показувати його умовно:
          {isModalOpen && <Modal />} */}
      {/* <Modal /> */}
    </>
  );
}

export default App;
