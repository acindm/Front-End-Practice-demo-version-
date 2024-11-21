export default function Entry(props){
    return(
        <div className="card">
            <div>
                <img className="main-img" 
                src={props.img.src} 
                alt={props.img.alt} />
            </div> 
            <div className="info-container">
                <div className="location-container">
                    <img 
                    className="marker-icon" 
                    src="./src/assets/images/marker.png" 
                    alt="marker-icon" />
                    <span>{props.country}</span>
                    <a 
                    target="_blank"
                    href={props.googleMapsLink}>
                    View On Google Map
                    </a>
               </div>
                    <h2>{props.title}</h2>
                <div className="text-container"> 
                    <p className="trip-dates">{props.dates}</p>
                    <p className="description">{props.text}</p>
                </div>
            </div>
        </div>
    )
}