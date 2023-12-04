import queryString from "query-string";
import { useLocation } from "react-router-dom";
import * as JsSearch from "js-search";

var theGreatGatsby = {
    isbn: "9781597226769",
    title: "The Great Gatsby",
    author: {
        name: "F. Scott Fitzgerald",
    },
    tags: ["book", "inspirational"],
};
var theDaVinciCode = {
    isbn: "0307474275",
    title: "The DaVinci Code",
    author: {
        name: "Dan Brown",
    },
    tags: ["book", "mystery"],
};
var angelsAndDemons = {
    isbn: "074349346X",
    title: "Angels & Demons",
    author: {
        name: "Dan Brown",
    },
    tags: ["book", "mystery"],
};

var search = new JsSearch.Search("isbn");
search.addIndex("title");
search.addIndex(["author", "name"]);
search.addIndex("tags");

search.addDocuments([theGreatGatsby, theDaVinciCode, angelsAndDemons]);

search.search("The"); // [theGreatGatsby, theDaVinciCode]
console.log(
    '🚀 ~ file: SearchResults.jsx:38 ~ search.search("The"):',
    search.search("The"),
);
search.search("scott"); // [theGreatGatsby]
const dan = search.search("dan"); // [angelsAndDemons, theDaVinciCode]
console.log("🚀 ~ file: SearchResults.jsx:44 ~ dan:", dan);
search.search("mystery"); // [angelsAndDemons, theDaVinciCode]

const initContentSearch = () => {
    const pageContents = [
        {
            id: 1,
            title: "Projects",
            link: "/projects",
            content: "EV Adoption Tools",
        },
    ];
    const search = new JsSearch.Search("id");
    search.addIndex("content");
    search.addDocuments(pageContents);
    return search;
};

export const SearchResults = () => {
    const { search } = useLocation();
    const { q } = queryString.parse(search);

    const contentSearch = initContentSearch();
    const matchedContents = contentSearch.search(q);
    console.log(
        "🚀 ~ file: SearchResults.jsx:68 ~ SearchResults ~ matchedContents:",
        matchedContents,
    );

    return (
        <div className="container mx-auto text-white">
            <p>Users is trying to search: {q}</p>
            {matchedContents.map(({ title, link, content }, i) => {
                return (
                    <div key={i}>
                        <a href={link}>{title}</a>
                        <p>{content}</p>
                    </div>
                );
            })}
        </div>
    );
};
