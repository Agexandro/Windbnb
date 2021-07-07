import "./filter.css";

function SearchBar() {
    const show = () => {
        alert("Hello");
    }
    return (
            <div className="filter" onClick={show}>
                <div className="location"><input type="text" placeholder="Location" readOnly /></div>
                <div className="guests"><input type="text" placeholder="Guests" readOnly /></div>
                <span className="material-icons search-icon">search</span>
            </div>
    );
}

export default SearchBar;