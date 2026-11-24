export interface ProblemGuide {
  id: string;
  category: string;
  slug: string;
  icon: string;
  color: string;
  whatHappened: string;
  immediateSteps: string[];
  authorities: { name: string; contact?: string; url?: string }[];
  documentsToKeep: string[];
  whatToAvoid: string[];
  officialResources: { name: string; url: string }[];
  whenToSeekLegal: string;
}

export const problemCategories = [
  { id: 'cyber-fraud', label: 'Cyber Fraud', icon: 'Wifi', color: 'bg-red-50 text-red-600' },
  { id: 'upi-fraud', label: 'UPI Fraud', icon: 'Smartphone', color: 'bg-orange-50 text-orange-600' },
  { id: 'banking-fraud', label: 'Banking Fraud', icon: 'Landmark', color: 'bg-amber-50 text-amber-600' },
  { id: 'online-shopping', label: 'Online Shopping Scam', icon: 'ShoppingCart', color: 'bg-purple-50 text-purple-600' },
  { id: 'job-scam', label: 'Job Scam', icon: 'Briefcase', color: 'bg-blue-50 text-blue-600' },
  { id: 'investment-scam', label: 'Investment Scam', icon: 'TrendingUp', color: 'bg-emerald-50 text-emerald-600' },
  { id: 'fake-govt-call', label: 'Fake Government Call', icon: 'Phone', color: 'bg-rose-50 text-rose-600' },
  { id: 'property-dispute', label: 'Property Dispute', icon: 'Home', color: 'bg-teal-50 text-teal-600' },
  { id: 'employment-issue', label: 'Employment Issue', icon: 'Building2', color: 'bg-indigo-50 text-indigo-600' },
  { id: 'consumer-complaint', label: 'Consumer Complaint', icon: 'ShoppingBag', color: 'bg-cyan-50 text-cyan-600' },
  { id: 'family-legal', label: 'Family / Personal Legal Issue', icon: 'Users', color: 'bg-pink-50 text-pink-600' },
  { id: 'police-cyber', label: 'Police / Cyber Crime', icon: 'Shield', color: 'bg-slate-50 text-slate-600' },
  { id: 'loan-financial', label: 'Loan / Financial Problem', icon: 'CreditCard', color: 'bg-yellow-50 text-yellow-600' },
  { id: 'other', label: 'Other', icon: 'HelpCircle', color: 'bg-gray-50 text-gray-600' },
];

