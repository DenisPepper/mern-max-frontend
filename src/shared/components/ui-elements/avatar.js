import './avatar.css';

const Avatar = (props) => {
  const {className, style, image, alt, width} = props;

  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
