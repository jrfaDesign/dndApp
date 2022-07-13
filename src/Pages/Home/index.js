import React from "react"
import ReactDom from "react-dom"

import styled from "styled-components"



import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


//Add Components here
import Card from "../../Components/cards/index"
import SpellListImg from "../../Assets/imgs/spell-list.jpg"
import SpellBookImg from "../../Assets/imgs/spell-book.jpg"
import CommingSoonImage from "../../Assets/imgs/comming-soon.jpg"
import SpellSlotsImage from "../../Assets/imgs/spell-slots.png"

function HomePage() {

  return (
    <Container>
      

      <CardsContainer>
      <Swiper
        slidesPerView={3}
        spaceBetween={-200}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card 
            imgSrc = {SpellListImg}
            pageTitle = {"Spell List"}
            link= {"/spell-list"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
            imgSrc = {SpellBookImg}
            pageTitle = {"My Spell Book"}
            link={"/my-spell-book"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
            imgSrc = {SpellSlotsImage}
            pageTitle = {"Spell Slots"}
            link={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
            imgSrc = {CommingSoonImage}
            pageTitle = {"Coming Soon..."}
            link={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
            imgSrc = {CommingSoonImage}
            pageTitle = {"Coming Soon..."}
            link={""}
          />
        </SwiperSlide>

      </Swiper>
      
      

        {/* <Card 
          imgSrc = {SpellListImg}
          pageTitle = {"Spell List"}
          link= {"/spell-list"}
        />

        <Card 
          imgSrc = {SpellBookImg}
          pageTitle = {"My Spell Book"}
          link={"/my-spell-book"}
        />

        <Card 
          imgSrc = {SpellSlotsImage}
          pageTitle = {"Spell Slots"}
          link={""}
        />

        <Card 
          imgSrc = {CommingSoonImage}
          pageTitle = {"Coming Soon..."}
          link={""}
        /> */}

        
      </CardsContainer>

    </Container>
  )
}
  
export default HomePage;

const Container = styled.div`

`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  gap: 25px
`

