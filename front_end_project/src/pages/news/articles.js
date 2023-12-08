import article1 from "./images/article1.jpeg";
import article3 from "./images/article3.jpeg";
import article2 from "./images/EV-Project.png";
const articleList = [
  {
    key: 1,
    image: article1,
    title: "Melbourne Open Data",
    preview: `"Melbourne Open Data refers to the City of Melbourne's initiative to make a wide range of public data sets available to the public for free..."`,
    author: "Jon Snow",
    category: "News",
    date: "December 5, 2023",
  },
  {
    key: 2,
    image: article2,
    preview: `"The EV Adoption Tools company announces a groundbreaking partnership with major electric vehicle manufacturers to further advance sustainable mobility solution..."`,
    title: "EV Adoption Tools",
    author: "Jon Snow",
    date: "December 5, 2023",
  },
  {
    key: 3,
    image: article3,
    title: "Chameleon Website",
    preview: `"The Chameleon Website aims to accumulate all the information about the Chameleon company and present it in a format that is pleasantly designed, laid out, easy to navigate and displays the progress of each of its three projects and outlines their goals. This project aims to provide a one-stop portal to different links and sub-projects within the company."`,
    author: "Jon Snow",
    category: "Insight",
    date: "December 5, 2023",
  },
];

export default articleList;
