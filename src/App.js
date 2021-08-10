import './App.css';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet';

function App() {
  return (
    <div className="App">
      <h1>Maps in ReactJS</h1>	

      <div className="Map">
      	<MapContainer className="Map-container" center={[0, 0]} zoom={5}>
      		<TileLayer 
      			attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      			url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
      		/>
           <Marker position={[0,0]}>
            <Popup>
             A pretty CSS3 popup. <br /> Easily customizable.
           </Popup>
         </Marker>
      	</MapContainer>
      </div>
    </div>
  );
}

export default App;
