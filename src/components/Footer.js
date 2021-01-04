import { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

class Footer extends Component{

    render(){
        return (
        <>

        <Navbar fixed="bottom"  bg="dark" className="footer"> 
          <Container>
          Copywrite by Ig BUYOYA IBRAHIM
          </Container>
        </Navbar>
        </>
        );
    }
}


export {Footer};