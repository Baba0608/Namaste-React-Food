import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { resObj } = props;

  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resObj.info;
  return (
    <div className="card-image-details">
      <div className="card" id="card">
        <div className="food-img" id="food-img">
          <img
            className="food-item-img"
            src={CDN_URL + cloudinaryImageId}
          ></img>
        </div>

        <div className="details" id="details">
          <h2>{name}</h2>
          <h2>{cuisines.join(", ")}</h2>
          <h2>{avgRating} stars</h2>
          <h2>{costForTwo}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
