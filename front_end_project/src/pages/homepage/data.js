// This is an array of content for projects
const projects = [
    {
      id: 1,
      title: "EV Adoption",
      details: "Further advancing sustainable mobility solutions.",
      image: require('./assets/EV.png'),
      githubLink: "",
      learnMoreLink: "",
    },
    {
      id: 2,
      title: "City of Melbourne Open Data",
      details: "Melbourne Open Data refers to the City of Melbourne's initiative to make a wide range of public data sets available to the public for free.",
      image: require('./assets/City.png'),
      githubLink: "",
      learnMoreLink: "",
    },
    {
      id: 3,
      title: "Website Uplift",
      details: "Research, create, test, document and deploy IoT-based solutions to enhance life through the application of smart city technologies.",
      image: require('./assets/Website.png'),
      githubLink: "",
      learnMoreLink: "",
    }
];

// This is an array for chatbox PNG assets
const chatboxAssets = {
    chameleonLogo: require('./assets/Header-Chameleon.png'),
    chatOpenImg: require('../Chatbot/images/chat-open.png'),
    chatCloseImg: require('../Chatbot/images/chat-close.png'),
    dotMenuImg: require('../Chatbot/images/dot-menu.png'),
    chatIcon: require('../Chatbot/images/chat-icon.png'),
    fileSelectIcon: require('../Chatbot/images/file-select.png'),
    sendMessageImg: require('../Chatbot/images/send-message.png')
};

export { projects, chatboxAssets };
