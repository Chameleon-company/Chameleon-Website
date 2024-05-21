import chameleonLogo from "./assets/Header-Chameleon.png";
import cityOfMelProject from "./assets/Thumbnail-CoM.png";
import evProject from "./assets/Thumbnail-EV.jpeg";
import websiteProject from "./assets/Thumbnail-Website.png";
import "./homepage.css";

const content1 =
  "At Chameleon, our mission is to research, create, test, document and deploy IoT-based solutions to enhance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.";
const content2 =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus numquam atque odio ab suscipit ipsam reiciendis alias, facere enim.";
const content3 = "City of MOD";
const content4 =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus numquam atque odio ab suscipit ipsam reiciendis alias, facere enim.";
const content5 = "Website Uplift";
const content6 =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus numquam atque odio ab suscipit ipsam reiciendis alias, facere enim.";

const Homepage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&display=swap"
      />

      <header className="bg-pewter p-2 header">
        <div className="container flex flex-col align-center md:flex-row md:justify-between p-4 gap-4">
          <img src={chameleonLogo} alt="" className="mx-auto header-img" />
          <div className="my-auto">
            <p
              style={{ fontFamily: "Roboto, sans-serif", fontStyle: "normal" }}
              className="align-middle flex-1 text-xl"
            >
              {content1}
            </p>
          </div>
        </div>
      </header>

      <section className="bg-green-emrld">
        <div className="">
          <h3 className="text-center pt-3 font-semibold lg:text-4xl sm:text-3xl text-[26px] uppercase text-white">
            Our Projects
          </h3>
          <div className="flex flex-col items-center justify-center lg:flex-row text-center lg:justify-around gap-4 p-5 container">
            <div className="max-w-sm bg-green-sage border border-gray-200 rounded-lg shadow">
              <img
                className="rounded-t-lg"
                src={evProject}
                alt="Electric vehicle charging station"
              />
              <div className="p-5">
                <h5
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                  }}
                  className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                  EV Adoption
                </h5>
                <p
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                  }}
                  className="mb-3 font-normal text-gray-700"
                >
                  {content2}
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-green-sage border border-gray-200 rounded-lg shadow">
              <img
                className="rounded-t-lg thumbnail"
                src={cityOfMelProject}
                alt="Melbourne street"
              />
              <div className="p-5">
                <h5
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                  }}
                  className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                  {content3}
                </h5>
                <p
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                  }}
                  className="mb-3 font-normal text-gray-700"
                >
                  {content4}
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-green-sage border border-gray-200 rounded-lg shadow">
              <img
                className="rounded-t-lg thumbnail"
                src={websiteProject}
                alt="Electric vehicle charging station"
              />
              <div className="p-5">
                <h5
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                  }}
                  className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                  {content5}
                </h5>
                <p
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                  }}
                  className="mb-3 font-normal text-gray-700"
                >
                  {content6}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
