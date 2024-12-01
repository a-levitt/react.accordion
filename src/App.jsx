import Accordion from './components/Accordion.jsx'
import faqs from "./data/faq.js";

function App() {
    return (
        <div>
            <Accordion data={faqs} />
        </div>
    );
}

export default App
