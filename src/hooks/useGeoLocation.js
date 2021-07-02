import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';


//console.log('getloc');
const useGeoLocation = () => {
    //console.log('getloc');
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },

    });
    //console.log('getloc');
    const onSuccess = (location) => {
        setLocation({
            loaded: true,
          coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
                
            },
            
        });

        //console.log('getloc');
      /*   console.log(location.coords.latitude); 
        console.log(location.coords.longitude);
        console.log(typeof(location.coords.longitude)); */
       

    };

    
    const onError = (error) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });
    };

    useEffect(() => {
        //console.log('getloc');
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
};

export default useGeoLocation;