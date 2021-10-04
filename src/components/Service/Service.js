import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LanguageDetail from '../LanguageDetail/LanguageDetail';

const Service = () => {
    const [languageDetails, setLanguageDetails] = useState([]);

    useEffect(() => {
        fetch('./servicedata.json')
            .then(res => res.json())
            .then(data => setLanguageDetails(data))
    }, []);

    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                languageDetails.map(detail => <LanguageDetail key={detail.id} detail={detail}></LanguageDetail>)
            }
        </div>
    );
};

export default Service;