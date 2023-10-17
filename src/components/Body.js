import Card from "./Card";
import restaurants from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container" id="body-container">
      <div className="search" id="search">
        <div className="input-container">
          <input type="text" className="input" id="input"></input>
        </div>

        <div className="btn-container">
          <button className="searchbtn">Search</button>
        </div>
      </div>

      <div className="card-container" id="card-container">
        {restaurants.map((restaurant) => {
          return <Card key={restaurant.info.id} resObj={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
