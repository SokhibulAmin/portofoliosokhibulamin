const mapOffsets = [-410, 0, 410, 820];

export default function DesktopTechBackdrop() {
  return (
    <svg
      className="desktop-tech-backdrop"
      viewBox="0 0 1200 820"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="desktop-earth-ocean" cx="30%" cy="24%" r="82%">
          <stop offset="0%" stopColor="#38e6ce" stopOpacity=".52" />
          <stop offset="52%" stopColor="#087f91" stopOpacity=".66" />
          <stop offset="100%" stopColor="#07131f" stopOpacity=".96" />
        </radialGradient>
        <linearGradient id="desktop-earth-shade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#06111b" stopOpacity=".7" />
          <stop offset="48%" stopColor="#06111b" stopOpacity="0" />
          <stop offset="100%" stopColor="#06111b" stopOpacity=".62" />
        </linearGradient>
        <clipPath id="desktop-earth-clip">
          <circle cx="500" cy="410" r="178" />
        </clipPath>
        <g id="desktop-earth-map">
          <path d="m22 28 24-19 39 5 31 24-12 25-22 6-5 23-22 19-17-15-23-31z" />
          <path d="m106 113 27 7 19 25-6 31-13 25-11 38-18 29-12-31 7-34-13-31 4-33z" />
          <path d="m190 37 25-17 26 7 20-12 25 12 23-5 31 19 22 5 15 21-25 16-25-7-21 22-29-7-20 18-27-12-20 9-20-23-22-5-4-26z" />
          <path d="m228 108 28-9 27 17 5 29-16 29-18 31-18-13-11-31-18-24z" />
          <path d="m322 218 19 5 16 17-11 18-22-5-11-15z" />
          <path d="m166 73 11-7 9 11-7 15-11-4z" />
        </g>
      </defs>

      <g className="desktop-tech-lines">
        <path d="M0 180h184v70h104M1200 180h-142v78h-95M0 650h166v-62h133M1200 642h-157v-57H918" />
        <path d="M78 320h90v58h86M1120 330h-82v64h-96M94 520h79v-46h72M1115 515h-78v-44h-78" />
        <circle cx="184" cy="180" r="5" />
        <circle cx="1058" cy="180" r="5" />
        <circle cx="166" cy="650" r="5" />
        <circle cx="1043" cy="642" r="5" />
        <rect x="82" y="376" width="36" height="36" rx="5" />
        <rect x="1083" y="390" width="32" height="32" rx="5" />
        <path d="M90 367v-14m10 14v-14m10 14v-14m-20 59v14m10-14v14m10-14v14m967-54v-14m10 14v-14m10 14v-14m-20 54v14m10-14v14m10-14v14" />
      </g>

      <g transform="translate(0 -75)">
        <g className="desktop-globe-orbit">
          <ellipse cx="500" cy="410" rx="264" ry="74" transform="rotate(-18 500 410)" />
          <circle cx="751" cy="326" r="5" />
        </g>
        <circle className="desktop-globe-halo" cx="500" cy="410" r="204" />
        <circle className="desktop-globe-ocean" cx="500" cy="410" r="178" />
        <g clipPath="url(#desktop-earth-clip)">
          <g className="desktop-globe-map-roll">
            {mapOffsets.map((offset) => (
              <use href="#desktop-earth-map" key={offset} x={offset} y="260" />
            ))}
          </g>
          <ellipse className="desktop-globe-longitude" cx="500" cy="410" rx="84" ry="176" />
          <ellipse className="desktop-globe-longitude desktop-globe-longitude-narrow" cx="500" cy="410" rx="37" ry="176" />
          <path className="desktop-globe-latitude" d="M324 410h352M342 348q158 70 316 0M342 472q158-70 316 0" />
          <circle className="desktop-globe-shade" cx="500" cy="410" r="178" />
        </g>
        <circle className="desktop-globe-outline" cx="500" cy="410" r="178" />
        <path className="desktop-globe-axis" d="m420 194 160 432" />
        <circle className="desktop-globe-axis-cap" cx="420" cy="194" r="5" />
        <circle className="desktop-globe-axis-cap" cx="580" cy="626" r="5" />
      </g>
    </svg>
  );
}
