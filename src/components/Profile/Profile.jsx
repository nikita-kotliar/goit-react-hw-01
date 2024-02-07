import "../App.css";
import "./Profile.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profileCard">
      <div className="main-card-div">
        <img className="UserImage" src={image} alt="User avatar" />
        <p className="name">{name}</p>
        <p className="text">@{tag}</p>
        <p className="text">{location}</p>
      </div>
      <ul className="card-info-user">
        <li className="card-info-li">
          <span>Followers</span>
          <span className="info">{stats.followers}</span>
        </li>
        <li className="card-info-li">
          <span>Views</span>
          <span className="info">{stats.views}</span>
        </li>
        <li className="card-info-li">
          <span>Likes</span>
          <span className="info">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
