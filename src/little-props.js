import PropTypes from 'prop-types';

/* здесь будут проверятся специфические и малозначимые props, которые применяются не везде*/

export const littleProps = PropTypes.shape({
    icon: PropTypes.elementType,                                       
    totalNumber: PropTypes.number,
    nameRu: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string
})