import PropTypes from 'prop-types';

export function BasketIco({ width, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.43 122.88"
      width={width}
    >
      <path
        d="M53.69 103.92c5.23 0 9.48 4.25 9.48 9.48 0 5.24-4.25 9.48-9.48 9.48-5.24 0-9.48-4.24-9.48-9.48s4.24-9.48 9.48-9.48zm34.77-64.08a4.92 4.92 0 0 1 4.97 4.94c0 2.75-2.24 5-4.99 5.02l-12.06.1-.09 12.08c-.02 2.73-2.27 4.94-5.02 4.93-2.75 0-4.96-2.22-4.94-4.95l.09-12-12.02.09a4.92 4.92 0 0 1-4.97-4.94c.01-2.75 2.24-5 5-5.02L66.49 40l.09-12.08c.02-2.73 2.27-4.94 5.02-4.94 2.75 0 4.96 2.22 4.94 4.95l-.08 12 12-.09zM22.63 12.6h93.3c6.1 0 5.77 2.47 5.24 8.77l-3.47 44.24c-.59 7.05-.09 5.34-7.56 6.41l-68.62 8.73 3.63 10.53h73.91c1 3.74 2.36 9.83 3.36 14h-12.28l-1.18-4.26H49.9c-13.55-.23-12.19 3.44-15.44-8.27L11.18 8.11H0V0h19.61c.91 3.41 2.17 9.15 3.02 12.6zm70.16 91.32c5.23 0 9.48 4.25 9.48 9.48 0 5.24-4.25 9.48-9.48 9.48-5.24 0-9.48-4.24-9.48-9.48s4.25-9.48 9.48-9.48z"
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

BasketIco.propTypes = {
  width: PropTypes.number,
  fill: PropTypes.string,
};