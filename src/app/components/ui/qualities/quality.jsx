import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";
const Quality = ({ id }) => {
    const { getQualities } = useQualities();
    // const { _id, color, name } = getQualities(id);
    const quals = getQualities(id);
    return (
        <>
            {quals.map((el) => (
                <span className={"badge m-1 bg-" + el.color} key={el._id}>
                    {el.name}
                </span>
            ))}
        </>
    );
};
Quality.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    id: PropTypes.array.isRequired
};

export default Quality;
