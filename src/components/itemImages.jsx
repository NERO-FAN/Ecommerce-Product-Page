import { useSelector, useDispatch } from "react-redux";
import { changeSelected } from "../app/store";

import "./itemImages.scss";

const ItemImages = () => {

    const thumbnailImages = useSelector(state => state.selectImage.thumbnailImages);
    const selectedThumb = useSelector(state => state.selectImage.selectedImage);
    const dispatch = useDispatch();

    const changeSelectedThumb = (e) => {
        const imageID = e.currentTarget.getAttribute("imageid");
        dispatch(changeSelected(imageID))
    }

    return (
        <div className="left-body">
            <div className="selectedImage">
                <img src={selectedThumb} alt="product-full-size-image"/>
            </div>
            <ul className="thumbnail-images">{
                thumbnailImages.map((curr, index) =>
                    <li imageid={curr.id} className="thumbnail" key={index} onClick={changeSelectedThumb}>
                        <img src={curr.thumb} alt="product thumbnail image"/>
                    </li>
                )
            }
            </ul>
        </div>
    );
};

export default ItemImages;