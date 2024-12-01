import {useState} from "react";

function AccordionItem({numb, title, text}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`item ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}>
            <p className="number">{numb < 9 ? `0${numb+1}` : `${numb+1}`}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{text}</div>}
        </div>
    )
}

export default AccordionItem;