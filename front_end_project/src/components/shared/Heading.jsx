const Heading = ({ text, Style = 'text-3xl' }) => {
  return <h1 className={`text-center font-bold uppercase ${Style}`}>{text}</h1>;
};

export default Heading;
