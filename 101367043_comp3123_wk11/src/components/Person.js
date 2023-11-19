import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const styling = {
    display: "flex",

    padding: "15px",


    box: {
        border: "1px solid black",
        margin: "10px",
        backgroundColor: "rgb(75, 160, 181)",
    },

    cardHeader:{
        padding: "15px",
        borderBottom: "1px solid black",
    },


    left:{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },

    img:{
        borderRadius: "50%",
        height: "250px",
    }
}

const Person = (person) => {

    return ( 
        <div style={styling.box}>
            <div className="title" style={styling.cardHeader}>
                <h4>{`${person.data.name.first} ${person.data.name.last} - ${person.data.login.uuid}`}</h4>
            </div>
            <div className="Card" style={styling}>
                <div className="" style={styling.left}>
                    <img src={person.data.picture.large} alt="profile" style={styling.img}/>
                    <Button variant="primary" className='w-15'>Details</Button>
                </div>
                <div className="Card-info" style={{ marginLeft: "50px" }}>
                    <strong>Username:</strong> {person.data.login.username}<br/> <br/>
                    <strong>Gender:</strong> {person.data.gender}<br/><br/>
                    <strong>Time Zone:</strong> {person.data.location.timezone.description}<br/><br/>
                    <strong>Address:</strong> {person.data.location.street.number} {person.data.location.street.name}, {person.data.location.city}, {person.data.location.state}, {person.data.location.country}, {person.data.location.postcode}<br/><br/>
                    <strong>Email:</strong> {person.data.email}<br/><br/>
                    <strong>Birth:</strong> {person.data.dob.date}<br/><br/>
                    <strong>Register:</strong> {person.data.registered.date}<br/><br/>
                    <strong>Phone#:</strong> {person.data.phone}<br/><br/>
                    <strong>Cell#:</strong> {person.data.cell}<br/><br/>
                </div>
            </div>
        </div>
    );
}
 
export default Person;