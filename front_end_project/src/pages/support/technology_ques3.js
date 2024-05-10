//import chameleonLogo from "./assets/Header-Chameleon.png";
//import evProject from "./assets/Thumbnail-EV.jpeg";
const content1 = "How does Chameleon deploy its solutions in real-world environments?";

const content2 =
  "Chameleon deploys its solutions in real-world smart city environments through a structured process that involves installation, configuration, integration with existing infrastructure, and ongoing support services.";

const content3 = "We ensure seamless deployment and implementation to maximize the benefits of our solutions.";

const TechnologyQues3 = () => {
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
                </div>
              </div>
             
            </div>
          
        </section>
      </>
    );
  };
  
  export const ques3SearchableContents = [
    content1,
    content2,
    content3,
  ];
  
  export default TechnologyQues3;
  