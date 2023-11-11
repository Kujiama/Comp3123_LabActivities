import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const formStyling = {
    
    formStyle:{
        display: 'flex',
        border: '2px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    outputStyle:{
        border: '2px solid green',
        color: 'green',
        textAlign:'center',
    },

    span:{
        color: 'black',
    }
};

export default class InputForm extends Component{
   
    constructor(props){
        super(props);
        this.proviceList = [
            "Alberta","British Columbia","Manitoba",
            "New Brunswick","Newfoundland and Labrador","Northwest Territories",
            "Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec",
            "Saskatchewan","Yukon",
        ];

        // we are going to create a state object that will hold the values of the input fields
        this.state = {
            email: "",
            fullName: "",
            address: "",
            address2: "",
            city: "",
            province: "",
            postalCode: "",
            acceptTerms: false,
            submitted: false
        }
    }

    // we are going to make a function that will handle the input
    onValueChange = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior from taking place

        //update the state object
        this.setState({
            [event.target.name]: event.target.value // accesss the name attribute of the input field and then set the value to the value of the input field
        });
    }

    onSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior from taking place
        this.setState({
            submitted: true
        });
        console.log(this.state)
    }

    render (){
        return(
            <main>
                <div className="m-5 p-3" style={formStyling.formStyle}>
                    <h1>Data Entry Form</h1>
                    <Form onSubmit={e => this.onSubmit(e)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" placeholder="Email" onChange={e => this.onValueChange(e)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control name="fullName" placeholder="Full Name" onChange={e => this.onValueChange(e)}/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" name="address" onChange={e => this.onValueChange(e)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" name="address2" onChange={e => this.onValueChange(e)}/>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control name="city" onChange={e => this.onValueChange(e)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridProvince">
                            <Form.Label>Province</Form.Label>
                            <Form.Select defaultValue="Choose Province" name="province" onChange={e => this.onValueChange(e)}>
                                <option key="Choose" value="Province" disabled>Choose Province</option>
                                {
                                    // get the province list and then array.map function to create a list of options
                                    this.proviceList.map(province => { 
                                        return <option key={province} value={province}>{province}</option>
                                    })
                                }
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPostal">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control name="postalCode" onChange={e => this.onValueChange(e)}/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="" id="formGridCheckbox">
                            <Form.Check 
                                type="checkbox" name="acceptTerms" 
                                onChange={e => this.onValueChange(e)} 
                                label="Agree to terms and condition"
                                defaultChecked={this.state.acceptTerms}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>


                {/* This is the output section only shown when submitted is shown */}

            
                {this.state.acceptTerms && this.state.submitted && (
                    <div className="m-5 p-5"style={formStyling.outputStyle}>
                        <h3>Email: <span style={formStyling.span}>{this.state.email}</span></h3>
                        <h3>Full Name: <span style={formStyling.span}>{this.state.fullName}</span></h3>
                        <h3>Address: <span style={formStyling.span}>{this.state.address}</span></h3>
                        <h3>City: <span style={formStyling.span}>{this.state.city}</span></h3>
                        <h3>Province: <span style={formStyling.span}>{this.state.province}</span></h3>
                        <h3>Postal Code: <span style={formStyling.span}>{this.state.postalCode}</span></h3>
                    </div>
                )}
              
            </main>
        );
    } 
        
}





    

