import "./SubSideButton.css";
import square from "../../assets/stop.png";

function SubSideButton ({ name, url} ) {
    return(
    <div className="SubSideContainer">
        <a className="lien" href={url}>
            <img src={square} alt='carre' id="square" />
            <span className="SubSideButtonText"> {name} </span>
        </a>
    </div>
    )
}

export default SubSideButton;
