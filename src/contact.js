import { Button, Container } from "react-bootstrap";

function Contact () { 
    return (
        // container fluid z bootstrapa daję działanie strony na całą jej szerokość (takie RWD~~~ )
        <Container fluid className="m-0 p-0 w-100">
            <h1>Contact</h1>
            
            <div className="contactButtons p-1">
                {/* dorzucam buttony do linków i target="_blank" , który odpowiada za otwarcie w nowej karcie */}
                <a href="https://facebook.com/" target="_blank"><Button className="btn mx-2">Facebook</Button></a>
                <a href="https://linkedin.com/" target="_blank"><Button className="btn mx-2">LinkedIn</Button></a>
                <a href="https://github.com/PatrycjaBochnak" target="_blank"><Button className="btn mx-2">GitHub</Button></a>
            </div>
        </Container>
    );
}

export default Contact;