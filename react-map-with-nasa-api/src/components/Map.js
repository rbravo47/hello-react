import GoogleMapReact from 'google-map-react';

export default function Map({ center, zoom }) {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
            >

            </GoogleMapReact>
        </div >
    )
};

Map.defaultProps = {
    center: {
        lat: 13.0003076,
        lng: 96.992706
    },
    zoom: 6
}