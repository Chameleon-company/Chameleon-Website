import SearchIcon from "../../../assets/SearchButton.png";
import SearchBoxCSS from "./SearchBox.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Search Box can be called via <SearchBox height="" width="" color=""/>

const SearchBox = (props) => {
  const boxProp = {
    boxSizing: "border-box",
    background: "#fff",
    width: props.width,
    height: props.height,
    display: "flex",
    borderRadius: "5px",
  };

  return (
    <div>
      <form style={boxProp}>
        <img
          src={SearchIcon}
          alt="Search"
          border="0"
          width="60"
          height="40"
          className={SearchBoxCSS["form-icon"]}
        />

        <input
          placeholder={props.text}
          aria-label="Search"
          type="search"
          className={SearchBoxCSS["form-input"]}
        />
        <button
          type="button"
          className={SearchBoxCSS["form-btn"]}
          style={{ background: props.color, color: "white" }}
        >
          <a
            href="s"
            style={{
              textAlign: "center",
              textDecoration: "none",
              color: "white",
            }}
          >
            Search
          </a>
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
