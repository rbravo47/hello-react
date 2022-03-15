import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Video from "./Video";
function App() {
  return (
    // BEM
    <div className="app">
      <Swiper direction={"vertical"} className="app__videos">
        <SwiperSlide>
          <Video />
        </SwiperSlide>
        <SwiperSlide>
          <Video />
        </SwiperSlide>
        <SwiperSlide>
          <Video />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
