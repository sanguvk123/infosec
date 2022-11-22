import {useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './assignpage.css';


export default function Signout() {
    const navigate = useNavigate();

    const navigateToLogOut = () => {
        localStorage.removeItem("User_id");
        localStorage.removeItem("User_unit");
        navigate('/');



    };

    return (
        <div>
            <Button onClick={(evt) => navigateToLogOut()} className="submitbutton">
                Logout
            </Button>
        </div>
    );
}