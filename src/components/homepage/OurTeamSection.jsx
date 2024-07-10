import React from "react";
import CardTeam from "./CardTeam";
import Slider from "react-slick";

function OurTeamSection() {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };
  
  const teamMembers = [
    {
      title: "EI CHANUDOM",
      role: "Leader",
      github: "https://github.com/domkh12",
      facebook: "https://www.facebook.com/ei.chanudom/",
      img: "public/homepageImg/udom.png",
      color: "secondary",
    },
    {
      title: "MOM RAKSMEY",
      role: "Member",
      github: "https://github.com/janesmith",
      facebook: "https://facebook.com/janesmith",
      img: "public/homepageImg/raksmey.png",
      color: "primary",
    },
    {
      title: "RETH SARAKNORIN",
      role: "Member",
      github: "https://github.com/itsmestevee",
      facebook: "https://www.facebook.com/bobaaa13?mibextid=LQQJ4d",
      img: "public/homepageImg/norin.png",
      color: "primary",
    },
    {
      title: "SOY SREYTEY",
      role: "Member",
      github: "https://github.com/Zeiitey",
      facebook: "https://www.facebook.com/profile.php?id=100057300903859&mibextid=LQQJ4d",
      img: "public/homepageImg/tey.png",
      color: "primary",
    },
    {
      title: "HOR RATHA",
      role: "Member",
      github: "https://github.com/HorRatha",
      facebook: "https://www.facebook.com/thouy.dp.7?mibextid=LQQJ4d",
      img: "public/homepageImg/rotha.png",
      color: "primary",
    },
    {
      title: "SRIV NARY",
      role: "Member",
      github: "https://github.com/SrivNary",
      facebook: "https://www.facebook.com/profile.php?id=100046388491383&mibextid=ZbWKwL",
      img: "public/homepageImg/nary.png",
      color: "primary",
    },
    {
      title: "SEM SOPAHNA",
      role: "Member",
      github: "https://github.com/SopanhaSem",
      facebook: "https://www.facebook.com/profile.php?id=100035612538137",
      img: "public/homepageImg/panha.png",
      color: "primary",
    },
    {
      title: "NGOV BUNSINH",
      role: "Member",
      github: "https://github.com/Bunsinhh",
      facebook: "https://www.facebook.com/NAMWOOON",
      img: "public/homepageImg/bunsinh.png",
      color: "primary",
    },
    {
      title: "KHUON CHHOEURN",
      role: "Member",
      github: "https://github.com/ChhoeunKhuon",
      facebook: "https://www.facebook.com/mnus.tmey.94064?mibextid=ZbWKwL",
      img: "public/homepageImg/chhoeurn.png",
      color: "primary",
    },
  ];
  return (
    <section className="py-20">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-4xl text-primary font-semibold">
          Why Choose Showcase?
        </h2>
        <p className="text-lg">
          Showcase.com has everything you need. Whatever you want to do, we have
          a feature for it.
        </p>
        <div className="w-44 rounded-md h-1 bg-primary"></div>
      </div>
      <div className="mx-20 slider-container mt-10">
        <Slider {...settings}>
        {teamMembers.map((member) => (
        <CardTeam
          key={member.title} // Important for performance optimization
          title={member.title}
          role={member.role}
          github={member.github}
          facebook={member.facebook}
          img={member.img}
          color={member.color}
        />
      ))}
        </Slider>
      </div>
    </section>
  );
}

export default OurTeamSection;
