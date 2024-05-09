import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios"; // Add axios for HTTP requests
import "./iotUpdates.css";

class IotUpdates extends Component {
  state = {
    news: [],
    editingContent: null,
    editorState: EditorState.createEmpty(),
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    axios
      .get("http://localhost:3002/news")
      .then((response) => {
        this.setState({ news: response.data });
        console.log("Fetched news:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  handleEditClick = (index) => {
    const { news } = this.state;
    this.setState({
      editingContent: index,
      editorState: EditorState.createWithContent(
        ContentState.createFromText(news[index].content),
      ),
    });
  };

  handleSaveClick = async () => {
    // const { editingContent, editorState, news } = this.state;
    // const contentRaw = convertToRaw(editorState.getCurrentContent());
    // const updatedNews = {
    //   ...news[editingContent],
    //   content: JSON.stringify(contentRaw),
    // };

    const { editingContent, editorState, news } = this.state;
    const plainText = editorState.getCurrentContent().getPlainText(); // Get plain text content
    const updatedNews = {
      ...news[editingContent],
      content: plainText, // Save plain text content instead of rich text
      // Other fields from fullNewsData object
    };

    console.log("contentRaw:", plainText);

    try {
      await axios.put(
        `http://localhost:3002/news/${updatedNews.id}`,
        updatedNews,
      ); // Modify for your actual endpoint
      this.setState({
        news: news.map((item, index) =>
          index === editingContent ? updatedNews : item,
        ),
        editingContent: null,
        editorState: EditorState.createEmpty(),
      });
    } catch (error) {
      console.error("Failed to save news:", error);
    }
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { news, editingContent } = this.state;
    return (
      <div className="iot-updates-container font-poppins">
        <div className="text-center py-[20px]">
          <h1 className="text-black">LATEST IOT UPDATES</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 grid-container">
          {news.map((item, index) => (
            <div
              key={item.id}
              className="iot-update-card bg-[#D1E2C4] rounded-md shadow-md p-6 flex flex-row justify-between items-center w-[1000px] mx-auto"
            >
              <div className="w-3/4">
                <h2 className="text-center font-bold text-black mb-4">
                  {item.title}
                </h2>
                {editingContent === index ? (
                  <Editor
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbarClassName="rich-editor-toolbar"
                    editorClassName="rich-editor-content"
                  />
                ) : (
                  <p className="iot-update-content text-black">
                    {item.content}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-end w-1/4">
                <button
                  className="iot-update-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 mb-4"
                  onClick={() => this.handleEditClick(index)}
                >
                  Edit
                </button>
                {editingContent === index && (
                  <button
                    className="iot-update-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                    onClick={this.handleSaveClick}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default IotUpdates;
