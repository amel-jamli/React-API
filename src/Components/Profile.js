import React from 'react';
import {Card, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Link } from "react-router-dom";

const Profile = ({ listOfUSer, match }) => {
    const user = listOfUSer.find(el => el.id == match.params.id);

    return (
        <div  >
            <Card >
                <CardBody className="profile">
                    <CardTitle tag="h5"><h1>{user.name}</h1></CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Contact:</CardSubtitle>
                    <CardText>
                        email:{user.email} 
                    </CardText>
                    <CardText>
                        Telephone: {user.phone} 
                    </CardText>
                    <CardText>
                        WebSite: {user.website}
                    </CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Adresse:</CardSubtitle>
                    <CardText>
                        {user.address.city}, {user.address.street}, {user.address.suite} - {user.address.zipcode}
                    </CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Company:</CardSubtitle>
                    <CardText>
                        {user.company.name} <br />
                        {user.company.catchPhrase}
                    </CardText>
                    <Link to="/"><Button color="danger">Back </Button></Link>
                </CardBody>
            </Card>
        </div>
    );
}

export default Profile;
