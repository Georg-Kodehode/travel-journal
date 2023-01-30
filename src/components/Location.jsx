export default function Location(props) {
  return (
    <div className="location-wrapper">
      <div
        className="location-image-div"
        style={{
          backgroundImage: `url(${props.item.image})`,
          backgroundSize: "auto 168px",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="location-info">
        <div className="location-map">
          <div className="location-dot-wrapper">
            <svg
              width={"7px"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path
                fill="#F55A5A"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"
              />
            </svg>
            <p className="location-country">{props.item.location}</p>
          </div>
          <a
            href={props.item.googleMapsLink}
            className="google-maps-link"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="location-title">{props.item.title}</h2>
        <p className="location-date">{`${props.item.startDate} - ${props.item.endDate}`}</p>
        <p className="location-description">{props.item.description}</p>
      </div>
    </div>
  );
}
