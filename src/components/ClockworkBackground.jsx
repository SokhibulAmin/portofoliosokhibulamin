const gears = [
  { x: 110, y: 140, teeth: 16, root: 61.25, tip: 70, ratio: 1, phase: 0 },
  { x: 232.5, y: 140, teeth: 12, root: 45.94, tip: 52.5, ratio: -16 / 12, phase: 15 },
  { x: 232.5, y: 236.25, teeth: 10, root: 38.28, tip: 43.75, ratio: 16 / 10, phase: 0 },
];

function createGearPath(teeth, rootRadius, tipRadius) {
  const steps = [
    [-0.5, rootRadius],
    [-0.34, rootRadius],
    [-0.34, tipRadius],
    [-0.16, tipRadius],
    [0.16, tipRadius],
    [0.34, tipRadius],
    [0.34, rootRadius],
    [0.5, rootRadius],
  ];
  const points = [];

  for (let tooth = 0; tooth < teeth; tooth += 1) {
    const center = tooth * Math.PI * 2 / teeth;
    for (const [offset, radius] of steps) {
      const angle = center + offset * Math.PI * 2 / teeth;
      points.push(`${(Math.cos(angle) * radius).toFixed(2)},${(Math.sin(angle) * radius).toFixed(2)}`);
    }
  }

  return `M ${points.join(" L ")} Z`;
}

function Gear({ x, y, teeth, root, tip, ratio, phase, rotation }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g
        className="clockwork-wheel"
        style={{ transform: `rotate(${rotation * ratio + phase}deg)` }}
      >
        <path className="clockwork-wheel-body" d={createGearPath(teeth, root, tip)} />
        <circle className="clockwork-wheel-ring" r={root * 0.52} />
        <path
          className="clockwork-wheel-spokes"
          d={`M 0 ${-root * 0.48} V ${-root * 0.78} M 0 ${root * 0.48} V ${root * 0.78} M ${-root * 0.48} 0 H ${-root * 0.78} M ${root * 0.48} 0 H ${root * 0.78}`}
        />
        <circle className="clockwork-wheel-center" r={root * 0.16} />
      </g>
    </g>
  );
}

export default function ClockworkBackground({ rotation }) {
  return (
    <svg
      className="clockwork-background"
      viewBox="0 0 360 320"
      role="presentation"
      aria-hidden="true"
    >
      {gears.map((gear, index) => (
        <Gear key={index} {...gear} rotation={rotation} />
      ))}
    </svg>
  );
}
