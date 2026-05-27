import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Container } from '@/components/shared/Container';
import { StickyColumn } from '@/components/shared/StickyColumn';
import { SolutionCard } from '@/components/shared/SolutionCard';

const solutions = [
  {
    title: 'Core Banking CB7',
    icon: '/assets/solutions/core-banking.svg',
    copy: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
  },
  {
    title: 'Digital Banking N7',
    icon: '/assets/solutions/digital-banking.svg',
    copy: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    title: 'Open Banking',
    icon: '/assets/solutions/open-banking.svg',
    copy: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
  },
  {
    title: 'Loan Origination System',
    icon: '/assets/solutions/loan-origination.svg',
    tag: 'NBFC',
    copy: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    title: 'Loan Management System',
    icon: '/assets/solutions/loan-management.svg',
    tag: 'NBFC',
    copy: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
];

export function SolutionsSection() {
  return (
    <section className="section-dark py-16 sm:py-20 lg:py-[4.625rem]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(18rem,30rem)_minmax(34rem,38.25rem)] lg:gap-[9.5rem]">
          <StickyColumn>
            <Heading size="sectionSmall" className="max-w-[26rem]">
              All of our solutions are tailor-made to your needs
            </Heading>
            <Button variant="outline" className="mt-[3.125rem] border-[#E9F4F9]">
              Request Demo
            </Button>
          </StickyColumn>

          <div className="grid gap-x-[5.125rem] gap-y-[5.875rem] sm:grid-cols-2">
            {solutions.map((solution) => (
              <SolutionCard key={solution.title} {...solution} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
