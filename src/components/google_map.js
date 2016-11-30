import React from 'react'
import GoogleMap from 'google-map-react'

const GOOGLE_API_KEY = 'AIzaSyA-lkF4xeNb7fY_pQTsFIApa6l0f-TZMQs' 

export default (props) => {
  return (
    <GoogleMap
      bootstrapURLKeys={{key: GOOGLE_API_KEY}}
      zoom={12}
      center={[props.lat, props.lon]}>
    </GoogleMap>
  )
}