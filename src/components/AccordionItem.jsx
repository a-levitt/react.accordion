function AccordionItem({numb, title, text, curOpen, onOpen}) {
    const isOpen = numb === curOpen;

    function handleToggle() {
        onOpen(numb);
    }

    return (
        <div
            className={`item ${isOpen && "open"}`}
            onClick={handleToggle}>
            <p className="number">{numb < 9 ? `0${numb+1}` : `${numb+1}`}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{text}</div>}
        </div>
    )
}

export default AccordionItem;