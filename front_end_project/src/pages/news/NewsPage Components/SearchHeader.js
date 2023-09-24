import SearchBox from "./SearchBox";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import SearchHeaderCSS from "./SearchHeader.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const SearchHeader = (props) => {
  const SearchContainer = {
    backgroundColor: "lightgray",
    paddingTop: "20px",
    paddingBottom: "20px",
    border: "2px solid #000;",
  };

  return (
    <div>
      <Container style={SearchContainer}>
        <div className="row justify-content-evenly">
          <Col xs="auto" className="mx-5 mb-3">
            <SearchBox
              color="#024788"
              text="Search for News"
              width="300px"
              height="50px"
            />
          </Col>
          <Col xs="auto" className="mx-5 mb-3">
            <Dropdown>
              <Dropdown.Toggle
                className={SearchHeaderCSS["dropdown-men"]}
                id="dropdown-basic"
                size="lg"
              >
                Year
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">2022</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2021</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs="auto" className="mx-5 mb-3">
            <button className={SearchHeaderCSS["test"]} type="submit">
              Clear Search
            </button>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default SearchHeader;
