const School = (school) => {
    return (
        <p >{`${school.name}, ${school.location}`} </p>
    );
}

School.defaultProps = {
    name: "Your College",
    location: "School Location"
}
 
export default School;