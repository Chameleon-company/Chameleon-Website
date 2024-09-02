import React from "react";//newly add
import Screen from '../../components/app/Screen';
import OpenAIApi from "openai";
import { useState } from "react";
import './text_summ.css';
//require('dotenv').config()
//script-src 'self' http:xxxx 'unsafe-inline' 'unsafe-eval';
function Text_summ() {
    const [text, setText] = useState("");
    const [summarizedtext, setsummarizedtext] = useState("");
    const [loading, setLoading] = useState(false);
    //const { Configuration, OpenAIApi } = require("openai");
    const openai = new OpenAIApi({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
      });
/*    const configuration = new Configuration({

    }); */
    
    //const openai = new OpenAIApi(configuration);

    const HandleSubmit = (e) => {
      setLoading(true);
      e.preventDefault();
      openai.completions.create({
          model: "gpt-3.5-turbo-instruct",
          prompt: generatePrompt(text),
          temperature: 0.6,
          max_tokens: 100,
        })
        .then((response) => {
          if (response.status === 200) {
            setLoading(false);
            setsummarizedtext(response.choices[0].text);
          }
        })
        .catch((err) => {
          console.log(err, "An error occured");
        });
    };

    function generatePrompt(text) {
      return `Summarize this ${text}. and break them into seperate lines`;
    }

    return (
    <div className="App_">
        <div className="header">
          <h1 className="header_text">
            Text <span className="text_active">Summarizer</span>
          </h1>
          <h2 className="header_summary">
            {" "}
            Summarise your text into a shorter length.
          </h2>
        </div>
        <div className="container">
          <div className="text_form">
            <form>
              <label>Enter your text</label>
              <textarea
                rows={14}
                cols={80}
                placeholder="Put your text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </form>
          </div>
          <div>
            <button type="button" onClick={HandleSubmit}>
              {loading ? "loading..." : "Summarize"}
            </button>
          </div>
          <div className="summarized_text">
            <label>Summarized text</label>
            <textarea
              placeholder="Summarized text"
              cols={80}
              rows={14}
              value={summarizedtext}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }

  export default Text_summ;