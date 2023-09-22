import './eventViewCard.css';

function EventView(props) {
  return (
    <div className="event-view-card">
      <img src={props.image}></img>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default EventView;
