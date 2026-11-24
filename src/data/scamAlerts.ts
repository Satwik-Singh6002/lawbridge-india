export interface ScamAlert {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  riskLevel: 'high' | 'medium' | 'low';
  warningSigns: string[];
  howItWorks: string;
  exampleScenario: string;
  prevention: string[];
  whatToDo: string[];
  whereToReport: string[];
  officialResources: { name: string; url: string }[];
  lastReviewed: string;
  isPublished: boolean;
}

export const scamCategories = [
  'UPI Scam', 'OTP Scam', 'Digital Arrest', 'Fake Job Offer', 'Investment Scam',
  'Courier Scam', 'Banking Scam', 'Phishing', 'Fake Customer Care',
  'Fake Government Notice', 'Loan Scam', 'Social Media Scam'
];

export const scamAlertsData: ScamAlert[] = [
  {
    id: 'scam-1',
    title: 'UPI Payment Fraud',
    slug: 'upi-payment-fraud',
    category: 'UPI Scam',
    description: 'Scammers trick victims into sending money via UPI by sending fake payment requests or impersonating buyers/sellers on online platforms.',
    riskLevel: 'high',
    warningSigns: [
      'Someone asks you to "receive" money but sends a collect/payment request instead',
      'Buyer on OLX/Quikr says they need to verify your UPI ID',
      'You receive a QR code to "receive" money — scanning it actually deducts money',
      'Urgency: "Send now or the deal expires"',
      'Unknown person sends a small amount first to "verify" before a larger transaction'
    ],
    howItWorks: 'The scammer contacts you (often posing as a buyer or service provider). They claim they need to send you money and ask for your UPI ID. Instead of sending money, they send a "Collect Request" — which actually withdraws money from your account when you approve it. Alternatively, they may send a QR code claiming it is for receiving money, but scanning it initiates a payment from your account.',
    exampleScenario: 'Raj listed his old phone for sale on an online marketplace. A "buyer" contacted him, agreed to pay the full price, and asked for his UPI ID. The buyer then sent a collect request for ₹15,000 labeled "Payment for phone." Thinking he was receiving money, Raj approved the request — and ₹15,000 was debited from his account.',
    prevention: [
      'Never approve collect requests from unknown people',
      'You NEVER need to enter your PIN to receive money',
      'Do not scan QR codes to receive payments — QR codes are only for making payments',
      'Verify the identity of buyers/sellers independently',
      'Use official payment channels on marketplace platforms'
    ],
    whatToDo: [
      'Report the fraud immediately on the Cyber Crime portal (cybercrime.gov.in)',
      'Call your bank\'s customer care to report the unauthorized transaction',
      'File a complaint with your UPI app (Google Pay, PhonePe, Paytm)',
      'Lodge an FIR at your local police station',
      'Save all screenshots, chat messages, and transaction IDs as evidence'
    ],
    whereToReport: [
      'National Cyber Crime Reporting Portal: cybercrime.gov.in',
      'Cyber Crime Helpline: 1930',
      'Your bank\'s fraud helpline',
      'UPI app\'s in-app grievance section'
    ],
    officialResources: [
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' },
      { name: 'RBI - Digital Payments Safety', url: 'https://www.rbi.org.in' },
      { name: 'NPCI UPI Safety Tips', url: 'https://www.npci.org.in' }
    ],
    lastReviewed: '2026-08-01',
    isPublished: true
  },
  {
    id: 'scam-2',
    title: 'OTP Sharing Fraud',
    slug: 'otp-sharing-fraud',
    category: 'OTP Scam',
    description: 'Fraudsters impersonate bank officials, delivery agents, or customer care to trick you into sharing your OTP, gaining access to your accounts.',
    riskLevel: 'high',
    warningSigns: [
      'Someone calls claiming to be from your bank and asks for OTP',
      '"Your account will be blocked unless you share the OTP immediately"',
      'SMS from your bank followed by a call asking you to read the OTP',
      'Caller knows partial details about your account',
      'Claims your KYC is expiring and needs OTP for verification'
    ],
    howItWorks: 'Scammers call pretending to be bank officials, delivery agents, or customer care. They initiate a transaction on your account (or try to log into your internet banking) which triggers an OTP on your phone. They then ask you to share this OTP under some pretext — once shared, they complete the unauthorized transaction.',
    exampleScenario: 'Priya received a call from someone claiming to be from her bank. The caller said her debit card was about to expire and needed to be renewed. He asked for her card number, CVV, and the OTP that was sent to her phone. Within minutes, ₹45,000 was debited from her savings account.',
    prevention: [
      'NEVER share your OTP with anyone — banks will never ask for it',
      'No legitimate service will ever call and ask for OTP',
      'If someone claims to be from your bank, hang up and call the official number on your card',
      'Enable transaction alerts on your bank account',
      'Report suspicious calls immediately'
    ],
    whatToDo: [
      'Contact your bank immediately to block your account/card',
      'Report on cybercrime.gov.in',
      'Call 1930 (Cyber Crime Helpline)',
      'File an FIR with local police',
      'Note the caller\'s number and report it'
    ],
    whereToReport: [
      'National Cyber Crime Portal: cybercrime.gov.in',
      'Cyber Crime Helpline: 1930',
      'Your bank\'s 24/7 helpline'
    ],
    officialResources: [
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' },
      { name: 'RBI Customer Education', url: 'https://www.rbi.org.in' }
    ],
    lastReviewed: '2026-08-01',
    isPublished: true
  },
  {
    id: 'scam-3',
    title: 'Digital Arrest Scam',
    slug: 'digital-arrest-scam',
    category: 'Digital Arrest',
    description: 'Scammers impersonate police or government officials on video calls, claiming you are under "digital arrest" for alleged crimes, and demand immediate payment.',
    riskLevel: 'high',
    warningSigns: [
      'Video call from someone in police/TRAI/CBI uniform',
      'Claims a parcel in your name contains drugs or illegal items',
      'Threatens immediate arrest unless you pay a fine',
      'Asks you to stay on the video call continuously ("digital arrest")',
      'Shows fake documents, fake arrest warrants, or fake court orders'
    ],
    howItWorks: 'Scammers call via WhatsApp or regular phone, claiming to be from police, CBI, customs, or TRAI. They allege you are involved in illegal activity — such as a parcel containing drugs sent in your name. They put you on a video call with someone in a fake police uniform who says you are under "digital arrest" and must not disconnect. They demand large sums of money to "settle" the case.',
    exampleScenario: 'A retired professor received a call claiming a courier parcel in his name was intercepted at Mumbai airport with drugs. He was transferred to a "CBI officer" on video call who showed a fake arrest warrant. Terrified, the professor stayed on call for 6 hours and transferred ₹12 lakh to the scammer\'s account.',
    prevention: [
      'There is NO concept of "digital arrest" in Indian law',
      'Police and government agencies NEVER demand payment over phone or video call',
      'No legitimate agency will ask you to stay on a video call',
      'If threatened, simply disconnect and call your local police station',
      'Verify any claims independently through official channels'
    ],
    whatToDo: [
      'Disconnect immediately — you are not under any legal obligation to stay on the call',
      'Report to cybercrime.gov.in immediately',
      'Call 1930 (Cyber Crime Helpline)',
      'File an FIR at your local police station',
      'If you transferred money, contact your bank immediately to try to freeze the transaction'
    ],
    whereToReport: [
      'National Cyber Crime Portal: cybercrime.gov.in',
      'Cyber Crime Helpline: 1930',
      'Local Police Station: 100'
    ],
    officialResources: [
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' },
      { name: 'PIB Fact Check', url: 'https://factcheck.pib.gov.in' }
    ],
    lastReviewed: '2026-08-01',
    isPublished: true
  },
  {
    id: 'scam-4',
    title: 'Fake Job Offer Scam',
    slug: 'fake-job-offer-scam',
    category: 'Fake Job Offer',
    description: 'Fraudsters post fake job listings or send unsolicited job offers requiring upfront fees for registration, training, or processing.',
    riskLevel: 'high',
    warningSigns: [
      'Job offer via WhatsApp/SMS from unknown number',
      'Asks for registration/processing fee before joining',
      'Unusually high salary for minimal qualifications',
      'Vague job description — "work from home, earn ₹50,000/day"',
      'No proper company website or verifiable address',
      'Interview conducted only via chat, never in person or proper video call'
    ],
    howItWorks: 'Scammers create fake job postings on social media or send mass WhatsApp/SMS messages offering attractive jobs. They conduct fake "interviews" and send fake offer letters from known companies. They then ask for fees for registration, training materials, background verification, or uniform — and disappear after receiving payment.',
    exampleScenario: 'Amit received a WhatsApp message offering a data entry job paying ₹25,000/month for 2 hours of work daily. After a brief chat "interview," he received a fake offer letter from a well-known company. He was asked to pay ₹5,000 as registration fee and ₹3,000 for training materials. After paying, all contacts went silent.',
    prevention: [
      'Legitimate employers NEVER ask candidates to pay money',
      'Verify job offers on the company\'s official website',
      'Research the company and check for reviews',
      'Be suspicious of unsolicited job offers via WhatsApp/SMS',
      'Never pay for job placement, training, or processing fees'
    ],
    whatToDo: [
      'Report the fake job posting on the platform where it appeared',
      'File a complaint on cybercrime.gov.in',
      'Report to local police',
      'Warn others in your network about the scam',
      'If using a job portal, report the listing to the portal\'s support team'
    ],
    whereToReport: [
      'National Cyber Crime Portal: cybercrime.gov.in',
      'Cyber Crime Helpline: 1930',
      'Ministry of Labour Helpline: 14434'
    ],
    officialResources: [
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' },
      { name: 'National Career Service', url: 'https://www.ncs.gov.in' }
    ],
    lastReviewed: '2026-07-15',
    isPublished: true
  },
  {
    id: 'scam-5',
    title: 'Investment & Trading Scam',
    slug: 'investment-trading-scam',
    category: 'Investment Scam',
    description: 'Scammers lure victims with promises of guaranteed high returns on stock trading, cryptocurrency, or other investments through fake apps and groups.',
    riskLevel: 'high',
    warningSigns: [
      'Guaranteed returns of 20-50% per month',
      'WhatsApp/Telegram groups with "expert" stock tips',
      'Fake trading apps showing artificial profits',
      'Pressure to invest more to "unlock" withdrawal',
      'Celebrity endorsement in ads (usually fake)',
      'Cannot withdraw profits — always asked to deposit more'
    ],
    howItWorks: 'Scammers create WhatsApp or Telegram groups claiming to offer expert stock/crypto tips. They may direct you to download a fake trading app that shows artificially inflated profits. Initial small investments may show returns to build trust. When you invest larger amounts, you cannot withdraw — the scammers demand additional deposits for "taxes," "fees," or "insurance" before allowing withdrawal.',
    exampleScenario: 'Sunita was added to a Telegram group that claimed to provide stock market tips from a SEBI-registered analyst. She downloaded a suggested trading app and invested ₹50,000. The app showed her portfolio growing to ₹2,00,000. When she tried to withdraw, she was asked to pay ₹30,000 as "processing fee." After paying, she was asked for more. The app was fake.',
    prevention: [
      'No legitimate investment guarantees fixed high returns',
      'Verify any investment advisor\'s SEBI registration',
      'Only use trading apps from recognized brokers listed on exchange websites',
      'Be extremely cautious of investment groups on social media',
      'If it sounds too good to be true, it probably is'
    ],
    whatToDo: [
      'Stop all further payments immediately',
      'Report to SEBI (sebi.gov.in) if it involves securities',
      'File complaint on cybercrime.gov.in',
      'Contact your bank about the transactions',
      'Preserve all chat logs, app screenshots, and transaction records'
    ],
    whereToReport: [
      'SEBI Complaints: scores.gov.in',
      'National Cyber Crime Portal: cybercrime.gov.in',
      'RBI (for unauthorized financial activities)'
    ],
    officialResources: [
      { name: 'SEBI Investor Education', url: 'https://investor.sebi.gov.in' },
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' },
      { name: 'RBI', url: 'https://www.rbi.org.in' }
    ],
    lastReviewed: '2026-07-20',
    isPublished: true
  },
  {
    id: 'scam-6',
    title: 'Courier / Parcel Delivery Scam',
    slug: 'courier-parcel-scam',
    category: 'Courier Scam',
    description: 'Scammers impersonate courier companies, claiming a parcel is stuck and demanding payment or personal details for release.',
    riskLevel: 'medium',
    warningSigns: [
      'SMS/call about a parcel you did not order',
      'Link to "track" or "reschedule" delivery',
      'Request for payment to release the parcel',
      'Claims parcel contains contraband — demands money to avoid legal action',
      'Asks for Aadhaar or bank details for "identity verification"'
    ],
    howItWorks: 'Scammers send messages or make calls claiming to be from courier services like India Post, FedEx, or BlueDart. They say a parcel addressed to you is held due to customs issues or incorrect address. They share links to fake tracking websites that steal your personal information, or they demand payment to "release" the parcel.',
    exampleScenario: 'Meera received an SMS saying her India Post parcel was stuck due to an incomplete address. The message included a link to "update" her details. The link led to a fake website that asked for her Aadhaar number, bank account, and debit card details. Her information was then used for unauthorized transactions.',
    prevention: [
      'Track parcels only on the official courier company website',
      'Never click links in SMS messages about parcels you didn\'t order',
      'Courier companies do not ask for bank details or OTPs',
      'Call the official courier helpline to verify any claims',
      'Do not pay "customs" or "release" fees over phone'
    ],
    whatToDo: [
      'Do not click any links or share information',
      'Report to cybercrime.gov.in',
      'Block the number',
      'If you shared details, contact your bank immediately',
      'Report the phishing link to Google Safe Browsing'
    ],
    whereToReport: [
      'National Cyber Crime Portal: cybercrime.gov.in',
      'Cyber Crime Helpline: 1930'
    ],
    officialResources: [
      { name: 'India Post Official', url: 'https://www.indiapost.gov.in' },
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' }
    ],
    lastReviewed: '2026-07-10',
    isPublished: true
  },
  {
    id: 'scam-7',
    title: 'Banking & KYC Fraud',
    slug: 'banking-kyc-fraud',
    category: 'Banking Scam',
    description: 'Fraudsters pose as bank representatives demanding KYC updates and trick victims into sharing sensitive banking information.',
    riskLevel: 'high',
    warningSigns: [
      'SMS/email saying your KYC is expired and account will be frozen',
      'Link to "update KYC" that leads to a fake banking website',
      'Call from "bank" asking to download a remote access app',
      'Request for debit card number, CVV, expiry date, or PIN',
      'Urgency: "Complete within 24 hours or account will be blocked"'
    ],
    howItWorks: 'Scammers send messages claiming your bank account\'s KYC (Know Your Customer) has expired and your account will be frozen unless updated immediately. They provide a link to a fake banking website that looks identical to your bank\'s website. When you enter your credentials, they capture your login information and drain your account.',
    exampleScenario: 'Ravi received an SMS: "Dear customer, your SBI KYC has expired. Update now to avoid account suspension. Click: [fake link]." He clicked the link, which opened a page identical to SBI\'s net banking portal. After entering his credentials, his savings of ₹3.2 lakh were transferred out within minutes.',
    prevention: [
      'Banks never send KYC update links via SMS or email',
      'Always visit your bank\'s website by typing the URL directly in browser',
      'Never install remote access apps like AnyDesk or TeamViewer at someone\'s request',
      'KYC updates are done only at bank branches or through official banking apps',
      'Check the URL carefully — fake sites use similar but slightly different domains'
    ],
    whatToDo: [
      'Contact your bank immediately to block your account',
      'Change your net banking password from a secure device',
      'Report to cybercrime.gov.in',
      'File an FIR with police',
      'Report the fake website to your bank'
    ],
    whereToReport: [
      'Your bank\'s fraud helpline',
      'RBI: rbi.org.in',
      'National Cyber Crime Portal: cybercrime.gov.in',
      'Cyber Crime Helpline: 1930'
    ],
    officialResources: [
      { name: 'RBI - Safe Banking', url: 'https://www.rbi.org.in' },
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' }
    ],
    lastReviewed: '2026-08-05',
    isPublished: true
  },
  {
    id: 'scam-8',
    title: 'Phishing Email & SMS Scam',
    slug: 'phishing-scam',
    category: 'Phishing',
    description: 'Scammers send convincing emails or SMS messages with malicious links designed to steal your personal information, passwords, or financial details.',
    riskLevel: 'medium',
    warningSigns: [
      'Email from slightly misspelled company domains (e.g., amaz0n.com)',
      'Generic greeting: "Dear Customer" instead of your name',
      'Urgent action required — account suspended, prize won, etc.',
      'Links that look suspicious when you hover over them',
      'Poor grammar or formatting in official-looking emails',
      'Attachments from unknown senders'
    ],
    howItWorks: 'Scammers send emails or SMS that appear to be from trusted organizations like banks, government agencies, or popular services. These messages contain links to fake websites designed to capture your login credentials, personal information, or financial details. Some phishing emails also contain malware attachments.',
    exampleScenario: 'Anil received an email that appeared to be from the Income Tax Department, claiming he was eligible for a ₹15,000 refund. He clicked the link and entered his PAN, Aadhaar, and bank details on a fake government website. His information was then used for identity theft.',
    prevention: [
      'Never click links in suspicious emails or messages',
      'Verify the sender\'s email address carefully',
      'Government agencies don\'t send refund links via email',
      'When in doubt, visit the official website directly',
      'Keep your devices and browsers updated',
      'Use two-factor authentication wherever possible'
    ],
    whatToDo: [
      'Do not interact with the email/message further',
      'If you clicked a link and entered information, change your passwords immediately',
      'Report phishing emails to the impersonated organization',
      'Report to cybercrime.gov.in',
      'Run a security scan on your device'
    ],
    whereToReport: [
      'National Cyber Crime Portal: cybercrime.gov.in',
      'CERT-In: cert-in.org.in',
      'Cyber Crime Helpline: 1930'
    ],
    officialResources: [
      { name: 'CERT-In', url: 'https://www.cert-in.org.in' },
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' }
    ],
    lastReviewed: '2026-07-25',
    isPublished: true
  },
  {
    id: 'scam-9',
    title: 'Fake Customer Care Number Scam',
    slug: 'fake-customer-care-scam',
    category: 'Fake Customer Care',
    description: 'Scammers create fake customer care numbers that appear in Google search results, then trick callers into sharing sensitive information.',
    riskLevel: 'medium',
    warningSigns: [
      'Customer care number found via Google search (not on official website)',
      '"Agent" asks you to install AnyDesk, TeamViewer, or QuickSupport',
      'Requests bank details or OTP to "process refund" or "resolve complaint"',
      'Asks for remote access to your phone or computer',
      'Number found on unofficial listing sites or social media'
    ],
    howItWorks: 'Scammers create fake customer care numbers for banks, e-commerce sites, and service providers. They ensure these numbers appear in Google search results through fake websites. When victims call these numbers, the scammers pose as support agents and ask for sensitive information, or ask victims to install remote access apps to "fix" the issue — giving them full control of the device.',
    exampleScenario: 'Deepa had a problem with her Flipkart order. She Googled "Flipkart customer care number" and called the first result. The fake agent asked her to install AnyDesk for "technical support." Once installed, the scammer accessed her phone, opened her banking app, and transferred ₹28,000.',
    prevention: [
      'Always find customer care numbers from the official company website or app',
      'Never install remote access apps at anyone\'s request',
      'Do not trust customer care numbers from Google search results',
      'Legitimate support never asks for banking passwords or OTPs',
      'Save official customer care numbers of services you frequently use'
    ],
    whatToDo: [
      'Uninstall any remote access apps immediately',
      'Change all passwords from a different device',
      'Contact your bank to block your accounts/cards',
      'Report to cybercrime.gov.in',
      'Report the fake number to the real company'
    ],
    whereToReport: [
      'National Cyber Crime Portal: cybercrime.gov.in',
      'Cyber Crime Helpline: 1930',
      'Google (report the misleading search result)'
    ],
    officialResources: [
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' }
    ],
    lastReviewed: '2026-07-15',
    isPublished: true
  },
  {
    id: 'scam-10',
    title: 'Fake Government Notice / E-Challan Scam',
    slug: 'fake-government-notice-scam',
    category: 'Fake Government Notice',
    description: 'Scammers send fake government notices, tax demands, or traffic e-challans via SMS/email with payment links that steal money or personal data.',
    riskLevel: 'medium',
    warningSigns: [
      'SMS about traffic e-challan with a payment link',
      'Email claiming to be from Income Tax, GST, or other departments with download link',
      'Notice threatening legal action unless payment is made immediately',
      'Payment requested via UPI to personal accounts (not government accounts)',
      'Generic messages without specific case/challan numbers'
    ],
    howItWorks: 'Scammers send mass SMS/email messages mimicking government departments. These include fake traffic e-challans, tax notices, or legal summons. The messages contain links to fake payment portals or malware-laden attachments. Victims who pay through these links send money directly to scammers.',
    exampleScenario: 'Vikram received an SMS: "Your vehicle KA-01-AB-1234 has an unpaid e-challan of ₹2,500. Pay now to avoid license suspension: [fake link]." The link led to a convincing fake government website where Vikram entered his card details and lost ₹15,000.',
    prevention: [
      'Check e-challans only on official traffic police websites or apps',
      'Government payments are made through official portals, not personal UPI IDs',
      'Verify tax notices on the Income Tax Department\'s e-filing portal',
      'Do not download attachments from unknown senders claiming to be government',
      'When in doubt, visit the relevant government office in person'
    ],
    whatToDo: [
      'Do not click any payment links',
      'Verify the notice through official channels',
      'Report to cybercrime.gov.in',
      'If you made a payment, contact your bank immediately',
      'Report to the government department being impersonated'
    ],
    whereToReport: [
      'National Cyber Crime Portal: cybercrime.gov.in',
      'PIB Fact Check (WhatsApp): +91-8799711259',
      'Cyber Crime Helpline: 1930'
    ],
    officialResources: [
      { name: 'PIB Fact Check', url: 'https://factcheck.pib.gov.in' },
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' },
      { name: 'e-Challan Parivahan', url: 'https://echallan.parivahan.gov.in' }
    ],
    lastReviewed: '2026-07-20',
    isPublished: true
  },
  {
    id: 'scam-11',
    title: 'Loan App & Quick Loan Scam',
    slug: 'loan-app-scam',
    category: 'Loan Scam',
    description: 'Predatory loan apps offer quick loans with hidden charges, then use harassment and threats for recovery, often accessing personal contacts and photos.',
    riskLevel: 'high',
    warningSigns: [
      'Instant loan approval with no documentation',
      'App requests access to all contacts, photos, and files',
      'Extremely high interest rates hidden in fine print',
      'Loan amount received is much less than shown (processing fees deducted)',
      'Threatening messages to contacts if repayment is late',
      'App not listed on RBI\'s registered NBFC list'
    ],
    howItWorks: 'Illegal loan apps offer instant, small loans (₹5,000-₹50,000) with minimal paperwork. They require access to your phone contacts, gallery, and messages. The actual disbursed amount is far less than promised due to hidden fees. If you miss payments, they harass you by calling your contacts, sending threatening messages, or even morphing and sharing your photos.',
    exampleScenario: 'Sanjay downloaded a "Quick Cash" app and borrowed ₹10,000. He received only ₹7,000 after deductions. The repayment amount was ₹15,000 due in 7 days. When he couldn\'t pay, the app accessed his contacts and sent abusive messages to his family and colleagues, causing severe humiliation.',
    prevention: [
      'Only borrow from RBI-registered banks and NBFCs',
      'Check the RBI website for the list of authorized lenders',
      'Never grant access to contacts, photos, or files to a loan app',
      'Read all terms and conditions before accepting any loan',
      'Be suspicious of "instant approval" with no documentation'
    ],
    whatToDo: [
      'Report the app on Google Play Store/App Store',
      'File a complaint with RBI Ombudsman',
      'Report to cybercrime.gov.in',
      'If you are being harassed, file a police complaint',
      'Contact a legal aid center for assistance'
    ],
    whereToReport: [
      'RBI Complaints: cms.rbi.org.in',
      'National Cyber Crime Portal: cybercrime.gov.in',
      'Google Play Store (report the app)',
      'Local Police'
    ],
    officialResources: [
      { name: 'RBI Sachet (Financial Fraud)', url: 'https://sachet.rbi.org.in' },
      { name: 'RBI Ombudsman', url: 'https://cms.rbi.org.in' },
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' }
    ],
    lastReviewed: '2026-08-01',
    isPublished: true
  },
  {
    id: 'scam-12',
    title: 'Social Media Scam',
    slug: 'social-media-scam',
    category: 'Social Media Scam',
    description: 'Scammers use hacked or cloned social media accounts to impersonate friends or family, requesting urgent money transfers.',
    riskLevel: 'medium',
    warningSigns: [
      'Friend or family member suddenly asks for money via social media DM',
      'Message from a friend\'s "new" account asking for help',
      'Requests to click unknown links shared via social media',
      'Offers of free products, giveaways, or investment opportunities',
      'Romance scams — online relationships leading to financial requests'
    ],
    howItWorks: 'Scammers hack social media accounts or create cloned profiles of your friends/family. They message you with urgent requests for money, claiming an emergency. They may also create fake giveaways, investment groups, or shopping pages to collect payments for products that don\'t exist.',
    exampleScenario: 'Kavita received a WhatsApp message from her cousin\'s number: "I\'m stuck at the hospital with a friend. Can you urgently transfer ₹20,000? I\'ll return it tomorrow." She transferred the money, only to find out later that her cousin\'s WhatsApp account had been hacked.',
    prevention: [
      'Always verify unusual requests by calling the person directly',
      'Don\'t accept friend requests from people you already have on your list',
      'Be cautious of links shared via social media messages',
      'Use strong, unique passwords for each social media account',
      'Enable two-factor authentication on all accounts'
    ],
    whatToDo: [
      'Contact the person whose identity was used through a different channel',
      'Report the fake/hacked account to the social media platform',
      'Report to cybercrime.gov.in',
      'If you transferred money, contact your bank',
      'Warn your mutual contacts'
    ],
    whereToReport: [
      'Social media platform\'s reporting feature',
      'National Cyber Crime Portal: cybercrime.gov.in',
      'Cyber Crime Helpline: 1930'
    ],
    officialResources: [
      { name: 'National Cyber Crime Portal', url: 'https://cybercrime.gov.in' },
      { name: 'CERT-In', url: 'https://www.cert-in.org.in' }
    ],
    lastReviewed: '2026-07-30',
    isPublished: true
  }
];
