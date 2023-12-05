import chameleonLogo from "./assets/Header-Chameleon.png";
import cityOfMelProject from "./assets/Thumbnail-CoM.png";
import evProject from "./assets/Thumbnail-EV.jpeg";
import websiteProject from "./assets/Thumbnail-Website.png";

const Homepage = () => {
  return (
    <>
      <header className="bg-pewter p-2">
        <div className="container flex flex-col align-center md:flex-row md:justify-between p-4 gap-4">
          <img
            src={chameleonLogo}
            alt=""
            style={{ width: "269px", height: "269px" }}
            className="mx-auto"
          />
          <div className="my-auto">
            <p className="align-middle flex-1 text-xl">
              At Chameleon, our mission is to research, create, test, document
              and deploy IoT-based solutions to enhance life through the
              application of smart city technologies including: the building of
              smarter cities, homes, transportation, and energy management
              systems.
            </p>
          </div>
        </div>
      </header>
      <section className="bg-green-emrld">
        <div className="">
          <h2 className="text-center pt-3 font-bold">Our Projects</h2>
          <div className="flex flex-col items-center justify-center lg:flex-row text-center lg:justify-around gap-4 p-5 container">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-green-sage">
              <img
                class="w-full h-40 max-w-full object-cover"
                src={evProject}
                alt="Electric vehicle charging station"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">EV Adoption</div>
                <p class="text-gray-700 text-base">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta possimus numquam atque odio ab suscipit ipsam
                  reiciendis alias, facere enim.
                </p>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-green-sage">
              <img
                class="w-full h-40 max-w-full object-cover"
                src={cityOfMelProject}
                alt="Melbourne street"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Melbourne Open Data
                </div>
                <p class="text-gray-700 text-base">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta possimus numquam atque odio ab suscipit ipsam
                  reiciendis alias, facere enim.
                </p>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-green-sage">
              <img
                class="w-full h-40 max-w-full object-cover"
                src={websiteProject}
                alt="Chameleon"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Website Uplift</div>
                <p class="text-gray-700 text-base">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta possimus numquam atque odio ab suscipit ipsam
                  reiciendis alias, facere enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
