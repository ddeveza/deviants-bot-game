export const TwitterLeftSVG = ({ connected }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="127"
      height="251"
      viewBox="0 0 127 251"
      fill="none"
    >
      <path
        d="M67.1895 19.9116L102.752 19.9116L25.0589 108.007L116.458 227.886H44.8933L-11.1589 155.18L-75.2953 227.886H-110.879L-27.7789 133.657L-115.458 19.9116L-42.0768 19.9116L8.58945 86.3673L67.1895 19.9116ZM54.7083 206.768H74.4137L-52.7841 39.9198H-73.93L54.7083 206.768Z"
        fill={connected ? "white" : "black"}
        fillOpacity="0.2"
      />
    </svg>
  );
};

export const TwitterRightSVG = ({ connected }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="223"
      height="317"
      viewBox="0 0 223 317"
      fill="none"
    >
      <path
        d="M276.693 0.303711H330.388L213.081 134.378L351.083 316.822H243.029L158.397 206.17L61.5582 316.822H7.83121L133.302 173.415L0.916504 0.303711H111.714L188.214 101.443L276.693 0.303711ZM257.848 284.683H287.601L95.5474 30.7544H63.6196L257.848 284.683Z"
        fill={connected ? "white" : "black"}
        fillOpacity="0.2"
      />
    </svg>
  );
};
