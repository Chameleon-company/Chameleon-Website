//import chameleonLogo from "./assets/Header-Chameleon.png";
//import evProject from "./assets/Thumbnail-EV.jpeg";

const content1 = "Are there collaboration opportunities or partnerships available with Chameleon?";
const content2 =
  "Yes, Chameleon welcomes collaboration opportunities and partnerships on smart city projects, research initiatives, and innovation ventures. Partnering with Chameleon provides access to expertise, resources, and networks within the smart city ecosystem.";


const ResourceQues1 = () => {
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
  
  export const ques1SearchableContents = [
    content1,
    content2,
  ];
  
  export default ResourceQues1;
  