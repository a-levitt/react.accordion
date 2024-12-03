import AccordionItem from "./AccordionItem.jsx";
import {useState} from "react";

function Accordion({data}) {
    const [curOpen, setCurOpen] = useState(null);
    
    return <div className="accordion">
        {data.map((el, index) => (
            <AccordionItem
                key={index}
                curOpen={curOpen}
                onOpen={setCurOpen}
                title={el.title}
                text={el.text}
                numb={index}
            />
        ))}
    </div>
}

export default Accordion;