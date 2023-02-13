import Link from 'next/link';
import React, { FC } from 'react';

const Logo: FC = () => {
  return (
    <Link href="/">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="806.87 667.45 530.58 686.57"
        className={'h-6 w-6'}
      >
        {' '}
        <g id="document" transform="matrix(1,0,0,1,1024.0,1024.0)">
          {' '}
          <path
            d="M313.443,165.007 C313.443,74.2798 240.225,0 148.436,0 L-43.0996,0 C-68.0364,0 -85.0146,6.89741 -98.8095,19.6311 C-111.013,32.3648 -201.74,131.581 -201.74,131.581 C-211.29,141.132 -217.127,152.274 -217.127,165.007 C-217.127,177.741 -211.29,188.883 -201.74,198.433 C-201.74,198.433 -112.074,296.589 -98.2789,310.383 C-85.5452,323.117 -67.5058,330.015 -42.569,330.015 L148.436,330.015 C239.164,330.015 313.443,256.265 313.443,165.007 Z "
            fill="#ffd45c"
            fill-opacity="1.00"
          ></path>{' '}
          <path
            d="M217.127,-191.536 C217.127,-282.263 143.908,-356.543 52.1193,-356.543 L-43.0996,-356.543 C-68.0364,-356.543 -85.0146,-349.646 -98.8095,-336.912 C-111.013,-324.178 -201.74,-224.962 -201.74,-224.962 C-211.29,-215.411 -217.127,-204.269 -217.127,-191.536 C-217.127,-178.802 -211.29,-167.66 -201.74,-158.11 C-201.74,-158.11 -112.074,-59.9544 -98.2789,-46.1596 C-85.5452,-33.4259 -67.5058,-26.5285 -42.569,-26.5285 L52.1193,-26.5285 C142.847,-26.5285 217.127,-100.278 217.127,-191.536 Z "
            fill="#ffd45c"
            fill-opacity="1.00"
          ></path>{' '}
        </g>{' '}
      </svg>
    </Link>
  );
};

export default Logo;
