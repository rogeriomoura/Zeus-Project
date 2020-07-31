import React from 'react';
import PageNotFound from './PageNotFound';
import ItemsContent from './ItemContent';
import ItemCard from '../components/ItemCard';
import { Grid } from '../styles/NavBarAndCardStyles';

const HomePage = () => {

    if(ItemsContent.length === 0) return <PageNotFound/>
    
    return (
        <>
            <Grid>
                {ItemsContent.map((item, key) => (
                    <>
                        <ItemCard 
                            key={key}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            id={item.id}
                        />
                    </>
                ))}
            </Grid>
        </>
    );
};

export default HomePage;