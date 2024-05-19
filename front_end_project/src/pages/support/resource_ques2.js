//import chameleonLogo from "./assets/Header-Chameleon.png";
//import evProject from "./assets/Thumbnail-EV.jpeg";

const content1 = "How can users provide feedback or suggestions to Chameleon?";
const content2 =
  "Users are encouraged to share feedback, suggestions, or ideas for improving Chameleon's products and services. They can submit their input through contact forms, feedback forms, or directly contacting us via email or other communication channels. We value user feedback and continuously strive to improve our offerings.";


const ResourceQues2 = () => {
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
  ];
  
  export default ResourceQues2;
  