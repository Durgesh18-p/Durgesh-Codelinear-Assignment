import Image from 'next/image';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/shared/Container';

const leftFeatures = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
];

const rightFeatures = [
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
];

function ChecklistItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-0.5 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#005DE8]">
        <Image src="/assets/check-icon.svg" alt="" width={14} height={14} className="h-[13.14px] w-[13.14px]" />
      </span>
      <span className="body-copy max-w-[16.4rem] text-[#E9F4F9]/80">
        {children}
      </span>
    </li>
  );
}

export function EfficientCoreSection() {
  return (
    <section className="section-dark relative overflow-hidden py-20 lg:min-h-[681px] lg:py-0">
      <Container className="relative grid gap-12 lg:min-h-[681px] lg:grid-cols-[minmax(30rem,34.4rem)_minmax(30rem,1fr)] lg:items-center lg:gap-[9rem]">
        <div className="relative order-2 h-[23rem] overflow-hidden rounded-tr-[14px] lg:order-1 lg:ml-[-8rem] lg:h-[29rem] lg:w-[43rem] lg:overflow-visible">
          <div className="absolute left-0 top-0 h-[26rem] w-[30.5rem] overflow-hidden rounded-tr-[14px] border border-[#00B4FD] lg:h-[26.1rem] lg:w-[30.5rem]">
            <Image
              src="/assets/efficient-corebanking-frame.png"
              alt="Core banking dashboard interface"
              width={1440}
              height={681}
              className="absolute left-0 top-[-111px] h-auto w-[1440px] max-w-none"
            />
          </div>
          <div className="absolute left-0 top-[26.1rem] h-[31px] w-[34.4rem] rounded-br-[10px] border border-[#005DE8]" />
        </div>

        <div className="order-1 max-w-[31.5rem] lg:order-2 lg:pt-1">
          <Heading className="max-w-[31rem] text-[clamp(2.35rem,4.4vw,3.3125rem)]">
            Run a more efficient, flexible,and digitally connected corebanking system
          </Heading>
          <p className="mt-9 text-base font-semibold leading-[1.3] text-[#E9F4F9]">
            What you will get:
          </p>

          <div className="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-[3.75rem]">
            <ul className="space-y-4">
              {leftFeatures.map((feature) => (
                <ChecklistItem key={feature}>{feature}</ChecklistItem>
              ))}
            </ul>
            <ul className="space-y-4">
              {rightFeatures.map((feature) => (
                <ChecklistItem key={feature}>{feature}</ChecklistItem>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
