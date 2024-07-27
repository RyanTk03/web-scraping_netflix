import PropTypes from 'prop-types';

// #region component
const propTypes = {
    shows: PropTypes.array
};

const defaultProps = {
    shows: []
};

const Showslist = ({shows}) => {
    return (
        <ul className="app-shows_list">
            {shows.map((show, i) => (
                <li key={i}>
                    {show}
                </li>
            ))}
        </ul>
    );
}

Showslist.propTypes = propTypes;
Showslist.defaultProps = defaultProps;
// #endregion

export default Showslist;
