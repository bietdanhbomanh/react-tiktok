import images from '~/assets/images';
import PropTypes from 'prop-types';
function Image({ errorImg = images.noImg, ...props }) {
    function handelError(props) {
        props.target.src = errorImg;
    }
    // eslint-disable-next-line
    return <img onError={handelError} {...props} />;
}

Image.propTypes = {
    errorImg: PropTypes.string,
};

export default Image;
