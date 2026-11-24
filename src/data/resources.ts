export interface OfficialResource {
  id: string;
  name: string;
  description: string;
  websiteUrl: string;
  type: 'government' | 'aadhikar';
  category: string;
  icon: string;
  helplineNumber?: string;
  lastVerified: string;
}

export const resourceCategories = [
  'Cyber Crime', 'Legal Services', 'Consumer Protection', 'Financial',
  'Government Portals', 'Emergency', 'Women & Children', 'Tax & Revenue'
];

export const officialResourcesData: OfficialResource[] = [
  {
    id: 'res-1',
    name: 'National Cyber Crime Reporting Portal',
    description: 'Official portal by the Government of India for reporting all types of cyber crimes including financial fraud, social media crimes, and online harassment.',
    websiteUrl: 'https://cybercrime.gov.in',
    type: 'government',
    category: 'Cyber Crime',
    icon: 'Shield',
    helplineNumber: '1930',
    lastVerified: '2026-08-01'
  },
  {
    id: 'res-2',
    name: 'National Legal Services Authority (NALSA)',
    description: 'Provides free legal services to weaker sections of society. Any person meeting the eligibility criteria can get free legal aid including a lawyer, court fees, and other expenses.',
    websiteUrl: 'https://nalsa.gov.in',
    type: 'government',
    category: 'Legal Services',
    icon: 'Scale',
    helplineNumber: '15100',
    lastVerified: '2026-08-01'
  },
  {
    id: 'res-3',
    name: 'National Consumer Helpline',
    description: 'Government helpline for consumer complaints, guidance on consumer rights, and mediation with companies for resolution of consumer disputes.',
    websiteUrl: 'https://consumerhelpline.gov.in',
    type: 'government',
    category: 'Consumer Protection',
    icon: 'ShoppingBag',
    helplineNumber: '1800-11-4000',
    lastVerified: '2026-08-01'
  },
  {
    id: 'res-4',
    name: 'Reserve Bank of India (RBI)',
    description: 'India\'s central bank. Handles banking complaints, monetary policy, and financial regulation. The RBI Banking Ombudsman resolves banking disputes for free.',
    websiteUrl: 'https://www.rbi.org.in',
    type: 'government',
    category: 'Financial',
    icon: 'Landmark',
    lastVerified: '2026-08-01'
  },
  {
    id: 'res-5',
    name: 'e-Courts Services',
    description: 'Official portal for checking case status, court orders, and cause lists across all courts in India. Search cases by party name, case number, or filing number.',
    websiteUrl: 'https://ecourts.gov.in',
    type: 'government',
    category: 'Legal Services',
    icon: 'Scale',
    lastVerified: '2026-08-01'
  },
  {
    id: 'res-6',
    name: 'CPGRAMS — Public Grievance Portal',
    description: 'Centralized portal for filing grievances against central government ministries and departments. Track complaint status online.',
    websiteUrl: 'https://pgportal.gov.in',
    type: 'government',
    category: 'Government Portals',
    icon: 'Building2',
    lastVerified: '2026-07-15'
  },
  {
    id: 'res-7',
    name: 'Police Emergency',
    description: 'Unified emergency helpline number for police, fire, and ambulance services across India.',
    websiteUrl: 'https://police.gov.in',
    type: 'government',
    category: 'Emergency',
    icon: 'Phone',
    helplineNumber: '112',
    lastVerified: '2026-08-01'
  },
  {
    id: 'res-8',
    name: 'Women Helpline',
    description: 'National helpline for women in distress. Provides assistance for domestic violence, harassment, and other women\'s safety issues.',
    websiteUrl: 'http://ncw.nic.in',
    type: 'government',
    category: 'Women & Children',
    icon: 'Heart',
    helplineNumber: '181',
    lastVerified: '2026-08-01'
  },
  {
    id: 'res-9',
    name: 'RTI Online Portal',
    description: 'Official portal for filing Right to Information (RTI) applications with central government ministries and departments online.',
    websiteUrl: 'https://rtionline.gov.in',
    type: 'government',
    category: 'Government Portals',
    icon: 'FileText',
    lastVerified: '2026-07-20'
  },
  {
    id: 'res-10',
    name: 'Income Tax e-Filing Portal',
    description: 'Official portal for filing income tax returns, checking refund status, and resolving tax-related issues. Includes e-Nivaran for tax grievances.',
    websiteUrl: 'https://incometax.gov.in',
    type: 'government',
    category: 'Tax & Revenue',
    icon: 'Receipt',
    lastVerified: '2026-08-01'
  },
  {
    id: 'res-11',
    name: 'e-Daakhil Consumer Complaint Portal',
    description: 'Official platform for filing consumer complaints online with District, State, and National Consumer Commissions.',
    websiteUrl: 'https://edaakhil.nic.in',
    type: 'government',
    category: 'Consumer Protection',
    icon: 'FileCheck',
    lastVerified: '2026-07-25'
  },
  {
    id: 'res-12',
    name: 'DigiLocker',
    description: 'Government platform for storing and sharing digital documents including Aadhaar, driving license, vehicle registration, and educational certificates.',
    websiteUrl: 'https://digilocker.gov.in',
    type: 'government',
    category: 'Government Portals',
    icon: 'FolderLock',
    lastVerified: '2026-08-01'
  },
  {
    id: 'res-13',
    name: 'PIB Fact Check',
    description: 'Government service that verifies claims related to government policies and schemes. Send suspicious messages to their WhatsApp for fact-checking.',
    websiteUrl: 'https://factcheck.pib.gov.in',
    type: 'government',
    category: 'Government Portals',
    icon: 'CheckCircle',
    helplineNumber: '+91-8799711259 (WhatsApp)',
    lastVerified: '2026-07-20'
  },
  {
    id: 'res-14',
    name: 'SEBI Investor Education',
    description: 'Securities and Exchange Board of India\'s investor education portal. Verify registered intermediaries, file complaints about securities fraud, and learn about safe investing.',
    websiteUrl: 'https://investor.sebi.gov.in',
    type: 'government',
    category: 'Financial',
    icon: 'TrendingUp',
    lastVerified: '2026-07-25'
  },
  {
    id: 'res-15',
    name: 'Childline India',
    description: 'National helpline for children in distress. Provides assistance for child abuse, child labor, missing children, and children in need of care and protection.',
    websiteUrl: 'https://www.childlineindia.org',
    type: 'government',
    category: 'Women & Children',
    icon: 'Baby',
    helplineNumber: '1098',
    lastVerified: '2026-08-01'
  }
];
