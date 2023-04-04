import photo from "./Cover_Image.png"
import bg from "./Rectangle_3.png"
export function Photo(){
    return(
        <div className="photo_div">
            <img src={photo} alt="teniss_img" className="photo"/>
            <img src={bg} alt="bg" className="photo_bg"/>
        </div>
    )
}