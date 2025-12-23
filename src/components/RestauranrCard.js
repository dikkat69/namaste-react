import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo} = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + resData.info.cloudinaryImageId }/>
      <h3>{name}</h3>
      <h4>Best in {cuisines.join(", ")}</h4>
      <h4>{costForTwo} for two</h4>
      <h4>{avgRating}⭐</h4>
    </div>
  );
};

export default RestaurantCard;