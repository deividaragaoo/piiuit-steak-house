const EMBERS = [
  { left: '7%', top: '24%', size: 3, delay: '0s', duration: '12s', drift: '7px', color: '#F06420' },
  { left: '14%', top: '62%', size: 2, delay: '1.6s', duration: '14s', drift: '-5px', color: '#B83C2B' },
  { left: '11%', top: '84%', size: 2, delay: '3.1s', duration: '11s', drift: '4px', color: '#F06420' },
  { left: '22%', top: '38%', size: 2, delay: '2.4s', duration: '15s', drift: '6px', color: '#F06420' },
  { left: '86%', top: '16%', size: 2, delay: '0.7s', duration: '13s', drift: '-6px', color: '#F06420' },
  { left: '91%', top: '48%', size: 3, delay: '2s', duration: '12s', drift: '5px', color: '#B83C2B' },
  { left: '82%', top: '74%', size: 2, delay: '4.2s', duration: '16s', drift: '-4px', color: '#F06420' },
  { left: '73%', top: '28%', size: 2, delay: '1.1s', duration: '14s', drift: '8px', color: '#F06420' },
  { left: '34%', top: '10%', size: 2, delay: '3.6s', duration: '15s', drift: '3px', color: '#B83C2B' },
  { left: '58%', top: '8%', size: 2, delay: '2.8s', duration: '13s', drift: '-7px', color: '#F06420' },
  { left: '46%', top: '90%', size: 3, delay: '1.3s', duration: '12s', drift: '5px', color: '#F06420' },
  { left: '68%', top: '88%', size: 2, delay: '4.8s', duration: '17s', drift: '-3px', color: '#B83C2B' },
]

export default function Scenery() {
  return (
    <div className="scenery" aria-hidden="true">
      <picture className="grill">
        <source media="(max-aspect-ratio: 5/8)" srcSet="/images/grill-mobile.webp" type="image/webp" />
        <source media="(max-aspect-ratio: 1/1)" srcSet="/images/grill-tablet.webp" type="image/webp" />
        <img
          src="/images/grill-desktop.webp"
          alt=""
          width="1920"
          height="1080"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
      <div className="smoke" />
      <div className="embers">
        {EMBERS.map((ember) => (
          <span
            key={`${ember.left}-${ember.top}`}
            style={{
              left: ember.left,
              top: ember.top,
              width: ember.size,
              height: ember.size,
              background: ember.color,
              animationDelay: ember.delay,
              animationDuration: ember.duration,
              '--drift': ember.drift,
            }}
          />
        ))}
      </div>
    </div>
  )
}
