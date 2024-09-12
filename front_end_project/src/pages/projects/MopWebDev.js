import DataPage from "./DataPage";
import webimage from "./image/webimage.jpeg";

const webPageData = {
  title: "Chameleon City of Melbourne (CoM) Web Development",
  description:
    "Since 2014, the City of Melbourne has been a leader in Open Data, driving innovation through the Chameleon project This web development initiative focuses on creating practical applications to showcase use cases provided by the data science team, enhancing business solutions and operational efficiencies across Melbourne.",
  imageUrl: webimage,
  imageAlt: "Descriptive Alt Text",
  products: [
    "Dynamic Web Application: Showcases real-time use cases of Open Data utilization, offering statistical insights on popularity and yearly publications.",
    "Data Management System: A secure platform for data science team members to log in, manage, and upload new use cases. This trimester focuses on developing key functionalities like account management and improving user interface for enhanced usability.",
  ],
  links: [
    {
      url: "https://data.melbourne.vic.gov.au/pages/home/",
      text: "CoM Open Data Portal",
      description: "Explore a vast range of datasets and resources, featuring tools for data visualization, comprehensive analytics, and API access to foster transparency and accountability.",
    },
    {
      url: "https://master--mopweb.netlify.app/en",
      text: "T1 2024 Application Deployment",
      description: "Stay updated with the latest deployment schedules and application updates enhancing access to city-wide data.",
    },
  ],
};

const MopWebDev = () => <DataPage {...webPageData} />;
export default MopWebDev;
