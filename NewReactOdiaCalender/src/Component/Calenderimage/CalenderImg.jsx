import React, { useState } from 'react'
import CalenderCard from './CalenderCard'
import author1 from "../../assets/photos/january.jpeg"
import author2 from "../../assets/photos/jan-rasi.jpeg"
import author3 from "../../assets/photos/february.jpeg"
import author4 from "../../assets/photos/feb-rasi.jpeg"
import author5 from "../../assets/photos/march.jpeg"
import author6 from "../../assets/photos/mar-rasi.jpeg"
import author7 from "../../assets/photos/april.jpeg"
import author8 from "../../assets/photos/apr-rasi.jpeg"
import author9 from "../../assets/photos/may.jpeg"
import author10 from "../../assets/photos/may-rasi.jpeg"
import author11 from "../../assets/photos/june.jpeg"
import author12 from "../../assets/photos/june-rasi.jpeg"
import author13 from "../../assets/photos/july.jpeg"
import author14 from "../../assets/photos/july-rasi.jpeg"
import author15 from "../../assets/photos/august.jpeg"
import author16 from "../../assets/photos/aug-rasi.jpeg"
import author17 from "../../assets/photos/september.jpeg"
import author18 from "../../assets/photos/sept-rasi.jpeg"
import author19 from "../../assets/photos/october.jpeg"
import author20 from "../../assets/photos/oct-rasi.jpeg"
import author21 from "../../assets/photos/november.jpeg"
import author22 from "../../assets/photos/nov-rasi.jpeg"
import author23 from "../../assets/photos/december.jpeg"
import author24 from "../../assets/photos/dec-rasi.jpeg"



function CalenderImg() {

  let frontCards=[
    {
      monthName:"ଜାନୁଆରୀ",
      cardImg:author1,
      rasiphala:"ରାଶିଫଳ",
      time:"10.10",
      cardImg2:author2, 
    },
    {
      monthName:"ଫେବୃଆରୀ",
      cardImg:author3,
      rasiphala:"ରାଶିଫଳ",
      time:"12.10",
      cardImg2:author4,
    },
    {
      monthName:"ମାର୍ଚ୍ଚ",
      cardImg:author5,
      rasiphala:"ରାଶିଫଳ",
      time:"16.10",
      cardImg2:author6,
    },
    {
      monthName:"ଅପ୍ରେଲ",
      cardImg:author7,
      rasiphala:"ରାଶିଫଳ",
      time:"20.10",
      cardImg2:author8,
    },
    {
      monthName:"ମଇ",
      cardImg:author9,
      rasiphala:"ରାଶିଫଳ",
      time:"20.10",
      cardImg2:author10,
    },
    {
      monthName:"ଜୁନ",
      cardImg:author11,
      rasiphala:"ରାଶିଫଳ",
      time:"20.10",
      cardImg2:author12,
    },
    {
      monthName:"ଜୁଲାଇ",
      cardImg:author13,
      rasiphala:"ରାଶିଫଳ",
      time:"20.10",
      cardImg2:author14,
    },
    {
      monthName:"ଅଗଷ୍ଟ",
      cardImg:author15,
      rasiphala:"ରାଶିଫଳ",
      time:"20.10",
      cardImg2:author16,
    },
    {
      monthName:"ସେପ୍ଟେମ୍ବର",
      cardImg:author17,
      rasiphala:"ରାଶିଫଳ",
      time:"20.10",
      cardImg2:author18,
    },
    {
      monthName:"ଅକ୍ଟୋବର",
      cardImg:author19,
      rasiphala:"ରାଶିଫଳ",
      time:"20.10",
      cardImg2:author20,
    },
    {
      monthName:"ନଭେମ୍ୱର",
      cardImg:author21,
      rasiphala:"ରାଶିଫଳ",
      time:"20.10",
      cardImg2:author22,
    },
    {
      monthName:"ଡିସେମ୍ବର",
      cardImg:author23,
      rasiphala:"ରାଶିଫଳ",
      time:"20.10",
      cardImg2:author24,
    }, 
  ]
    
  let [data,setData]=useState(frontCards)
  console.log(data);
  return (
   <>
   
   <div className='  w-full pt- justify-center bg-orange-300 '>
    <div className=" h-20 font-extrabold text-xl text-white mb- bg-[url('https://www.shutterstock.com/image-vector/indian-tribal-painting-warli-260nw-2429804279.jpg')] ">
    <marquee behavior="" direction="">
      <div className=' flex pt-8 '>
        <img className=' h-10 rounded-full' src="https://i.pinimg.com/736x/77/4b/37/774b370129b868453451ae3085b1c13c.jpg" alt="" />
      <h2 className=' px-2'>ଓଡ଼ିଆ କ୍ୟାଲେଣ୍ଡର ୨୦୨୫</h2>
      <img className=' h-10 rounded-full' src="https://i.pinimg.com/736x/77/4b/37/774b370129b868453451ae3085b1c13c.jpg" alt="" />
      </div>
    </marquee>
    </div>
   <div className='front p-2 lg:grid lg:grid-cols-4 lg:gap-4 border-2 '>
    {
      data.map((data)=>{

        return <CalenderCard data={data} />
      })
    }
   </div>
   </div>
   </>
  )
}

export default CalenderImg