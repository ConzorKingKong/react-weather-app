import React from 'react'
// import {GoogleMapLoader, GoogleMap} from 'react-google-maps'
import GoogleMap from 'google-map-react'

const GOOGLE_API_KEY = 'AIzaSyA-lkF4xeNb7fY_pQTsFIApa6l0f-TZMQs' 

// export default (props) => {
//   return (
//     <GoogleMapLoader
//     containerElement={ <div style={{height: '100%'}} />}
//     googleMapElement={
//       <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
//     }
//     />
//   )
// }

export default (props) => {
  return (
    <GoogleMap
      apiKey={GOOGLE_API_KEY}
      bootstrapURLKeys={{key: GOOGLE_API_KEY}}
      zoom={12}
      center={[props.lat, props.lon]}>
    </GoogleMap>
  )
}