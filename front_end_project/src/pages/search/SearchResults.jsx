import queryString from "query-string";
import { useLocation } from "react-router-dom";
import * as JsSearch from "js-search";
import { projectsContents } from "../projects/projects";
import Highlighter from "react-highlight-words";

const initContentSearch = () => {
    const pageContents = projectsContents.map((content, id) => {
        return {
            id,
            title: "projects",
            link: `/projects/`,
            content: content,
        };
    });
    const search = new JsSearch.Search("id");
    search.addIndex("content");
    search.addDocuments([...pageContents]);
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
                        <p>
                            <Highlighter
                                searchWords={q.split(" ")}
                                autoEscape={true}
                                textToHighlight={content}
                            />
                        </p>
                        <div>
                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
