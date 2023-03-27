import React,{useCallback,useState} from 'react'

import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';


const Mapa = () => {

  const containerStyle = {
    width: '100%',
    height: '100%',
  };
  
  const center = {
    lat: 6.1022905,
    lng: -75.1607177
  };

  const position = {
    lat: 6.1022905,
    lng: -75.1607177
  }
  
  const [map, setMap] = useState(null)
  
  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])
    
  const onLoad1 = marker => {
    console.log('marker: ', marker)
  }

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBtN7wjlK0Zq1zdFBMjfq4A1pGIffYBfpA"
  })

  return isLoaded ? (

    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}>

       <Marker
          onLoad={onLoad1}
          position={position}
        />

    </GoogleMap>

  ) : <></>
}

export default Mapa
