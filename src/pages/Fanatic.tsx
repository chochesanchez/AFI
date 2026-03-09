import Button from "../components/ui/Button";

function Fanatic() {
    return (
        <div>
            <Button variant="primary" onClick={() => { }}>Fanatic</Button>
            <Button variant="primary" disabled={true} onClick={() => { }}>Fanatic</Button>
            <Button variant="secondary" onClick={() => { }}>Fanatic</Button>
            <Button variant="secondary" disabled={true} onClick={() => { }}>Fanatic</Button>
            <Button variant="destructive" onClick={() => { }}>Fanatic</Button>
            <Button variant="destructive" disabled={true} onClick={() => { }}>Fanatic</Button>
            <Button variant="success" onClick={() => { }}>Fanatic</Button>
            <Button variant="success" disabled={true} onClick={() => { }}>Fanatic</Button>
            
        </div>
    );
}

export default Fanatic;