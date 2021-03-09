import React from 'react'
import { Button, Navbar, Form, Nav, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function UserCard({ user }) {
    return (
        <div className="cards">
            <div className="our-team">
                <div className="picture">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHt4czE-CTKWzk1gCGHmJXFOOV-6ljdczOg&usqp=CAU"/>
                </div>
                <div className="team-content">
                    <h3 className="name">{user.name}r</h3>
                    <h4 className="title">{user.username}</h4>
                </div>
                <ul className="social">
                    <li><Link className="text-light" to={`/profile/${user.id}`}><Button id="btn-pro" variant="success">Pofile</Button>{' '}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default UserCard
