import "./SideButton.css";
import rightArrow from "../../assets/right-arrow.png"

function SideButton({name, hasChildren=false, opened}){
    return(
        <div className="ButtonContainer">
            <h2>{name}</h2>
            {hasChildren && <img src={rightArrow} alt='fleche' id={opened ? "arrow" : "rotate-arrow"} />}
        </div>
    )
}

export default SideButton;