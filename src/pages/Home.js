import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <h1>Bienvenue sur la messagerie de Klapeers</h1>
            <div className='ligne'>
                <hr/>
            </div>
        </div>

    );
};

export default Home;