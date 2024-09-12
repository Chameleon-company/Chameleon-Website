import React from 'react';
import DataPage from "./DataPage";
import dsImage from "./image/dsImage.jpg"; 

const dsPageData = {
  title: "Chameleon City of Melbourne (CoM) Data Science",
  description:
    "For several years now, the City of Melbourne has demonstrated a strong commitment to collecting data and making it openly accessible to the public. Partnering with Deakin, one of the goals for CoM has been to show the various possible ways this open data can be beneficially used. The data science team focuses primarily on the creation of use cases, which are individual projects that use two or more datasets from the CoM. These use cases act as points of reference/guides to show people how CoM data can be used, while simultaneously providing interesting insights and analysis.",
  imageUrl: dsImage,
  imageAlt: "Data Science Team at Work",
  products: [
    "Members from the data science team create use cases from CoM open data, which act as guides and examples of what can be accomplished with it.",
    "These use cases are currently accessible on GitHub, and are also being integrated through other areas, such as through the Chameleon website.",
  ],
  links: [
    {
      url: "https://data.melbourne.vic.gov.au/pages/home/",
      text: "CoM Open Data Portal",
      description: "Explore a vast range of datasets and resources, featuring tools for data visualization, comprehensive analytics, and API access to foster transparency and accountability.",
    },
    {
      url: "https://github.com/Chameleon-company/MOP-Code/tree/master/datascience/usecases/READY%20TO%20PUBLISH/T1%202024",
      text: "T1 2024 Use Cases on GitHub",
      description: "View and contribute to the ongoing development of data use cases by the CoM data science team.",
    },
  ],
};

const MopDS = () => <DataPage {...dsPageData} />;
export default MopDS;

