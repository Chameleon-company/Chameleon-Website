//import chameleonLogo from "./assets/Header-Chameleon.png";
//import evProject from "./assets/Thumbnail-EV.jpeg";

const content1 =
  "What is Chameleon's mission?";
const content2 = "Provide a concise overview of Chameleon's mission to research, create, test, document, and deploy IoT-based solutions aimed at enhancing life through smart city technologies.";
const content3 = "Test";

const Ques1 = () => {
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
                </div>
              </div>
             
            </div>
          
        </section>
      </>
    );
  };
  
  export const ques1SearchableContents = [
    content1,
    content2,
  ];
  
  export default Ques1;
  