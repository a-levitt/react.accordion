import AccordionItem from "./AccordionItem.jsx";

function Accordion({data}) {
    return <div className="accordion">
        {data.map((el, index) => (
            <AccordionItem
                key={index}
                title={el.title}
                text={el.text}
                numb={index}
            />
        ))}
    </div>
}

export default Accordion;