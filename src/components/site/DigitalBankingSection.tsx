import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/shared/Container';
import { StickyColumn } from '@/components/shared/StickyColumn';

const features = [
  {
    title: 'Fully compliant with regulatory requirement',
    copy: "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
    items: ['Pre-integrated Security System', 'Fully Compliant With Regulatory Requirement', 'Digitally Connected Core'],
    placement: 'top',
  },
  {
    title: 'No legacy IT systems',
    copy: 'Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.',
    items: ['Adaptive & Intelligent API monetization', 'Ambient User Experience', 'Cloud-native With lower TCO'],
    placement: 'middle-left',
  },
  {
    title: 'No traditional branches',
    copy: 'Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.',
    items: ['Branchless & Paperless Banking', 'Digital Transformation Capability', 'Optimized, Adoptable and Scalable'],
    placement: 'bottom-right',
  },
];

function GradientText({ children }: { children: string }) {
  return (
    <span className="bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] bg-clip-text font-medium text-transparent">
      {children}
    </span>
  );
}

function TickerMark() {
  return <Image src="/assets/asterisk-mark.svg" alt="" width={58} height={58} className="h-[43px] w-[43px] opacity-30" />;
}

function TickerContent() {
  return (
    <div className="flex shrink-0 items-center gap-7 pr-7 text-[clamp(2rem,3.3vw,2.9375rem)] leading-[1.2]">
      <TickerMark />
      <GradientText>N7</GradientText>
      <TickerMark />
      <span>Say</span>
      <Image
        src="/assets/hand-wave.svg"
        alt=""
        width={94}
        height={66}
        className="wave-hand h-[44px] w-[62px] object-contain"
      />
      <span>to the new way of banking</span>
      <TickerMark />
      <GradientText>CB7</GradientText>
      <TickerMark />
      <span>Say</span>
    </div>
  );
}

function LearnMoreLink() {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-[5px] font-mono text-sm font-normal uppercase leading-[1.3] tracking-normal"
    >
      <span className="bg-[linear-gradient(95.48deg,#00B4FD_-79.76%,#003ACE_91.37%)] bg-clip-text text-transparent">
        Learn More
      </span>
      <Image
        src="/assets/solutions/arrow-right.svg"
        alt=""
        width={13}
        height={12}
        className="arrow-hover"
      />
    </a>
  );
}

function PhoneMockup({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <Image src={src} alt={alt} width={268} height={544} className={`h-auto w-[16.75rem] max-w-full ${className}`} />
  );
}

function BulletItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#005DE8]">
        <Image src="/assets/check-icon.svg" alt="" width={14} height={14} className="h-[13.14px] w-[13.14px]" />
      </span>
      <span className="max-w-[16.7rem] text-base font-medium leading-[1.3] text-[#000D12]/70">{children}</span>
    </li>
  );
}

function FeatureBlock({ feature }: { feature: (typeof features)[number] }) {
  return (
    <article>
      <Heading as="h3" size="body" className="max-w-[16.9rem] font-medium text-[#000D12]">
        {feature.title}
      </Heading>
      <p className="body-copy-muted-light mt-7 max-w-[16.8rem]">{feature.copy}</p>
      <ul className="mt-9 space-y-5">
        {feature.items.map((item) => (
          <BulletItem key={item}>{item}</BulletItem>
        ))}
      </ul>
    </article>
  );
}

