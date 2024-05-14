//import chameleonLogo from "./assets/Header-Chameleon.png";
//import evProject from "./assets/Thumbnail-EV.jpeg";

const content1 =
  "How does Chameleon approach its projects?";
const content2 = "Outline Chameleon's methodology for researching, creating, testing, documenting, and deploying IoT solutions.";
const content3 = "Emphasize the importance of rigorous testing and documentation in ensuring the reliability and effectiveness of deployed solutions.";

const Ques3 = () => {
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
  ];
  
  export default Ques3;
  