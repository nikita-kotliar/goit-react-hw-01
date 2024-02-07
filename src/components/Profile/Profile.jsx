import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div className={css.main_card_div}>
        <img className={css.UserImage} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.card_info_user}>
        <li className={css.card_info_li}>
          <span>Followers</span>
          <span className={css.info}>{stats.followers}</span>
        </li>
        <li className={css.card_info_li}>
          <span>Views</span>
          <span className={css.info}>{stats.views}</span>
        </li>
        <li className={css.card_info_li}>
          <span>Likes</span>
          <span className={css.info}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
