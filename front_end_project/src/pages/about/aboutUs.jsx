import { Component } from "react";
import logo from "./assets/ChameleonLogo.png";
import connected from "./assets/connected.png";
import environment from "./assets/environment.png";
import partner from "./assets/partner.png";
import support from "./assets/support.png";
import { Accordion } from "flowbite-react";

class aboutUs extends Component {
  render() {
    return (
      <>
        <br></br>

        {/*BREADCRUMB SECTION */}
        <div className="2xl:max-w-[1320px] mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <nav>
            <ol className="flex flex-wrap p-0 mb-4 list-none">
              <li>
                <a href="#">
                  Home
                </a>
              </li>
              /
              <li href="#" active>
                About Us
              </li>
            </ol>
          </nav>
        </div>

        <br></br>

        {/* ABOUT US SECTION */}

        {/* Added a custom class for styling */}
        <div className="2xl:max-w-[1320px] mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] about-page">
          <h1 className="text-sm-left pb-3 font-black">
            ABOUT US
          </h1>
          <div className="ml-3 mr-3 mt-0 flex flex-wrap">

            {/* Changed to specify lg size */}
            <div className="flex-[1_0]" lg={6}>
              <iframe
                src="https://www.youtube.com/embed/JirJCCIeuvg"
                autoPlay
                title="Chameleon About"
                className="pl-3 w-[550px] h-[350px]"
              ></iframe>
            </div>

            {/* Changed to specify lg size */}
            <div className="flex-[1_0]" lg={6}>
              <h2>Chameleon is a Deakin Universty, student-led company dedicated to revolutionizing urban living through the strategic application of IoT-based solutions. Our organization is structured into three distinct divisions, each focused on key areas of strategic importance.</h2>
            </div>
          </div>
        </div>

        <br></br>

        {/* OUT MISSION SECTION*/}
        {/* Added a custom class for styling */}
        <div className="mx-auto w-full about-mission-section bg-[#67A170] max-w-full">
          <h2 className="text-center text-white fw-bold mt-2 pt-3">
            OUR MISSION
          </h2>
          <div className="ml-3 mr-3 mt-0 flex flex-wrap">

            {/* Changed to specify lg size */}
            <div className="flex-[1_0]" lg={6}>
              <img
                src={logo}
                className="img-fluid mx-auto d-block mt-5 pb-5 w-[300px]"
                alt="mission"
              />
            </div>

            {/* Changed to specify lg size */}
            <div className="flex-[1_0]" lg={6}>
              <p className="pb-5 text-white fs-4 text-start fw-light mt-5 pe-3 w-[70%]">
                At Chameleon, our mission is to research, create, test, document and deploy IoT-based solutions to enhance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.
              </p>
            </div>
          </div>
        </div>

        <br></br>

        {/* OUR GOALS SECTION*/}
        {/* Added a custom class for styling */}
        <div className="2xl:max-w-[1320px] mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] about-goals-section">
          <h2 className="text-center text-black fw-bold mt-2 pt-3">
            OUR GOALS
          </h2>
          <div className="mx-3 mt-0 flex flex-wrap">

            {/* Changed to specify md and sm sizes */}
            <div className="flex-[1_0]" md={3} sm={4}>
              <img
                src={connected}
                className="img-fluid mx-auto d-block mt-5"
                alt="mission "
                style={{ width: "200px" }}
              />
              <h4 className="text-center pt-3 fw-bold">Better Connected</h4>
            </div>

            {/* Changed to specify md and sm sizes */}
            <div className="flex-[1_0]" md={3} sm={4}>
              <img
                src={environment}
                className="img-fluid mx-auto d-block mt-5"
                alt="mission "
                style={{ width: "200px" }}
              />
              <h4 className="text-center pt-3 fw-bold">
                Environmentally Friendly
              </h4>
            </div>

            {/* Changed to specify md and sm sizes */}
            <div className="flex-[1_0]" md={3} sm={4}>
              <img
                src={partner}
                className="img-fluid mx-auto d-block mt-5"
                alt="mission "
                style={{ width: "200px" }}
              />
              <h4 className="text-center pt-3 fw-bold">Partnerships</h4>
            </div>

            {/* Changed to specify md and sm sizes */}
            <div className="flex-[1_0]" md={3} sm={4}>
              <img
                src={support}
                className="img-fluid mx-auto d-block mt-5"
                alt="mission "
                style={{ width: "200px" }}
              />
              <h4 className="text-center pt-3 fw-bold">
                Supporting our communities
              </h4>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>

        {/* FAQ SECTION*/}
        {/* Added a custom class for styling */}
        <div className="max-w-full mx-auto w-full bg-[#67A170] about-faq-section">
          <h2 className="text-center text-white fw-bold mt-2 pt-3">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <br></br>
          <Accordion collapseAll className="max-w-6xl mx-auto">
            <Accordion.Panel className="p-0">
              <Accordion.Title data-inactive-classes="p-0">
                <h3>What does Chameleon do?</h3>
              </Accordion.Title>
              <Accordion.Content>Chameleon is an organization dedicated to creating innovative IoT-based solutions to enhance urban life. They focus on various divisions, including City of Melbourne Open Data, Chameleon Website, and Electric Vehicle (EV) Adoption Tools. These divisions work together to address urban challenges, promote sustainability, provide user-friendly access to project information, and champion the adoption of electric vehicles for a greener future.
                Chameleon's overarching mission is to make cities smarter, more livable, and environmentally friendly through their strategic approach and collaborative efforts.
              </Accordion.Content>
            </Accordion.Panel>
            <br></br>
            <Accordion.Panel>
              <Accordion.Title>
                <h3>How can I sign up?</h3>
              </Accordion.Title>
              <Accordion.Content>You can easily sign up with us by following these steps:
                <ul>
                  <li><strong>Visit Our Website:</strong> Start by visiting our website, where you'll find a user-friendly sign-up or registration page.</li>
                  <li><strong>Create Your Account:</strong>  Click on the "Sign Up" or "Register" button and provide the required information. This includes your name, email address, and a password.</li>
                  <li><strong>Verify Your Email:</strong>  After you've filled in the necessary details, you will receive a verification email. Click the link in the email to confirm your registration.</li>
                  <li><strong>Complete Your Profile:</strong>  Log in to your newly created account and complete your profile by adding any additional information or preferences.</li>
                  <li><strong>Start Exploring:</strong>  Once your profile is set up, you can start exploring our platform, accessing resources, and engaging with our projects.</li>
                </ul>
                If you need assistance, feel free to reach out to our support team, and they will be happy to guide you through the process. You can find them under the support page or you can contact them using the phone number or email address provided at the bottom of each page on our website. We're excited to have you on board!
              </Accordion.Content>
            </Accordion.Panel>
            <br></br>
            <Accordion.Panel>
              <Accordion.Title>
                <h3>Where can I find a progress update?</h3>
              </Accordion.Title>
              <Accordion.Content>You can conveniently access progress updates for our projects through our Chameleon Website (CW). Our website serves as a central hub for comprehensive information about all our projects, including their objectives and ongoing developments. Simply navigate to the "Projects" or "News" section on our website to find the latest updates and milestones achieved by our City of Melbourne Open Data (MOP), Chameleon Website (CW), and Electric Vehicle (EV) Adoption Tools (EVAT) divisions. We regularly update this section to keep you informed about our progress in making cities smarter, more livable, and environmentally friendly.</Accordion.Content>
            </Accordion.Panel>
          </Accordion>
          <br></br>
          <br></br>
          <h4 className="text-white">More Questions? Send Us a Message!</h4>
          <br></br>
          <div className="d-flex flex-row">

            <form class="max-w-sm mx-auto">
              <div class="mb-5">

                <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please write your message here..." required />
              </div>
              <button type="submit" class="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Submit</button>
            </form>
          </div>
          <br></br>
        </div>
        {/* Added a custom class for Display None it on Mobile Screens */}
        <br className="lastBR"></br>
      </>
    );
  }
}

export default aboutUs;
