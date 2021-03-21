import React from 'react';
import './Header.css';
import { Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App';




const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {

        firebase.auth().signOut().then(() => {
            let signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
                success: false
            }
            
            setLoggedInUser(signedOutUser);
        })
            .catch((error) => {

            });
        }

    return (
        <div>
        
        < Navbar bg="dark" text="primary" expand="lg" >
        <Navbar.Brand href="/home"><h2 className="text-primary bg-dark rounded p-2">City Riders</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="nav justify-content-end">
        <Link to ="/home" className="nav-link">Home</Link>
        <Link to ="/destination" className="nav-link">Destination</Link>
        <Link to ="/blog" className="nav-link">Blog</Link>
        <Link to ="/contact" className="nav-link">Contact</Link>
        <Link to="/login" className="nav-link text-blue"onClick={handleSignOut}>{loggedInUser.email?'Logout':'Login'}</Link>
        <Link to="#" className="nav-link active text-blue">{loggedInUser.displayName||loggedInUser.email}</Link>
            </Navbar.Collapse>
            </Navbar>
      
        </div>
    );
};

export default Header;