import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carosel from '../Carosel/Carosel';
import Language from '../Languaage/Language';
import './Home.css';

const Home = () => {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setLanguages(data))
    }, [])

    return (
        <div>
            <div className='mt-4'>
                <Carosel></Carosel>
            </div>
            <div class="row row-cols-1 row-cols-md-2">
                {
                    languages.map(language => <Language key={language.id} language={language}></Language>)
                }
            </div>
        </div>
    );
};

export default Home;