import Article from './articles';
import Success from '../success.jpg'
import Case from '../case.jpg'
import Ai from '../ai.jpg'

// const articleList = [
//   {
//     id: 0,
//     title: 'Why should you buy an EV',
//     image:
//       'https://images.unsplash.com/photo-1672152774636-54492a200f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=969&q=80',
//     article: Article.WhyBuyEV,
//   },
//   {
//     id: 1,
//     title: 'What is a smart city',
//     image:
//       'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//     article: Article.smartCity,
//   },
//   {
//     id: 2,
//     title: 'Article 3',
//     image:
//       'https://images.unsplash.com/photo-1525935944571-4e99237764c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
//     article: Article.whyBuyEv2,
//   },
// ];
const articleList = [
  {
    id: 0,
    category:'success',
    title: "Success Story Chameleon's Website",
    subTitle:'Recognition and Expansion of industry leaders and government bodies alike',
    para1:"Chameleon's relentless dedication to research and innovation caught the attention of industry leaders and government bodies alike. Their pioneering work in smart city technologies earned them prestigious awards and recognition at international forums. This acclaim catapulted Chameleon into a position of influence, allowing them to collaborate with global partners on larger-scale projects.",
    para2:"Through their unwavering commitment to improving life through IoT-based solutions, Chameleon continues to drive the evolution of smart cities, homes, transportation, and energy management systems, leaving an indelible mark on the urban landscape of the future.",
    image: Success,
  },
  {
    id: 1,
    category:'Case Study',
    title: "Case Study Chameleon's IoT-based solutions",
    subTitle: "Chameleon's IoT-based solutions played a pivotal role in within urban environments.",
    para1: "Chameleon's relentless dedication to research and innovation caught the attention of industry leaders and government bodies alike. Their pioneering work in smart city technologies earned them prestigious awards and recognition at international forums. This acclaim catapulted Chameleon into a position of influence, allowing them to collaborate with global partners on larger-scale projects.",
    para2: "Intelligent Transportation System In a collaboration with a forward-thinking transportation agency, Chameleon demonstrated the transformative potential of IoT-based smart transportation systems. Facing congestion, unreliable schedules, and environmental concerns, the agency sought a comprehensive solution. Chameleon's team implemented a multi-faceted approach, incorporating real-time tracking of vehicles, predictive maintenance of transit infrastructure, and adaptive traffic management. Commuters were provided with accurate arrival times and alternative routes, leading to reduced travel times and decreased frustration. Moreover, the agency experienced a substantial decrease in maintenance costs due to proactive repairs driven by IoT data insights. This success story led to increased public transportation usage, a 25% reduction in traffic congestion, and a notable decrease in air pollutants within the city.",
   para3:"Sustainable Urban Development: With increasing concerns about environmental sustainability and climate change, Chameleon's dedication to enhancing life through smart city technologies dovetails with the industry's push for sustainable urban development. IoT-enabled solutions can contribute to reduced carbon emissions, efficient resource allocation, and eco-friendly infrastructure",
    image: Case,
  },
  {
    id: 2,
    category:'Trend',
    title: 'Industry trends and insights of Chameleon',
    subTitle: 'Rise of Smart Cities. The concept of smart cities is gaining momentum globally',
    para1:"Rise of Smart Cities: The concept of smart cities is gaining momentum globally, driven by the need for efficient resource management, improved urban planning, and enhanced quality of life. Chameleon's emphasis on building smarter cities resonates with the growing trend of integrating technology to create more sustainable connected and livable urban environments",
    para2: "IoT Integration in Energy Management: The increasing complexity of energy application needs has led to the adoption of IoT systems for real-time monitoring, analysis, and optimization of energy consumption. Chameleon's mission to deploy IoT-based solutions for energy management addresses the industry's shift towards data-driven approaches to enhance energy efficiency and reduce environmental impact.",
    para3: "Data-Driven Decision-Making: Chameleon's focus on research and data collection aligns with the industry's move towards data-driven decision-making. The ability to gather, analyze, and act upon real-time data from IoT devices allows for more informed choices in energy usage, transportation planning, and urban development.",
    para4: "Residents experienced a 30% decrease in utility bills, and the development became a blueprint for future eco-friendly communities. Chameleon's expertise in deploying smart technologies not only enhanced residents' quality of life but also showcased the potential for sustainable urban planning.",
    para4: "IoT-enabled sensors were integrated into every aspect of the community, from homes to public spaces. These sensors monitored temperature, lighting, occupancy, and water usage. With real-time data analysis, residents enjoyed optimal living conditions while minimizing resource consumption",
    image: Ai,
  }

];

export default articleList;
