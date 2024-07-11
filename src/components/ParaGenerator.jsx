import { useState } from "react";

const ParaGenerator = () => {
    const [generateText, setGenerateText] = useState("");
    const [numWords, setNumWords] = useState(""); 

    const generate = () => {
        let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
        let words = text.split(" ");
        let generatedWords = [];
        for (let i = 0; i < numWords; i++) {
            let randomIndex = Math.floor(Math.random() * words.length);
            generatedWords.push(words[randomIndex]);
        }
        setGenerateText(generatedWords.join(" "));
    };

    const handleNumWordsChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setNumWords(value);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
                <div className="mb-4">
                    <p className="h-40 overflow-y-auto">{generateText}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="numWords" className="mr-2">Number of Words:</label>
                    <input
                        id="numWords"
                        type="number"
                        className="border px-2 py-1 rounded-md"
                        value={numWords}
                        onChange={handleNumWordsChange}
                    />
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-md" onClick={generate}>
                    Generate
                </button>
            </div>
        </div>
    );
};

export default ParaGenerator;
