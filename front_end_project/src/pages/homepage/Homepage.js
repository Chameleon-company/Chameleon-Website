import Screen from '../../components/app/Screen';
import chameleonLogo from "./assets/Header-Chameleon.png";
import cityOfMelProject from "./assets/Thumbnail-CoM.png";
import evProject from "./assets/Thumbnail-EV.jpeg";
import websiteProject from "./assets/Thumbnail-Website.png";

import article1 from "./assets/Thumbnail-CoM.png";
import article2 from "./assets/Thumbnail-EV.jpeg";
import article3 from "./assets/Thumbnail-Website.png";


import './home.css'

const content1 =
  "At Chameleon, our mission is to research, create, test, document and deploy IoT-based solutions to enhance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.";
const content2 =
  "Further advancing sustainable mobility solutions ";
const content3 = "City of Melbourne Open Data";
const content4 =
  "Melbourne Open Data refers to the City of Melbourne's initiative to make a wide range of public data sets available to the public for free";
const content5 = "Website Uplift";
const content6 =
  "Research, create, test, document and deploy loT-based solutions to enhance life through the application of smart city technologies.";

  const articleList = [
    {
      key: 1,
      image: article1,
      title: "Melbourne Open Data",
      preview: `"Melbourne Open Data refers to the City of Melbourne's initiative to make a wide range of public data sets available to the public for free..."`,
      author: "Jon Snow",
      category: "News",
      date: "December 5, 2023",
    },
    {
      key: 2,
      image: article2,
      preview: `"The EV Adoption Tools company announces a groundbreaking partnership with major electric vehicle manufacturers to further advance sustainable mobility solution..."`,
      title: "EV Adoption Tools",
      author: "Jon Snow",
      date: "December 5, 2023",
    },
    {
      key: 3,
      image: article3,
      title: "Chameleon Website",
      preview: `"The Chameleon Website aims to accumulate all the information about the Chameleon company and present it in a format that is pleasantly designed, laid out, easy to navigate and displays the progress of each of its three projects and outlines their goals. This project aims to provide a one-stop portal to different links and sub-projects within the company."`,
      author: "Jon Snow",
      category: "Insight",
      date: "December 5, 2023",
    },
  ];
  

  
const Homepage = () => {
  return (
    <>
      <Screen>
      <main className="bg-[#4fa373] section-height">
        <div style={{ textAlign: 'center' }}>
          <h1
            className="text-[27px] font-bold text-black"
            style={{
              fontFamily: 'Arial, sans-serif', 
              backgroundColor: '#4fa373',
              display: 'inline-block',
              padding: '10 5px' 
            }}> Chameleon Home
          </h1>
        </div>
        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center mt-10 gap-3 gap-y-5 overflow-hidden md:grid hidden px-[20px]">
            {articleList.map((item, index) => (
              <div className="flex flex-col justify-center items-center" key={index}>
                <h2 className="text-[24px] font-bold text-center text-black uppercase">
                  {item.title}
                </h2>
                <img
                  alt={item.title}
                  src={item.image}
                  className="mt-2 w-[360px] h-[180px] border-white border-y-[16px] border-x-[20px]"
                />
                <p className="text-black font-medium text-[15px] max-w-[360px] pt-2 text-left hidetext text-wrap">
                  {item.preview}
                </p>
                <h3 className="text-[14px] text-black font-bold text-left max-w-[360px] w-full">
                  {item.date}
                </h3>
              </div>
            ))}
          </div>
          <div className="px-[10px] md:hidden block">
            
          </div>
      </main>
    </Screen>
    </>
  );
};

export const homeSearchableContents = [
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
];

export default Homepage;
