import React from 'react'
import GoogleMap from 'google-map-react'

const GOOGLE_API_KEY = 'AIzaSyBGVw2VHwPREeQ-eWdWNsZlhSWur5GN6KY' 

export default (props) => {
  return (
    <GoogleMap
      bootstrapURLKeys={{key: GOOGLE_API_KEY}}
      zoom={12}
      center={[props.lat, props.lon]}>
    </GoogleMap>
  )
}