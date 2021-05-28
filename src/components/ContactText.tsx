import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "You’ve got questions, we’ve got answers on anything...",
    "Please contact us...",
    "Taj Samudra ,No 25, Galle Face Center Road , Colombo , SRI LANKA",
    "We are ready to welcome you back with enlivened hospitality, greater care and assured safety!"
];
const ContactText: React.FC = () =>{
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            2500 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return(
        <React.Fragment>
        <h1 className="help-title">How Can We Help?</h1>
            <br/>
        <h3 className="help-description">
            <TextTransition
                text={ TEXTS[index % TEXTS.length] }
                springConfig={ presets.wobbly }
            />
        </h3>
        </React.Fragment>
    )
};

export default ContactText;