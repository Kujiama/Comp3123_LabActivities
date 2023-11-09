const Student = (student) => {
    return ( 
        <div className="student">
            <h1>{student.stuId}</h1>
            <h3>{student.name}</h3>
        </div>
    );
}

Student.defaultProps = {
    name: "Your Name",
    stuId: "Your ID"
}
 
export default Student;