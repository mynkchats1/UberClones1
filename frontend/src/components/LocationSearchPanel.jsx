import React from "react";

const LocationSearchPanel = (props) => {
    console.log(props);

    //sample array for location suggestions
    const locations = [
        "420SEX, Chemchos Chowk, LauroNagar,MP",
        "430SEX, Rajrappa Chowk, LauroNagar,MP",
        "852joj, Gauea Griha, Indraprashta More, UK"
    ]
    return (
        <div>
            {/* Sample Data */}
            {
                locations.map(function (element, idx) {
                    return <div key={idx} onClick={() => {
                        props.setVehiclePanel(true);  //opens Vehicle panel
                        props.setPanelOpen(false)   // closes Location Search panel.(code is present in Home.jsx)
                    }} className="flex gap-4 border-2 p-3 border-white active:border-black rounded-xl items-center my-2 justify-start">
                        <h2 className="bg-[#eee] h-5 flex items-center justify-center w-16 rounded-full"><i className="ri-map-pin-2-fill"></i></h2>
                        <h4 className="font-medium">{element}</h4>
                    </div>
                })
            }
            {/* <div className="flex gap-4 border-2 p-3 border-white active:border-black rounded-xl items-center my-2 justify-start">
                <h2 className="bg-[#eee] h-5 flex items-center justify-center w-16 rounded-full"><i className="ri-map-pin-2-fill"></i></h2>
                <h4 className="font-medium">420SEX, Chemchos Chowk, LauroNagar,MP</h4>
            </div>

            <div className="flex gap-4 border-2 p-3 border-white active:border-black rounded-xl items-center my-2 justify-start">
                <h2 className="bg-[#eee] h-5 flex items-center justify-center w-16 rounded-full"><i className="ri-map-pin-2-fill"></i></h2>
                <h4 className="font-medium">420SEX, Chemchos Chowk, LauroNagar,MP</h4>
            </div> */}
        </div>
    );
};

export default LocationSearchPanel;
