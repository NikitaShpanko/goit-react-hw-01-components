import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      <span
        className={`${css.status}${isOnline ? ` ${css.isOnline}` : ""}`}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
