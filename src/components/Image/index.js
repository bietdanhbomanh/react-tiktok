import images from '~/assets/images';
function Image({ errorImg = images.noImg, ...props }) {
    function handelError(props) {
        props.target.src = errorImg;
    }
    // eslint-disable-next-line
    return <img onError={handelError} {...props} />;
}

export default Image;
