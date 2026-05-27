import Image from 'next/image';

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[562/301] w-full max-w-[562px] lg:mx-0">
      <div
        aria-hidden="true"
        className="absolute left-[14.8%] top-[-17%] h-[70.9%] w-[70.9%] rounded-full bg-[linear-gradient(103.43deg,#00B4FD_-1.02%,#003ACE_83.53%)] opacity-50 blur-[100px]"
      />
      <Image
        src="/assets/banking-hero-woman.svg"
        alt="Customer using mobile banking on her phone"
        width={363}
        height={301}
        priority
        className="tilt-from-top-left absolute left-[15.5%] top-0 h-auto w-[64.5%] rounded-[31px]"
      />
      <Image
        src="/assets/recent-activity-card.svg"
        alt="Recent activity transaction card"
        width={199}
        height={92}
        className="absolute left-0 top-[54.2%] h-auto w-[35.3%] rounded-[10px] drop-shadow-[0_12px_22px_rgba(0,0,0,0.22)]"
      />
      <Image
        src="/assets/balance-card.svg"
        alt="Account balance summary card"
        width={283}
        height={260}
        className="absolute left-[62.6%] top-[6%] h-auto w-[37.4%]"
      />
    </div>
  );
}
