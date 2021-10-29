import './UserCard.css'

import React from 'react'

const UserCard = ({ user }) => {
    return (
        <div className='container'>
            <div className='user-card'>
            {/* //  USER AVTAR */}
                <div className='avatar-container'>
                    <img src={ user.userLink } alt="Avatar" className='avatar' />
                </div>
            {/* //  USER DETAILS */}
                <div className='user-details'>
                    <h2>{ user.name }</h2>
                    <p><strong>Email:</strong> { user.email }</p>
                    <p><strong>Phone:</strong> { user.phone }</p>
                    <p><strong>Company:</strong> { user.company.name }</p>
                    <p><strong>Website:</strong> { user.website }</p>
                    <p><strong>Address:</strong> { user.address.street } { user.address.suite } { user.address.city } { user.address.zipcode }</p>
                </div>

            </div>
        </div>
    );
}

export default UserCard

