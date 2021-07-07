import "./courtine.css";

function Courtine() {
    return (
        <div className="smoke">
            <div className="courtine">
                <div className="location"><label>location</label><input type="text" placeholder="Location" readOnly /></div>
                <div className="guests"><label>guests</label><input type="text" placeholder="Add guests" readOnly /></div>
                <div>
                    <a className="search-button">
                        <span className="material-icons search-icon">search</span>Search
                </a>
                </div>
            </div>
        </div>
    );
}

export default Courtine;