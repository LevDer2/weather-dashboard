import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import styles from "./SearchPhotos.module.css";

export const SearchPhotos = () => {
  const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   async function fetchPhotos() {
  //     try {
  //       const response = await fetch("https://your-api.com/photos");
  //       const data = await response.json();

  //       setPhotos(data);
  //     } catch (error) {
  //       console.error("Photos loading error:", error);
  //     }
  //   }

  //   fetchPhotos();
  // }, []);

  const pictures = [
    {
      id: 1,
      url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
      alt: "Летний пейзаж",
    },
  ];

  //   const pictures = [
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 2,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 2,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 2,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 2,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 2,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 2,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 2,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  //   {
  //     id: 1,
  //     url: "https://thumbs.dreamstime.com/b/colorful-massive-crowd-people-sit-event-big-crowd-people-125917596.jpg",
  //     alt: "Летний пейзаж",
  //   },
  //   {
  //     id: 2,
  //     url: "https://www.shutterstock.com/image-photo/dolomites-beautiful-mountain-panoramic-landscape-260nw-1424741618.jpg",
  //     alt: "Горная река",
  //   },
  //   {
  //     id: 3,
  //     url: "https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs=",
  //     alt: "Закат у моря",
  //   },
  // ];

  return (
    <section className={styles.photos}>
      <div className="container">
        <h2 className={styles.title}>
          The beautiful nature of NAME OF LOCATION
        </h2>

        <Swiper
          className={styles.swiper}
          modules={[Navigation, Pagination, Autoplay, Keyboard, Mousewheel]}
          slidesPerView={1}
          spaceBetween={20}
          grabCursor={true}
          navigation={true}
          keyboard={{ enabled: true }}
          mousewheel={{
            enabled: true,
            releaseOnEdges: true,
            sensitivity: 1,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {pictures.map((photo) => (
            <SwiperSlide key={photo.id} className={styles.slide}>
              <img
                className={styles.image}
                src={photo.url}
                alt={photo.alt || "Beautiful nature"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
