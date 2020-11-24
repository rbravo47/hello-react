import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

const CATEGORY_WILD_FIRE = 8;
export default function Map({ center, zoom, eventData }) {
    const markers = eventData?.filter((evt) => evt.categories[0].id === CATEGORY_WILD_FIRE).map(evt => <LocationMarker lat={evt.geometries[0].coordinates[1]} lng={evt.geometries[0].coordinates[0]} onClick={() => { }} />)
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
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