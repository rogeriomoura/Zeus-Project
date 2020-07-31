import React from 'react';
import ItemsContent from './ItemContent';
import PageNotFound from './PageNotFound';

const Item = ({ match }) => {
    const itemId = match.params.id;
    const item = ItemsContent.find(item => item.id === itemId);

    if(!itemId) return <PageNotFound/>

    return (
        <>
            <div class="container">
                <div class="card">
                    <h1>{item.name}</h1>
                    <img class="img" alt="" src={item.imageUrl} />
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                </div>
            </div>
        </>
    );
};


export default Item;