import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class MapPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            height: 400,
            tileServer: "http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png"
        }
    }

    calculateSize = () => {
        const windowHeight = window.innerHeight;
        this.setState({height: windowHeight - 54})
    };

    componentDidMount(){
        $(window).on('resize', this.calculateSize);
        this.calculateSize()
    }

    componentWillUnmount(){
        $(window).off('resize', this.calculateSize)
    }

    handleSubmit(e){
        e.preventDefault();

        this.setState({tileServer: ReactDOM.findDOMNode(this.refs.tileUrl).value})
    }

    render() {
        const {height, tileServer} = this.state;

        return (
            <div>
                <div className="header text-center">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <input type="text" placeholder="Tile server url" defaultValue={tileServer} ref="tileUrl" style={{width: '70%'}}/>
                        <button type="submit" style={{width: '10%', minWidth: 100}}>Apply</button>
                    </form>
                </div>

                <div className="map">
                    <Map center={[51.507351, -0.127758]} zoom={13} style={{height: height}}>
                        <TileLayer
                            url={tileServer}
                        />
                    </Map>
                </div>
            </div>
        )
    }
}