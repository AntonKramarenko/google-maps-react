import React, { useCallback, useRef } from 'react'
import { GoogleMap } from '@react-google-maps/api';
import s from './Map.module.css'
import { defaultTheme } from './Theme';


const containerStyle = {
    width: '100%',
    height: '100vh'
  };
  
const defaultOptions ={
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons:false,
    keyboardShortcuts: false,
    scrollwheel:false,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    styles: defaultTheme
  }

export const Map = ({center}) => {

    const mapRef = useRef(undefined)

    const onLoad = useCallback(function callback(map) {
        mapRef.current = map
      }, [])
    
      const onUnmount = useCallback(function callback(map) {
        mapRef.current = undefined
      }, [])



  return (
    <div className={s.contaiter}>
         <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
      </GoogleMap>
    </div>
  )
}
