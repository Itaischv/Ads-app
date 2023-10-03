import { loremIpsum } from "lorem-ipsum";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import axios from 'axios';
import { adClickedEvent } from "../api/api";

export const Page = ({number}) => {

    return(
        <div className={'pageContainer'}>
            <h2>Page {number}</h2>
            <Box>
                <Header onclick={adClickedEvent}/>
                <h4>Page content:</h4>
                <Sidebar onclick={adClickedEvent}/>
                <article>
                    {
                        loremIpsum({
                            count: Math.floor(Math.random() * 50) + 1,                // Number of "words", "sentences", or "paragraphs"
                            paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
                            paragraphUpperBound: 5,  // Max. number of sentences per paragarph.
                            random: Math.random,     // A PRNG function
                            sentenceLowerBound: 5,   // Min. number of words per sentence.
                            sentenceUpperBound: 8,  // Max. number of words per sentence.
                            units: "paragraph",      // paragraph(s), "sentence(s)", or "word(s)"
                        })}
                </article>

                <Footer onclick={adClickedEvent}/>
            </Box>
        </div>
    );
};