function LightPaperlessCta() {
  return (
    <div className="section-dark relative mt-24 overflow-hidden rounded-[27px] px-6 py-12 shadow-[0_40px_90px_rgba(0,13,18,0.12)] sm:px-12 lg:mt-[9.5rem] lg:min-h-[25rem] lg:px-[4.125rem] lg:py-[7.25rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[37rem] top-[-2.3rem] select-none text-[29rem] font-normal leading-none tracking-[-0.09em] text-transparent opacity-40 [-webkit-text-stroke:1px_rgba(0,180,253,0.22)]"
      >
        N7
      </div>
      <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(26rem,36rem)_1fr] lg:items-center">
        <div>
          <Heading className="max-w-[35rem] text-[clamp(2.5rem,4.6vw,3.3125rem)]">
            Take the full advantage of going paper-less now.
          </Heading>
          <p className="body-copy-muted mt-8 max-w-[31rem]">
            N7 helps your financial institution improve the client experience, automate and optimize procedures,
            simplify banking operations
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end lg:gap-10">
          <Button variant="outline" className="min-w-[13.125rem] border-[#E9F4F9] px-[3.1875rem]">
            Contact Us
          </Button>
          <Button className="min-w-[13.125rem] px-[3.1875rem]">Request Demo</Button>
        </div>
      </div>
    </div>
  );
}

export function DigitalBankingSection() {
  return (
    <section className="overflow-x-clip bg-[#E9F4F9] text-[#000D12]">
      <div className="h-[116px] overflow-hidden bg-white font-semibold whitespace-nowrap">
        <div className="mobile-marquee flex h-full w-max items-center md:animate-none">
          <TickerContent />
          <div className="md:hidden" aria-hidden="true">
            <TickerContent />
          </div>
        </div>
      </div>

      <Container className="relative min-h-[2480px] py-20 lg:min-h-[2650px]">
        <div
          aria-hidden="true"
          className="absolute left-[14rem] top-[3.5rem] text-[29rem] font-normal leading-none tracking-[-0.08em] text-transparent opacity-25 [-webkit-text-stroke:2px_rgba(0,93,232,0.45)]"
        >
          N7
        </div>
        <Image
          src="/assets/n7-left-vector.svg"
          alt=""
          width={1243}
          height={1245}
          aria-hidden="true"
          className="pointer-events-none absolute left-[-47.7rem] top-[26.125rem] h-[77.826rem] w-[77.703rem] max-w-none"
        />
        <div
          aria-hidden="true"
          className="absolute right-[-15rem] top-[98rem] h-[60rem] w-[60rem] rounded-full border border-[#00B4FD]/20"
        />

        <div className="relative z-10 grid gap-14 lg:grid-cols-[minmax(18rem,30rem)_minmax(34rem,38.25rem)] lg:gap-[9.5rem]">
          <StickyColumn className="lg:top-32">
            <Heading size="sectionSmall" className="max-w-[26rem] !text-[#000D12]">
              Digital banking out-of-the-box
            </Heading>
            <p className="body-copy-muted-light mt-8 max-w-[23.7rem]">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <div className="mt-9">
              <Button className="min-w-[13.125rem] px-[3.1875rem]">Request Demo</Button>
            </div>
            <div className="mt-5">
              <LearnMoreLink />
            </div>
          </StickyColumn>

          <div className="space-y-24 lg:space-y-28">
            <div className="grid gap-12 lg:grid-cols-[17rem_17rem] lg:items-start lg:gap-[4.25rem]">
              <PhoneMockup
                src="/assets/n7-phone-home.png"
                alt="Mobile banking home screen"
                className="mx-auto lg:mx-0"
              />

              <div className="lg:pt-20">
                <FeatureBlock feature={features[0]} />
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-[17rem_17rem] lg:items-start lg:gap-[4.25rem]">
              <FeatureBlock feature={features[1]} />
              <PhoneMockup
                src="/assets/n7-phone-analytics.png"
                alt="Mobile banking analytics screen"
                className="mx-auto lg:mx-0"
              />
            </div>

            <div className="grid gap-12 lg:grid-cols-[17rem_17rem] lg:items-start lg:gap-[4.25rem]">
              <PhoneMockup
                src="/assets/n7-phone-profile.png"
                alt="Mobile banking profile screen"
                className="mx-auto lg:mx-0"
              />
              <FeatureBlock feature={features[2]} />
            </div>
          </div>
        </div>

        <LightPaperlessCta />
      </Container>
    </section>
  );
}
