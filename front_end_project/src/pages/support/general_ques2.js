//import chameleonLogo from "./assets/Header-Chameleon.png";
//import evProject from "./assets/Thumbnail-EV.jpeg";

const content1 =
  "What areas does Chameleon focus on?";
const content2 ="Detail the specific areas where Chameleon applies its expertise, including:";
const content3 = "Building smarter cities: Discuss how Chameleon develops solutions to improve urban infrastructure and services.";
const content4 = "Smart homes: Explain Chameleon's role in creating IoT devices and systems for residential use.";
const content5 = "Transportation: Describe Chameleon's efforts to enhance transportation systems through IoT technology, such as traffic management and public transit systems.";
const content6 = " Energy management systems: Highlight Chameleon's initiatives to optimize energy usage and promote sustainability in urban environments.";
const Ques2 = () => {
    return (
      <>
        <header className="bg-pewter p-2">
          <div className="container flex flex-col align-center md:flex-row md:justify-between p-4 gap-4 bg-green-emrld ">
            <div className="my-auto">
              <p className="align-middle flex-1 text-xl">{content1}</p>
            </div>
          </div>
        </header>
        <section className="bg-green-sage">
          <div className="">
            <div className="flex flex-col items-center justify-center lg:flex-row text-center lg:justify-around gap-4 p-5 container">
             
               
                <div class="px-6 py-4">

                  <p class="text-gray-700 text-base"><strong>{content2}</strong></p>
                  <br></br>
                  <p class="text-gray-700 text-base"><strong>{content3}</strong></p>
                  <br></br>
                  <p class="text-gray-700 text-base"><strong>{content4}</strong></p>
                  <br></br>
                  <p class="text-gray-700 text-base"><strong>{content5}</strong></p>
                  <br></br>
                  <p class="text-gray-700 text-base"><strong>{content6}</strong></p>
                </div>
              </div>
             
            </div>
          
        </section>
      </>
    );
  };
  
  export const ques2SearchableContents = [
    content1,
    content2,
    content3,
    content4,
    content5,
    content6,
  ];
  
  export default Ques2;
  