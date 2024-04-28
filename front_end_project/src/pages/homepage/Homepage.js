import Screen from '../../components/app/Screen';
import chameleonLogo from "./assets/Header-Chameleon.png";
import cityOfMelProject from "./assets/Thumbnail-CoM.png";
import evProject from "./assets/Thumbnail-EV.jpeg";
import websiteProject from "./assets/Thumbnail-Website.png";

const content1 =
  "At Chameleon, our mission is to research, create, test, document and deploy IoT-based solutions to enhance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.";
const content2 =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus numquam atque odio ab suscipit ipsam reiciendis alias, facere enim.";
const content3 = "City of Melbourne Open Data";
const content4 =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus numquam atque odio ab suscipit ipsam reiciendis alias, facere enim.";
const content5 = "Website Uplift";
const content6 =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus numquam atque odio ab suscipit ipsam reiciendis alias, facere enim.";

const Homepage = () => {
  return (
    <>
      <Screen>
        <section className="bg-green-emrld mt-auto mb-auto pt-auto pb-auto">
          {/* <div className=""> */}
          <h1 className="text-center pt-3 font-bold">Our Projects</h1>
          <div className="flex flex-col items-center justify-center lg:flex-row text-center lg:justify-around gap-4 p-5 container">
            <div className="max-w-sm rounded hover:border-[5px] overflow-hidden shadow-lg bg-green-sage">
              <img
                className="w-full h-40 max-w-full object-cover"
                src={evProject}
                alt="Electric vehicle charging station"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">EV Adoption</div>
                <p className="text-gray-700 text-base">{content2}</p>
              </div>
            </div>
            <div className="max-w-sm rounded hover:border-[5px] overflow-hidden shadow-lg bg-green-sage">
              <img
                className="w-full h-40 max-w-full object-cover"
                src={cityOfMelProject}
                alt="Melbourne street"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{content3}</div>
                <p className="text-gray-700 text-base">{content4}</p>
              </div>
            </div>
            <div className="max-w-sm rounded hover:border-[5px] overflow-hidden shadow-lg bg-green-sage">
              <img
                className="w-full h-40 max-w-full object-cover"
                src={websiteProject}
                alt="Chameleon"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{content5}</div>
                <p className="text-gray-700 text-base">{content6}</p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
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
