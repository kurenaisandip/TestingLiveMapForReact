// // App.tsx
// import { useState, useEffect } from "react";
// import "./App.css";
// import Map from "./map/Map";
// import OpenStreetMap from "./map/OpenStreetMap.tsx";
//
// function App() {
//
//     const [ city, setCity ] = useState<string>();
//     const [ location, setLocation ] = useState({
//         latitude: 0,
//         longitude:0,
//         display_name: "",
//     });
//
//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition(
//             getCurrentCityName,
//         );
//     }, []);
//
// //reverse geocoding search
//     function getCurrentCityName(position : any) {
//
//         const url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='
//             + position.coords.latitude + '&lon='
//             + position.coords.longitude ;
//
//         fetch(url, {
//             method: "GET",
//             mode: "cors",
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 setLocation({ latitude: position.coords.latitude,
//                     longitude: position.coords.longitude,
//                     display_name:`${ data.address.city }, ${ data.address.country }` })
//             });
//     }
//
//     //search for city coordinated based on form data
//     function submitHandler(e:any) {
//         e.preventDefault();
//         const url = `https://nominatim.openstreetmap.org/search?city='${city}'&format=json&limit=1`;
//
//         fetch(url, {
//             method: "GET",
//             mode: "cors",
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     return response.json();
//                 }
//             })
//             .then((data) => {
//                 setLocation({
//                     latitude: data[0].lat,
//                     longitude: data[0].lon,
//                     display_name: data[0].display_name,
//                 })
//             }).catch(() => alert("Please Check your input"));
//     }
//
//     const handleChange = (event:any) => {
//         setCity(event.target.value);
//     };
//
//     return (
//         <div className='App'>
//             <OpenStreetMap/>
//
//             {/*<section className='map-container'>*/}
//             {/*    <Map location = { location }/>*/}
//             {/*</section>*/}
//
//             {/*<section className="form-container">*/}
//             {/*    <form>*/}
//             {/*        <label>Enter the city:</label>*/}
//             {/*        <input*/}
//             {/*            placeholder="Los Angeles"*/}
//             {/*            type="text"*/}
//             {/*            value={city}*/}
//             {/*            onChange={ handleChange }*/}
//             {/*            id="city"*/}
//             {/*        />*/}
//
//             {/*        <button onClick={ ( e )=> submitHandler( e ) }>Search</button>*/}
//             {/*    </form>*/}
//             {/*</section>*/}
//         </div>
//     )
// }

// export default App;

// ------------------------------------------------------------------------------------
// import React from 'react';
// import RealTimeMap from './map/RealTimeMap';
//
// const App: React.FC = () => {
//     return (
//         <div>
//             <h1>Real-Time Map</h1>
//             <RealTimeMap />
//         </div>
//     );
// };
//
// export default App;

// --------------------------------------------------------------------------------------

// App.tsx

import "./App.css";

import OpenStreetMap from "./map/OpenStreetMap.tsx";

function App() {

    return (
        <div className='App'>
            <OpenStreetMap/>
        </div>
    )
}

export default App;
