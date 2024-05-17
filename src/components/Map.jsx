import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const Map = () => {

    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const center = {
        lat: 51.508742,
        lng: -0.120850
    };

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
            >

            </GoogleMap>
        </LoadScript>

    );
};

export default Map;