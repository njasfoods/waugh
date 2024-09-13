const Logo = ({width,height,color}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 2674.44 1578.53"
      className={`text-secondary w-[${width}] h-[${height}]`} // Set width and height
      fill={color}
    >
      <g>
        <g id="WHITE">
          <text fill={color} fontFamily="LuzSans-Medium, sans-serif" fontSize="500" fontWeight="600" transform="translate(270.66 771.24)">
            <tspan x="0" y="0">clar</tspan>
            <tspan x="859.48" y="0">k</tspan>
            <tspan x="1113.98" y="0">e</tspan>
          </text>
          <text fill={color} fontFamily="LuzSans-Medium, sans-serif" fontSize="500" fontWeight="600" transform="translate(721.69 1051.44)">
            <tspan x="0" y="0">w</tspan>
            <tspan x="395.5" y="0">augh</tspan>
          </text>
          <text fill={color} fontFamily="LuzSans-Medium, sans-serif" fontSize="500" fontWeight="600" transform="translate(1673.11 768.75)">
            <tspan x="0" y="0">&amp;</tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}
export default Logo