export const problemGuidesData: ProblemGuide[] = [
  {
    id: 'problem-1',
    category: 'UPI Fraud',
    slug: 'upi-fraud',
    icon: 'Smartphone',
    color: 'orange',
    whatHappened: 'Someone tricked you into making a UPI payment, sending a collect request, or scanning a QR code that resulted in money being debited from your account without authorization.',
    immediateSteps: [
      'Call 1930 (Cyber Crime Helpline) immediately — the faster you report, the higher the chance of recovery',
      'Contact your bank\'s customer care and report the unauthorized transaction',
      'Raise a dispute in your UPI app (Google Pay, PhonePe, Paytm)',
      'Take screenshots of all transaction details, chat messages, and the scammer\'s information',
      'Report on cybercrime.gov.in with all details'
    ],
    authorities: [
      { name: 'Cyber Crime Helpline', contact: '1930' },
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' },
      { name: 'Your Bank\'s Fraud Helpline' },
      { name: 'Local Police Station (FIR)' }
    ],
    documentsToKeep: [
      'Transaction ID and UPI reference number',
      'Screenshots of transaction details from bank/UPI app',
      'Chat messages or call records with the scammer',
      'Scammer\'s UPI ID, phone number, or bank account',
      'Bank statement showing the debit',
      'Complaint acknowledgment numbers'
    ],
    whatToAvoid: [
      'Do NOT delete any messages or transaction records',
      'Do NOT share more OTPs or PINs, even if someone claims to help recover your money',
      'Do NOT send any more money "to reverse the transaction" — this is a common follow-up scam',
      'Do NOT delay — report within the first few hours for best results',
      'Do NOT engage with the scammer further'
    ],
    officialResources: [
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' },
      { name: 'RBI Digital Payments Safety', url: 'https://www.rbi.org.in' },
      { name: 'NPCI Dispute Resolution', url: 'https://www.npci.org.in' }
    ],
    whenToSeekLegal: 'Consider consulting a lawyer if: (1) The amount lost is significant, (2) The bank refuses to cooperate in the investigation, (3) You need to file a civil suit for recovery, (4) The police are not taking action on your complaint.'
  },
  {
    id: 'problem-2',
    category: 'Cyber Fraud',
    slug: 'cyber-fraud',
    icon: 'Wifi',
    color: 'red',
    whatHappened: 'You have been a victim of online fraud, including phishing, identity theft, social media hacking, or other digital crimes.',
    immediateSteps: [
      'Call 1930 immediately for financial fraud',
      'Change all passwords for affected accounts from a secure device',
      'Enable two-factor authentication on all important accounts',
      'Report on cybercrime.gov.in',
      'If financial information was compromised, contact your bank to freeze accounts/cards'
    ],
    authorities: [
      { name: 'Cyber Crime Helpline', contact: '1930' },
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' },
      { name: 'CERT-In', url: 'https://www.cert-in.org.in' },
      { name: 'Local Police Station' }
    ],
    documentsToKeep: [
      'Screenshots of fraudulent activity',
      'Email headers and URLs',
      'Transaction records',
      'Communication with scammers',
      'Account activity logs',
      'FIR copy'
    ],
    whatToAvoid: [
      'Do NOT click any more suspicious links',
      'Do NOT use the same compromised device without scanning for malware',
      'Do NOT share the incident details publicly with personal information visible',
      'Do NOT contact the scammer'
    ],
    officialResources: [
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' },
      { name: 'CERT-In', url: 'https://www.cert-in.org.in' }
    ],
    whenToSeekLegal: 'Seek legal help if: (1) Identity theft has occurred, (2) Financial loss is substantial, (3) There is an ongoing threat of blackmail, (4) Police are not acting on your complaint.'
  },
  {
    id: 'problem-3',
    category: 'Banking Fraud',
    slug: 'banking-fraud',
    icon: 'Landmark',
    color: 'amber',
    whatHappened: 'Unauthorized transactions from your bank account, someone accessed your net banking, your debit/credit card was misused, or you were tricked into sharing banking credentials.',
    immediateSteps: [
      'Call your bank\'s 24/7 helpline IMMEDIATELY to block your card/account',
      'Call 1930 (Cyber Crime Helpline)',
      'Change your net banking password from a secure device',
      'Report on cybercrime.gov.in',
      'Visit your bank branch and file a written complaint'
    ],
    authorities: [
      { name: 'Your Bank\'s Customer Care (24/7)' },
      { name: 'Cyber Crime Helpline', contact: '1930' },
      { name: 'RBI Banking Ombudsman', url: 'https://cms.rbi.org.in' },
      { name: 'Local Police Station' }
    ],
    documentsToKeep: [
      'Bank statement showing unauthorized transactions',
      'Transaction reference numbers',
      'SMS alerts for the transactions',
      'Written complaint to bank with acknowledgment',
      'FIR copy',
      'Communication with bank about the dispute'
    ],
    whatToAvoid: [
      'Do NOT delay reporting — RBI guidelines give better protection if reported within 3 days',
      'Do NOT use the compromised device for banking',
      'Do NOT share credentials with anyone claiming to help from the bank',
      'Do NOT ignore follow-up SMS/emails about your dispute'
    ],
    officialResources: [
      { name: 'RBI Banking Ombudsman', url: 'https://cms.rbi.org.in' },
      { name: 'RBI Sachet', url: 'https://sachet.rbi.org.in' },
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' }
    ],
    whenToSeekLegal: 'Consider legal help if: (1) The bank refuses to credit the disputed amount, (2) The amount is large, (3) The bank is not cooperating in the investigation, (4) You need to approach the Banking Ombudsman or Consumer Forum.'
  },
  {
    id: 'problem-4',
    category: 'Online Shopping Scam',
    slug: 'online-shopping',
    icon: 'ShoppingCart',
    color: 'purple',
    whatHappened: 'You received a defective/fake product, didn\'t receive your order, or were scammed on an e-commerce platform or social media seller.',
    immediateSteps: [
      'File a return/refund request on the e-commerce platform immediately',
      'Contact the platform\'s customer support with order details',
      'If purchased via social media/direct transfer, save all proof of communication',
      'Call the National Consumer Helpline: 1800-11-4000',
      'If it\'s a scam (fake seller, no delivery, money taken), report on cybercrime.gov.in'
    ],
    authorities: [
      { name: 'National Consumer Helpline', contact: '1800-11-4000' },
      { name: 'e-Daakhil Portal', url: 'https://edaakhil.nic.in' },
      { name: 'Cyber Crime Portal (for fraud)', url: 'https://cybercrime.gov.in' }
    ],
    documentsToKeep: [
      'Order confirmation and receipt',
      'Photos of what was advertised vs what was received',
      'Communication with seller',
      'Payment transaction records',
      'Delivery details',
      'Return/refund rejection screenshots'
    ],
    whatToAvoid: [
      'Do NOT return the product without documenting its condition',
      'Do NOT accept a resolution that doesn\'t fully address your complaint',
      'Do NOT delete the listing or seller\'s details',
      'Do NOT buy from unverified social media sellers using direct bank transfer'
    ],
    officialResources: [
      { name: 'National Consumer Helpline', url: 'https://consumerhelpline.gov.in' },
      { name: 'e-Daakhil Portal', url: 'https://edaakhil.nic.in' }
    ],
    whenToSeekLegal: 'File a consumer complaint if: (1) The platform refuses refund/replacement, (2) The amount involved is significant, (3) You were sold a counterfeit product, (4) Multiple consumers are affected (class action possible).'
  },
  {
    id: 'problem-5',
    category: 'Employment Issue',
    slug: 'employment-issue',
    icon: 'Building2',
    color: 'indigo',
    whatHappened: 'Your employer has not paid your salary, wrongfully terminated you, is harassing you at work, not depositing PF, or violating labor laws.',
    immediateSteps: [
      'Send a written complaint/notice to your employer (email/registered post)',
      'Contact the Labour Commissioner\'s office in your district',
      'Check your PF status on epfindia.gov.in',
      'For workplace harassment, file a complaint with the Internal Complaints Committee',
      'For sexual harassment, report on She-Box (shebox.nic.in)'
    ],
    authorities: [
      { name: 'Labour Commissioner Office' },
      { name: 'EPFO', url: 'https://www.epfindia.gov.in' },
      { name: 'She-Box (Workplace Harassment)', url: 'http://shebox.nic.in' },
      { name: 'Shram Suvidha Portal', url: 'https://shramsuvidha.gov.in' }
    ],
    documentsToKeep: [
      'Appointment letter / employment contract',
      'Salary slips showing payment history',
      'Written complaints to employer',
      'PF statements (from EPFO)',
      'Termination letter',
      'Evidence of harassment (emails, messages)',
      'Attendance records'
    ],
    whatToAvoid: [
      'Do NOT resign under pressure without documenting the issues',
      'Do NOT sign any documents without reading them carefully',
      'Do NOT destroy company property or data',
      'Do NOT discuss ongoing complaints on social media'
    ],
    officialResources: [
      { name: 'Ministry of Labour', url: 'https://labour.gov.in' },
      { name: 'EPFO', url: 'https://www.epfindia.gov.in' },
      { name: 'Shram Suvidha', url: 'https://shramsuvidha.gov.in' }
    ],
    whenToSeekLegal: 'Seek legal help if: (1) You were wrongfully terminated, (2) Salary has been unpaid for over a month, (3) You are facing serious workplace harassment, (4) PF contributions are not being deposited, (5) You need to approach the Labour Court.'
  }
];
