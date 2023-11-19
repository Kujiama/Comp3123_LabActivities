import axios from "axios";
import React,{Component} from "react";
import Person from "./Person"


export default class PersonList extends Component {

    constructor(){
        super();
        this.state = {
            persons: []
        }
    }


    async componentDidMount(){

        try{
            const userData = await axios.get("https://randomuser.me/api/?results=10")
            console.log(userData.data.results); 
            this.setState({persons: userData.data.results}) // this will update the state of the component and will re-render the component

        }catch(error){
            console.log(error);
        }
        
    }

    render() {
        return (

            <div>
                {
                    this.state.persons.map(person => {
                        return <Person key={person.login.uuid} data={person} />
                    })
                }
            </div>
            
            
        );
    }
}