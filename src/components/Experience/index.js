import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "Since Dec, 2020",
    cardTitle: "Started working!",
    cardDetailedText:
      "Started my career in IT industry with GlobalLogic as a Front End Developer on React Framework.",
  },
  {
    title: "Oct, 2020",
    cardTitle: "Graduated!!",
    cardDetailedText:
      "Graduated with a B.E degree from Shri Madhwa Vadiraja Institute of Technology & Management, Bantakal",
  },
  {
    title: "Oct, 2019",
    cardTitle: "Co-ordinated an IIoT event!",
    cardDetailedText:
      "Worked as a main co-ordinator fot IIoT-v5 event hosted in our college",
  },
  {
    title: "Oct, 2018",
    cardTitle: "Started my #LilMentor journey",
    cardDetailedText:
      "Worked as #LilMentor for ATL initiative. Met alot of school kids and exchanged project ideas",
  },
  {
    title: "May, 2016",
    cardTitle: "Finished PUC",
    cardDetailedText:
      "Studied in Vidyodaya PU, Udupi and passed with distinction :D",
  },
  {
    title: "May, 2014",
    cardTitle: "Finished 10th",
    cardDetailedText:
      "Studied in VIdyodaya Public School, Udupi and that's it!",
  },
];

const Experience = () => {
  return (
    <div id="experience">
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        useReadMore={false}
        cardHeight={150}
        scrollable={false}
        theme={{ 
            primary: "black",
            secondary: "white",
            titleColor: "black"
          }}
      />
    </div>
  );
};

export default Experience;
