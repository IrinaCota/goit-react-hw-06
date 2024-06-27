import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import PropTypes from "prop-types";

export default function Contact({ name, number, id, onContactDelete }) {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          onContactDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onContactDelete: PropTypes.func,
};
