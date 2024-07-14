import react from "react";

export default function Boxes(props) {
    return (
        <div className="boxes">
            <div className="images" id={props.id}></div>
            <div className="imgrelatedinfo">{props.title}<br />{props.text}
                <br />
                <div className="knoww">
                    <a href={props.link} className='know-more'>Know More</a></div>
            </div>
        </div>
    );
}