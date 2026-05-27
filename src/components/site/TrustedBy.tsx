const partners = [
  { mark: '◎', name: 'SHELLS' },
  { mark: '◆', name: 'SmartFinder' },
  { mark: '●', name: 'Zoomerr' },
  { mark: '▰▰', name: 'ArtVenue' },
  { mark: '◧', name: 'kontrast' },
  { mark: '▥', name: 'WAVESMARATHON' },
];

export function TrustedBy() {
  return (
    <div className="mt-16 text-[#AAB6BC] sm:mt-[7.75rem]">
      <p className="text-base font-medium tracking-[-0.03em]">Trusted By:</p>
      <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.8125rem] font-bold text-[#607383] sm:gap-x-[1.375rem]">
        {partners.map((partner) => (
          <li key={partner.name} className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-base leading-none text-[#607383]/85">{partner.mark}</span>
            <span>{partner.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
