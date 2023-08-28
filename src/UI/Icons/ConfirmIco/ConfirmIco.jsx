import PropTypes from 'prop-types';

export function ConfirmIco({ width, fill, fill2 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.43 122.88"
      width={width}
    >
      <path
        d="M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0Z"
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M42.37,51.68,53.26,62,79,35.87c2.13-2.16,3.47-3.9,6.1-1.19l8.53,8.74c2.8,2.77,2.66,4.4,0,7L58.14,85.34c-5.58,5.46-4.61,5.79-10.26.19L28,65.77c-1.18-1.28-1.05-2.57.24-3.84l9.9-10.27c1.5-1.58,2.7-1.44,4.22,0Z"
        fill={fill2}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

ConfirmIco.propTypes = {
  width: PropTypes.number,
  fill: PropTypes.string,
  fill2: PropTypes.string,
};
