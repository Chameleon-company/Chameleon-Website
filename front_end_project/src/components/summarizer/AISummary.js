import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { FaMagic } from 'react-icons/fa';
import axios from 'axios';

function AISummary ({ content }) {
    const [summary, setSummary] = useState('');
    const [error, setError] = useState(false);

    const updateState = (error, summary) => {
        setError(error);
        setSummary(summary);
    };

    const stripHtml = (html) => {
        const tmp = document.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const plainTextContent = stripHtml(content);

                const response = await axios.post(
                    `https://language.googleapis.com/v1/documents:analyzeEntities?key=${process.env.API_KEY}`,
                    {
                        document: { content: plainTextContent.substring(0, 1000), type: 'PLAIN_TEXT', },
                        features: { extractEntities: true, extractDocumentSentiment: true, },
                    },
                    { headers: { 'Content-Type': 'application/json', }, }
                );

                // Adjust this based on the actual response structure
                const sentences = response.data.entities.map(entity => entity.name).join(' ');
                updateState(false, sentences);
            } catch (error) {
                console.error('Error fetching summary:', error);
                updateState(true, 'Failed to retrieve summary.');
            }
        };
        content && fetchSummary();
    }, [content]);

    return (
        <Alert variant={error ? 'danger' : 'success'}>
            <Alert.Heading className="flex items-center space-x-2">
                <span>AI Summary</span>
                <FaMagic size={20} />
            </Alert.Heading>
            <hr />

            {/* <div dangerouslySetInnerHTML={{ __html: summary }} /> */}

            <p>{summary}</p>
        </Alert>
    );
}

export default AISummary;