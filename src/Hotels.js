function View({props}) {
    return (
        <div className="card">
            <img src={props.photo} alt={props.title} />
            <div className="desc">
                {props.superHost? <span className="sh"><p>SUPER HOST</p></span>:null}
                <span className="apartments">{props.type} 
                {props.superHost && props.beds != null? <span> . {props.beds} beds</span> : null}
                </span>
                <span className="rating">{props.rating}</span>
            </div>
            <p className="title">{props.title}</p>
        </div>
    );
}

export default View;