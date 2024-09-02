import React, { useState } from "react";
import Screen from '../../components/app/Screen';
import '../Chatbot/chatbox.css';
import { Row } from 'react-bootstrap';
import Posts from '../profile/posts';

const content1 = "At Chameleon, our mission is to research, create, test, document and deploy loT-based solutions to enhance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.";

const projects = [
  { id: 1, image: 'https://images.unsplash.com/photo-1488031470693-c1a6d1a4fff7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Chameleon Website', content: '' },
  { id: 2, image: 'https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Chameleon Security', content: '' },
  { id: 3, image: 'https://images.unsplash.com/photo-1470294402047-fc1b5f39bd99?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'MOP Website', content: '' },
  { id: 4, image: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'MOP Data Science', content: '' },
  { id: 5, image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'MOP AI', content: '' },
  { id: 6, image: 'https://images.unsplash.com/photo-1667805630247-28c2a8db1cb4?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'EV Adoptation Tools', content: '' }
];

const Projects = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <Screen title="Projects">
      <Row>
        <Posts posts={projects} />
      </Row>
    </Screen>
  );
};

export const projectsSearchableContents = [content1];

export default Projects;
