import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';

class Maps_google extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }

    onMarkerClick(props, marker, e) {
        alert('You clicked in this marker');
    }
    /**
    * Activate the street view
    */
    activateStreetView = (position) => {
        const mapObj = this.mapRef.map.getStreetView();
        mapObj.setPov({ heading: 34, pitch: 10 });
        mapObj.setPosition(position);
        mapObj.setVisible(true);
    }

    render() {
        return (
            <AUX>
                <div id="gmaps-markers" className="gmaps">
                    <Map google={this.props.google} zoom={14}
                         style={{
                             height: 300,
                             width: 720
                         }}
                         google={this.props.google} >

                        <InfoWindow>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>

                </div>
            </AUX>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCtSAR45TFgZjOs4nBFFZnII-6mMHLfSYI",
    v: "3"
})(Maps_google);
