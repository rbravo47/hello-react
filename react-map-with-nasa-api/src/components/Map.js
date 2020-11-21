import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

export default function Map({ center, zoom, eventData }) {


    console.log(eventData)


    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <LocationMarker lat={center.lat} lng={center.lng} onClick={() => { }} />
            </GoogleMapReact>
        </div >
    )
};

Map.defaultProps = {
    // middle of thailand
    center: {
        lat: 15.8700,
        lng: 100.9925
    },
    zoom: 6
}