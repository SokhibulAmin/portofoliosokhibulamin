const mapOffsets = [-160, 0, 160, 320];

export default function MobileTechBackdrop() {
  return (
    <svg
      className="mobile-tech-backdrop"
      viewBox="0 0 390 1200"
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mobile-earth-ocean" cx="32%" cy="24%" r="80%">
          <stop offset="0%" stopColor="#38e6ce" stopOpacity=".72" />
          <stop offset="48%" stopColor="#087f91" stopOpacity=".72" />
          <stop offset="100%" stopColor="#07131f" stopOpacity=".98" />
        </radialGradient>
        <linearGradient id="mobile-earth-shade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#06111b" stopOpacity=".78" />
          <stop offset="45%" stopColor="#06111b" stopOpacity="0" />
          <stop offset="100%" stopColor="#06111b" stopOpacity=".68" />
        </linearGradient>
        <clipPath id="mobile-earth-clip">
          <circle cx="292" cy="650" r="91" />
        </clipPath>
        <g id="mobile-earth-map">
          <path d="M12 28 23 19l17 3 12 10-5 10-10 2-1 11-10 8-8-9-8-13z" />
          <path d="m43 58 13 3 8 12-3 13-6 10-5 17-8 12-5-14 3-15-6-14 2-15z" />
          <path d="m72 29 11-7 12 3 8-5 11 5 10-2 14 9 10 2 7 9-11 7-11-3-9 10-13-3-9 8-12-5-9 4-9-10-10-2-2-12z" />
          <path d="m89 57 13-4 12 8 2 13-7 13-8 14-8-6-5-14-8-11z" />
          <path d="m127 91 9 2 7 8-5 8-10-2-5-7z" />
          <path d="m62 44 5-3 4 5-3 7-5-2z" />
        </g>
      </defs>

      <g className="mobile-tech-grid">
        <path d="M18 248h62v42h43v42M372 266h-54v52h-41v42M20 918h54v-46h43v-42M373 962h-63v-44h-42v-42" />
        <path d="M30 475h42v58h32M362 500h-37v53h-42M28 1056h52v-43h39M362 1070h-54v-40h-39" />
        <circle cx="80" cy="248" r="4" />
        <circle cx="318" cy="266" r="4" />
        <circle cx="74" cy="918" r="4" />
        <circle cx="310" cy="962" r="4" />
        <circle cx="72" cy="475" r="3" />
        <circle cx="325" cy="500" r="3" />
        <rect x="28" y="338" width="30" height="30" rx="4" />
        <rect x="327" y="832" width="34" height="34" rx="4" />
        <path d="M35 332v-9m8 9v-9m8 9v-9m-16 51v9m8-9v9m8-9v9m264 449v-9m8 9v-9m8 9v-9m-16 51v9m8-9v9m8-9v9" />
      </g>

      <g className="mobile-tech-radar">
        <circle cx="286" cy="148" r="72" />
        <circle cx="286" cy="148" r="56" />
        <circle cx="286" cy="148" r="39" />
        <circle cx="286" cy="148" r="21" />
        <path d="M286 61v18m0 138v-18m87-51h-18m-138 0h18m12-61 13 13m98 98-13-13m0-98-13 13m-98 98 13-13" />
        <g className="mobile-tech-radar-sweep">
          <path d="M286 148 286 77a71 71 0 0 1 50 21z" />
          <path d="M286 148 337 98" />
        </g>
        <circle className="mobile-tech-pulse" cx="286" cy="148" r="5" />
      </g>

      <g className="mobile-earth-system">
        <ellipse className="mobile-earth-orbit" cx="292" cy="650" rx="126" ry="38" />
        <circle className="mobile-earth-orbit-dot" cx="418" cy="650" r="4" />
        <circle className="mobile-earth-halo" cx="292" cy="650" r="105" />
        <circle className="mobile-earth-ocean" cx="292" cy="650" r="91" />
        <g clipPath="url(#mobile-earth-clip)">
          <g className="mobile-earth-map-roll">
            {mapOffsets.map((offset) => (
              <use href="#mobile-earth-map" key={offset} x={offset} y="580" />
            ))}
          </g>
          <ellipse className="mobile-earth-longitude" cx="292" cy="650" rx="43" ry="90" />
          <ellipse className="mobile-earth-longitude mobile-earth-longitude-narrow" cx="292" cy="650" rx="19" ry="90" />
          <path className="mobile-earth-latitude" d="M202 650h180M211 618q81 39 162 0M211 682q81-39 162 0" />
          <circle className="mobile-earth-shade" cx="292" cy="650" r="91" />
        </g>
        <circle className="mobile-earth-outline" cx="292" cy="650" r="91" />
        <path className="mobile-earth-axis" d="m250 540 84 220" />
        <circle className="mobile-earth-axis-cap" cx="250" cy="540" r="4" />
        <circle className="mobile-earth-axis-cap" cx="334" cy="760" r="4" />
      </g>

      <g className="mobile-tech-readout">
        <path d="M42 786h58m-58 8h38m-38 8h48" />
        <path d="M284 1006h64m-64 8h46m-46 8h57" />
        <text x="42" y="776">ORBITAL / 01</text>
        <text x="284" y="996">SYSTEM ONLINE</text>
      </g>
    </svg>
  );
}
