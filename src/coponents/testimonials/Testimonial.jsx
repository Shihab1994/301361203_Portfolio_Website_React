/**
 * Description
 * @authors Md Mahfuzul Islam
 * @Id 301361203
 * @date    2024-01-28 18:03:34
 * @version 1.0.0
 */

import React from "react";
import "./testimonial.css";
import client from "../../assests/client.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export const Testimonial = () => {
    return (
      <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper
          className="container testimonials__container" // install Swiper modules
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={client} alt="Avatar" />
              <h5>Earnest Achiever</h5>
            </div>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              accusamus fuga officiis voluptate optio iure cupiditate? Eveniet
              voluptatum nihil velit reiciendis, magni veritatis, cum veniam,
              nemo mollitia ab iure nam!
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={client} alt="Avatar" />
              <h5>Earnest Achiever</h5>
            </div>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              voluptatibus perferendis ut rerum qui doloribus, nemo obcaecati at
              aliquid iusto tempora sapiente quibusdam aperiam expedita
              reprehenderit libero veritatis recusandae laborum.
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={client} alt="Avatar" />
              <h5>Earnest Achiever</h5>
            </div>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              modi quis fuga eveniet voluptatum, iusto sunt, enim aliquam omnis
              facere necessitatibus porro nulla a numquam tenetur. Debitis
              similique totam nobis.
            </small>
          </SwiperSlide>
        </Swiper>
      </section>
    );
};
