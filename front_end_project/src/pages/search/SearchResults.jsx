import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { projectsSearchableContents } from "../projects/projects";
import { homeSearchableContents } from "../homepage/Homepage";
import { newsSearchableContents } from "../news/news";
import { contactSearchableContents } from "../contact/contact";
import { iotTechnologiesSearchableContents } from "../resources/iotTechnologies";
import { iotStatisticsSearchableContents } from "../resources/iotStatistics";
import { iotUpdatesSearchableContents } from "../resources/iotUpdates";
import Highlighter from "react-highlight-words";

const convertToPageContents = ({ title, link, pageContents }) => {
    return pageContents.map((content, id) => {
        return {
            id,
            title,
            link,
            content,
        };
    });
};

const searchContent = (searchText) => {
    const searchTerms = searchText.split(" ");

    console.log("sldjkf")

    return [
        ...convertToPageContents({
            title: "Projects",
            link: "/projects",
            pageContents: projectsSearchableContents,
        }),
        ...convertToPageContents({
            title: "Home",
            link: "/home/",
            pageContents: homeSearchableContents,
        }),
        ...convertToPageContents({
            title: "News",
            link: "/news/",
            pageContents: newsSearchableContents,
        }),
        ...convertToPageContents({
            title: "Contact",
            link: "/contact/",
            pageContents: contactSearchableContents,
        }),
        ...convertToPageContents({
            title: "IotTechnologies",
            link: "/iotTechnologies/",
            pageContents: iotTechnologiesSearchableContents,
        }),
        ...convertToPageContents({
            title: "IotStatistics",
            link: "/iotStatistics/",
            pageContents: iotStatisticsSearchableContents,
        }),
        ...convertToPageContents({
            title: "IotUpdates",
            link: "/iotUpdates/",
            pageContents: iotUpdatesSearchableContents,
        }),
    ].filter(({ title, content }) => {
        return searchTerms.some((term) => {
            return (
                title.toLowerCase().includes(term.toLowerCase()) ||
                content.toLowerCase().includes(term.toLowerCase())
            );
        });
    });
};

const SearchResults = () => {
    const { search } = useLocation();
    const { q } = queryString.parse(search);

    if (!q) {
        return null
    }


    const matchedContents = searchContent(q);
    console.log(
        "🚀 ~ file: SearchResults.jsx:68 ~ SearchResults ~ matchedContents:",
        matchedContents,
    );

    return (
        <div className="container mx-auto mt-10 p-10 bg-emerald-200">
            <p className="text-xl">Users is trying to search: <span className="font-bold">{q}</span></p>
            <br></br>
            {matchedContents.map(({ title, link, content }, i) => {
                return (
                    <div key={i}>
                        <a className="font-bold text-green-800" href={link}>{title}</a>
                        <p>
                            <Highlighter
                                searchWords={q.split(" ")}
                                autoEscape={true}
                                textToHighlight={content}
                            />
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default SearchResults;