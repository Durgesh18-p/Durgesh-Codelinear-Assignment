import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { Heading } from '@/components/ui/Heading';

const offices = [
  {
    city: 'London',
    address: 'Linktia Infosystems Ltd - CB7, 26 Main Road Sundridge,TN14 6EP, England, United Kingdom.',
  },
  {
    city: 'Dubai',
    address: 'Linktia Infosystems Ltd - CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates',
  },
  {
    city: 'London',
    address: 'Linktia Infosystems Ltd - CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India',
  },
];

const footerColumns = [
  {
    title: 'Solutions',
    links: ['Core Banking CB7', 'Digital Banking N7', 'Open Banking', 'Loan Origination System', 'Loan Management System', 'Digital Transformation'],
  },
  {
    title: 'N7 Banking',
    links: ['About Us', 'Solutions', 'Contact', 'Company', 'Careers', 'Insights', 'Core Team', 'Brand Center'],
  },
  {
    title: 'Our Socials',
    links: ['LinkedIn', 'X'],
  },
];

function FooterLink({ children }: { children: string }) {
  return (
    <a href="#" className="body-copy group flex items-start justify-between gap-6 text-[#E9F4F9]/70 transition duration-200 hover:text-[#E9F4F9]">
      <span className="max-w-[9.5rem]">{children}</span>
      <Image
        src="/assets/solutions/arrow-right.svg"
        alt=""
        width={13}
        height={12}
        className="arrow-hover mt-1 shrink-0"
      />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="section-dark">
      <Container className="relative min-h-[49.1875rem] py-16 lg:py-0">
        <div className="grid gap-14 lg:grid-cols-[24rem_1fr] lg:gap-[5.5rem]">
          <div className="pt-4 lg:pt-[4.125rem]">
            <div className="select-none bg-[linear-gradient(106.53deg,#01B4FD_-5.68%,#013ACF_86.98%)] bg-clip-text text-[12.5rem] font-medium leading-[0.85] tracking-[-0.08em] text-transparent sm:text-[16.25rem]">
              N7
            </div>
          </div>

          <div className="grid gap-16 lg:pt-[8.25rem]">
            <div className="grid gap-10 md:grid-cols-3 md:gap-16">
              {offices.map((office) => (
                <div key={`${office.city}-${office.address}`}>
                  <Heading size="body" className="font-medium">
                    {office.city}
                  </Heading>
                  <p className="body-copy-muted mt-5 max-w-[16.8rem]">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-10 md:grid-cols-3 md:gap-16">
              {footerColumns.map((column) => (
                <nav key={column.title} aria-label={column.title}>
                  <Heading size="body" className="font-medium">
                    {column.title}
                  </Heading>
                  <ul className="mt-5 space-y-3">
                    {column.links.map((link) => (
                      <li key={link}>
                        <FooterLink>{link}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-14 max-w-[48.75rem] text-sm font-normal leading-[1.3] text-[#E9F4F9]/30 lg:absolute lg:bottom-[2.1875rem] lg:left-[34rem] lg:mt-0">
          Copyright &copy; 2022 by Linktia Infosystems Limited &mdash; [CB7 and N7 as Commercial Brand] &mdash; [Registered
          under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
        </p>
      </Container>
    </footer>
  );
}
