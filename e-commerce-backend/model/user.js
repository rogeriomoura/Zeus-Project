import React from 'react';
import userList from './userList'
import PageNotFound from './PageNotFound';

const User = ({ match }) => {
    const itemId = match.params.id;
    const user = ItemsContent.find(user => user.id === itemId);
    
    if(!itemId) return <PageNotFound/>

    return (
        <> 
        
        
        
        
        </>
    );
};


export default User;
