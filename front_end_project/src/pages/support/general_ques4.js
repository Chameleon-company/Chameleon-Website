//import chameleonLogo from "./assets/Header-Chameleon.png";
//import evProject from "./assets/Thumbnail-EV.jpeg";

const content1 =
  "Highlight the potential benefits of Chameleon's solutions.";
const content2 = "Improving efficiency and sustainability in urban environments.";
  const content3 = "Enhancing quality of life for residents through innovative technologies.";
const content4 = "Promoting economic development and growth in smart cities.";

const Ques4 = () => {
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
                </div>
              </div>
             
            </div>
          
        </section>
      </>
    );
  };
  
  export const ques4SearchableContents = [
    content1,
    content2,
    content3,
    content4,
  ];
  
  export default Ques4;
  