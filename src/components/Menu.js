import { Component } from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { HomeView, LoginView, RegisterView, ProductVieuw , ElectriciteView, PlomberieView, MaconnerieView, QuincallerieView} from "./pages";

class Menu extends Component {
  
  render() {

    return (
      <>
        <Container>
          <Switch>
            <Route exact path="/">
              <HomeView/>
            </Route>
            <Route path="/Product">
              <ProductVieuw/> 
            </Route>
            <Route path="/Register">
              <RegisterView/>
              </Route>
            <Route path="/Login">
              <LoginView/> 
            </Route>
            <Route path="/Electricite">
              <ElectriciteView/> 
            </Route>
            <Route path="/Plomberie">
              <PlomberieView/> 
            </Route>
            <Route path="/Maconnerie">
              <MaconnerieView/> 
            </Route>
            <Route path="/Quincallerie">
              <QuincallerieView/> 
            </Route>
           
            {/* <Route path="/CategoryProducts/:id">Category Products</Route>
            <Route path="/ProductDetail/:id">Products Detail</Route>

            <Route path="/UserAccount">User Account</Route>
            <Route path="/UserCart">User Cart</Route>
            <Route path="/Logout">Logout</Route>

            <Route path="/CategoryManage">Categories Manager</Route>
            <Route path="/ProductManage">Products Manager</Route>
            <Route path="/CommandManage">Commands Manager</Route>
            <Route path="/CustomerManage">Customers Manager</Route>
            <Route path="/UserManage">Users Manager</Route>
            <Route path="/Logout">Logout</Route> */}

          </Switch>
        </Container>
      </>
    );
  }
}

export { Menu };
