import PropTypes from 'prop-types'
import css from './profile.module.css'

export const Profile = ({username, tag, avatar, location, stats}) => {
  return (
 <div className={css.profile}>
  <div className={css.description}>
    <img
          src={avatar}
          alt={username}
          className={css.avatar}
          width={200}
          height={200}
    />
        <p className={css.name}>{username }</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
          <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
          <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
          <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};


Profile.propTypes = {
  username:PropTypes.string,
  tag: PropTypes.string,
  avatar: PropTypes.string,
  location: PropTypes.string,
  stats:PropTypes.object,
}


