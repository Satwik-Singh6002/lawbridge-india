export interface LawEntry {
  title: string;
  description: string;
  section?: string;
  type: "constitutional" | "statutory" | "ipc" | "special";
}

export interface LegalCategoryData {
  slug: string;
  label: string;
  subtitle: string;
  description: string;
  laws: LawEntry[];
  fundamentalRights: string[];
  keyJudgments: { name: string; year: string; summary: string }[];
}

export const legalCategoriesData: Record<string, LegalCategoryData> = {
  "rape-sexual-assault": {
    slug: "rape-sexual-assault",
    label: "Rape & Sexual Assault",
    subtitle: "POCSO, IPC 375-376",
    description: "Comprehensive legal framework protecting individuals from sexual violence in India.",
    laws: [
      { title: "IPC Section 375 – Definition of Rape", section: "375", description: "Defines rape and the conditions under which sexual intercourse constitutes rape, including lack of consent, consent obtained by coercion, and statutory rape.", type: "ipc" },
      { title: "IPC Section 376 – Punishment for Rape", section: "376", description: "Prescribes rigorous imprisonment of not less than 10 years, extendable to life imprisonment, and fine.", type: "ipc" },
      { title: "IPC Section 376A – Punishment for causing death or persistent vegetative state", section: "376A", description: "If the victim dies or is left in a persistent vegetative state, the offender faces imprisonment of not less than 20 years or death.", type: "ipc" },
      { title: "IPC Section 376AB – Rape of woman under 12 years", section: "376AB", description: "Minimum 20 years rigorous imprisonment, extendable to life or death penalty.", type: "ipc" },
      { title: "IPC Section 376D – Gang Rape", section: "376D", description: "Each person involved faces minimum 20 years rigorous imprisonment, extendable to life.", type: "ipc" },
      { title: "POCSO Act 2012 – Protection of Children from Sexual Offences", section: "POCSO", description: "Special law to protect children below 18 years from sexual abuse and exploitation. Defines penetrative and aggravated sexual assault with stringent punishments.", type: "special" },
      { title: "Criminal Law (Amendment) Act, 2013 (Nirbhaya Act)", section: "Amendment", description: "Expanded definition of rape, introduced stalking, voyeurism, acid attacks as offences. Increased minimum sentences.", type: "statutory" },
      { title: "Sexual Harassment of Women at Workplace Act, 2013", section: "POSH", description: "Mandates Internal Complaints Committee in workplaces, defines sexual harassment, provides redressal mechanism.", type: "special" },
    ],
    fundamentalRights: [
      "Article 14 – Right to Equality: Equal protection of law for all persons.",
      "Article 15(3) – Special provisions for women and children.",
      "Article 21 – Right to Life and Personal Liberty: Includes right to live with dignity.",
      "Article 39(e) – Health and strength of workers not to be abused.",
      "Article 42 – Just and humane conditions of work.",
    ],
    keyJudgments: [
      { name: "Vishaka v. State of Rajasthan", year: "1997", summary: "Supreme Court laid down guidelines to prevent sexual harassment at workplace, which later became the POSH Act." },
      { name: "Mukesh & Anr v. State (Nirbhaya Case)", year: "2017", summary: "Supreme Court upheld death sentence for the convicts in the 2012 Delhi gang rape case." },
      { name: "Independent Thought v. Union of India", year: "2017", summary: "Marital rape of minor wife (15-18 years) was criminalized by reading down IPC Exception 2 to Section 375." },
    ],
  },
  "scam-fraud": {
    slug: "scam-fraud",
    label: "Scam & Fraud",
    subtitle: "Prevention of Corruption Act",
    description: "Laws addressing financial fraud, corruption, cheating, and white-collar crimes in India.",
    laws: [
      { title: "IPC Section 415 – Cheating", section: "415", description: "Whoever deceives any person and induces them to deliver property or consent to retention, is guilty of cheating.", type: "ipc" },
      { title: "IPC Section 420 – Cheating and dishonestly inducing delivery of property", section: "420", description: "Punishment up to 7 years imprisonment and fine for cheating with delivery of property.", type: "ipc" },
      { title: "IPC Section 406 – Criminal Breach of Trust", section: "406", description: "Punishment up to 3 years imprisonment for misappropriation of entrusted property.", type: "ipc" },
      { title: "Prevention of Corruption Act, 1988", section: "PCA", description: "Criminalizes bribery and corruption by public servants. Defines offences of taking gratification, criminal misconduct, and abetting corruption.", type: "special" },
      { title: "Prevention of Money Laundering Act, 2002 (PMLA)", section: "PMLA", description: "Prevents money laundering and provides for confiscation of property derived from money laundering.", type: "special" },
      { title: "Benami Transactions (Prohibition) Amendment Act, 2016", section: "Benami", description: "Prohibits benami transactions and provides for confiscation of benami property.", type: "special" },
      { title: "Companies Act 2013 – Fraud Provisions", section: "447", description: "Section 447 defines fraud in corporate context with punishment up to 10 years and fine up to 3x the fraud amount.", type: "statutory" },
    ],
    fundamentalRights: [
      "Article 14 – Right to Equality: No person is above the law.",
      "Article 19(1)(g) – Right to practice any profession, but subject to reasonable restrictions.",
      "Article 21 – Right to Life: Includes right to livelihood which fraud can deprive.",
      "Article 300A – Right to Property: No person shall be deprived of property save by authority of law.",
    ],
    keyJudgments: [
      { name: "State of Maharashtra v. Mohd. Yakub", year: "1980", summary: "Court clarified the standard of proof and investigation process in economic offences." },
      { name: "Subramanian Swamy v. A. Raja (2G Spectrum Case)", year: "2012", summary: "Supreme Court cancelled 122 telecom licenses in one of India's largest corruption cases." },
      { name: "Sahara India v. SEBI", year: "2012", summary: "Court ordered refund of ₹24,000 crore to investors in a major financial fraud case." },
    ],
  },
  "kidnapping-abduction": {
    slug: "kidnapping-abduction",
    label: "Kidnapping & Abduction",
    subtitle: "IPC 359-369",
    description: "Laws dealing with kidnapping, abduction, and wrongful confinement under Indian Penal Code.",
    laws: [
      { title: "IPC Section 359 – Kidnapping", section: "359", description: "Defines two types: kidnapping from India (Section 360) and kidnapping from lawful guardianship (Section 361).", type: "ipc" },
      { title: "IPC Section 360 – Kidnapping from India", section: "360", description: "Conveying any person beyond the limits of India without consent.", type: "ipc" },
      { title: "IPC Section 361 – Kidnapping from lawful guardianship", section: "361", description: "Taking a minor (under 16 male, under 18 female) or unsound person out of guardianship without consent.", type: "ipc" },
      { title: "IPC Section 362 – Abduction", section: "362", description: "Compelling or inducing a person by force or deceit to go from any place.", type: "ipc" },
      { title: "IPC Section 363 – Punishment for Kidnapping", section: "363", description: "Imprisonment up to 7 years and fine.", type: "ipc" },
      { title: "IPC Section 363A – Kidnapping for begging", section: "363A", description: "Imprisonment up to 10 years and fine for kidnapping a minor for begging.", type: "ipc" },
      { title: "IPC Section 364 – Kidnapping for murder", section: "364", description: "Imprisonment for life or rigorous imprisonment up to 10 years, and fine.", type: "ipc" },
      { title: "IPC Section 364A – Kidnapping for ransom", section: "364A", description: "Death or imprisonment for life if person is threatened with death or hurt.", type: "ipc" },
      { title: "IPC Section 365 – Kidnapping with intent to wrongfully confine", section: "365", description: "Imprisonment up to 7 years and fine.", type: "ipc" },
    ],
    fundamentalRights: [
      "Article 21 – Right to Life and Personal Liberty: No person shall be deprived of personal liberty except by procedure established by law.",
      "Article 22 – Protection against arrest and detention: Right to be informed of grounds, right to consult a lawyer.",
      "Article 23 – Prohibition of traffic in human beings and forced labour.",
      "Article 39(e) – Children are not abused and not forced by economic necessity.",
    ],
    keyJudgments: [
      { name: "S. Varadarajan v. State of Madras", year: "1965", summary: "Distinction between kidnapping and a minor going willingly was established by the Supreme Court." },
      { name: "State of Haryana v. Raja Ram", year: "1973", summary: "Court clarified consent of minor is immaterial in kidnapping from lawful guardianship." },
    ],
  },
  "murder-homicide": {
    slug: "murder-homicide",
    label: "Murder & Homicide",
    subtitle: "IPC 299-304",
    description: "Indian laws governing culpable homicide, murder, and related offences.",
    laws: [
      { title: "IPC Section 299 – Culpable Homicide", section: "299", description: "Causing death by an act done with intention, knowledge, or recklessness.", type: "ipc" },
      { title: "IPC Section 300 – Murder", section: "300", description: "Culpable homicide is murder if done with intention of causing death, or bodily injury likely to cause death, or if the act is so imminently dangerous.", type: "ipc" },
      { title: "IPC Section 302 – Punishment for Murder", section: "302", description: "Death penalty or imprisonment for life, and fine.", type: "ipc" },
      { title: "IPC Section 304 – Punishment for Culpable Homicide not amounting to Murder", section: "304", description: "Life imprisonment or up to 10 years, and fine.", type: "ipc" },
      { title: "IPC Section 304A – Death by Negligence", section: "304A", description: "Causing death by rash or negligent act – imprisonment up to 2 years, or fine, or both.", type: "ipc" },
      { title: "IPC Section 304B – Dowry Death", section: "304B", description: "If death of a woman occurs within 7 years of marriage under abnormal circumstances linked to dowry demand, minimum 7 years imprisonment.", type: "ipc" },
      { title: "IPC Section 306 – Abetment of Suicide", section: "306", description: "Imprisonment up to 10 years and fine for abetting suicide.", type: "ipc" },
      { title: "IPC Section 307 – Attempt to Murder", section: "307", description: "Imprisonment up to 10 years and fine; if hurt is caused, up to life imprisonment.", type: "ipc" },
    ],
    fundamentalRights: [
      "Article 21 – Right to Life and Personal Liberty: The most fundamental right – no person shall be deprived of life except by procedure established by law.",
      "Article 14 – Equality before law in prosecution and trial.",
      "Article 20 – Protection in respect of conviction for offences (no ex post facto law, no double jeopardy, no self-incrimination).",
      "Article 22 – Protection against arrest and detention.",
    ],
    keyJudgments: [
      { name: "Bachan Singh v. State of Punjab", year: "1980", summary: "Supreme Court upheld constitutionality of death penalty, establishing 'rarest of rare' doctrine." },
      { name: "Machhi Singh v. State of Punjab", year: "1983", summary: "Laid down guidelines for when death penalty should be imposed." },
      { name: "K.M. Nanavati v. State of Maharashtra", year: "1962", summary: "Landmark case distinguishing murder from culpable homicide not amounting to murder – last jury trial in India." },
    ],
  },
  "cybercrime": {
    slug: "cybercrime",
    label: "Cybercrime",
    subtitle: "IT Act 2000",
    description: "Laws combating cyber offences including hacking, data theft, online fraud, and cyber harassment.",
    laws: [
      { title: "IT Act Section 43 – Penalty for damage to computer system", section: "43", description: "Compensation up to ₹1 crore for unauthorized access, download, virus introduction, or damage to computer systems.", type: "special" },
      { title: "IT Act Section 66 – Computer related offences (Hacking)", section: "66", description: "Imprisonment up to 3 years or fine up to ₹5 lakh for dishonestly or fraudulently committing acts under Section 43.", type: "special" },
      { title: "IT Act Section 66B – Receiving stolen computer resource", section: "66B", description: "Imprisonment up to 3 years or fine up to ₹1 lakh.", type: "special" },
      { title: "IT Act Section 66C – Identity Theft", section: "66C", description: "Using electronic signature, password or unique identification of another person – imprisonment up to 3 years and fine up to ₹1 lakh.", type: "special" },
      { title: "IT Act Section 66D – Cheating by personation using computer resource", section: "66D", description: "Imprisonment up to 3 years and fine up to ₹1 lakh.", type: "special" },
      { title: "IT Act Section 66E – Violation of Privacy", section: "66E", description: "Publishing private images without consent – imprisonment up to 3 years or fine up to ₹2 lakh.", type: "special" },
      { title: "IT Act Section 66F – Cyber Terrorism", section: "66F", description: "Acts threatening unity, integrity, security or sovereignty of India through computer – imprisonment for life.", type: "special" },
      { title: "IT Act Section 67 – Publishing obscene material electronically", section: "67", description: "First conviction: 3 years and ₹5 lakh fine. Second conviction: 5 years and ₹10 lakh fine.", type: "special" },
      { title: "IT Act Section 72 – Breach of confidentiality and privacy", section: "72", description: "Imprisonment up to 2 years or fine up to ₹1 lakh for unauthorized disclosure of information.", type: "special" },
    ],
    fundamentalRights: [
      "Article 19(1)(a) – Freedom of Speech and Expression: Includes digital expression, but subject to reasonable restrictions under Article 19(2).",
      "Article 21 – Right to Privacy: Declared a fundamental right in K.S. Puttaswamy case (2017), extends to digital privacy.",
      "Article 19(1)(g) – Right to carry on trade/business online.",
    ],
    keyJudgments: [
      { name: "Shreya Singhal v. Union of India", year: "2015", summary: "Supreme Court struck down Section 66A of IT Act as unconstitutional for violating freedom of speech." },
      { name: "K.S. Puttaswamy v. Union of India", year: "2017", summary: "Right to privacy declared a fundamental right – significant implications for data protection and cybercrime." },
    ],
  },
  "domestic-violence": {
    slug: "domestic-violence",
    label: "Domestic Violence",
    subtitle: "DV Act 2005",
    description: "Legal protections for victims of domestic violence including physical, emotional, sexual, and economic abuse.",
    laws: [
      { title: "Protection of Women from Domestic Violence Act, 2005", section: "DV Act", description: "Comprehensive civil law covering physical, sexual, verbal, emotional, and economic abuse. Provides protection orders, residence orders, monetary relief, and custody orders.", type: "special" },
      { title: "IPC Section 498A – Cruelty by Husband or Relatives", section: "498A", description: "Husband or relative subjecting woman to cruelty – imprisonment up to 3 years and fine. Cognizable and non-bailable.", type: "ipc" },
      { title: "IPC Section 304B – Dowry Death", section: "304B", description: "Death within 7 years of marriage in abnormal circumstances related to dowry demand – minimum 7 years imprisonment.", type: "ipc" },
      { title: "Dowry Prohibition Act, 1961", section: "Dowry Act", description: "Giving or taking dowry punishable with imprisonment of not less than 5 years and fine of ₹15,000 or amount of dowry, whichever is more.", type: "special" },
      { title: "IPC Section 354 – Assault or criminal force on woman with intent to outrage modesty", section: "354", description: "Imprisonment from 1 to 5 years and fine.", type: "ipc" },
      { title: "IPC Section 509 – Word, gesture or act intended to insult modesty of woman", section: "509", description: "Simple imprisonment up to 3 years and fine.", type: "ipc" },
    ],
    fundamentalRights: [
      "Article 14 – Right to Equality before law.",
      "Article 15(3) – State can make special provisions for women.",
      "Article 21 – Right to Life with Dignity: Includes right to live free from violence.",
      "Article 39(a) – Right to adequate means of livelihood.",
      "Article 42 – Just and humane conditions of work and maternity relief.",
    ],
    keyJudgments: [
      { name: "Arnesh Kumar v. State of Bihar", year: "2014", summary: "Supreme Court laid guidelines to prevent automatic arrests under Section 498A to curb misuse." },
      { name: "Rajesh Sharma v. State of UP", year: "2017", summary: "Court constituted family welfare committees to examine complaints under Section 498A before arrest." },
      { name: "Hiral P. Harsora v. Kusum Narottamdas", year: "2016", summary: "Supreme Court struck down 'adult male' requirement for respondent under DV Act, allowing complaints against women too." },
    ],
  },
  "consumer-grievances": {
    slug: "consumer-grievances",
    label: "Consumer Grievances",
    subtitle: "Consumer Protection Act 2019",
    description: "Laws protecting consumer rights against defective goods, deficient services, unfair trade practices, and misleading advertisements.",
    laws: [
      { title: "Consumer Protection Act, 2019", section: "CPA 2019", description: "Replaces 1986 Act. Establishes 3-tier consumer dispute redressal commissions (District, State, National). Covers e-commerce, product liability, and misleading ads.", type: "special" },
      { title: "Consumer Rights under CPA 2019", section: "Section 2(9)", description: "Six consumer rights: Right to safety, right to be informed, right to choose, right to be heard, right to seek redressal, and right to consumer education.", type: "special" },
      { title: "Product Liability – CPA 2019 Chapter VI", section: "Chapter VI", description: "Manufacturers, sellers, and service providers liable for harm caused by defective products or deficient services.", type: "special" },
      { title: "Central Consumer Protection Authority (CCPA)", section: "CCPA", description: "Regulatory authority to protect consumer rights, investigate violations, order recalls, impose penalties for misleading advertisements.", type: "special" },
      { title: "E-Commerce Rules 2020 (Consumer Protection)", section: "E-Commerce", description: "Mandates sellers to display country of origin, return/refund/exchange policy, and grievance officer details.", type: "statutory" },
      { title: "Food Safety and Standards Act, 2006 (FSSAI)", section: "FSSAI", description: "Regulates food safety standards, prohibits sale of sub-standard or adulterated food, penalties for violations.", type: "special" },
    ],
    fundamentalRights: [
      "Article 14 – Right to Equality: Equal protection for all consumers.",
      "Article 19(1)(g) – Right to practice any profession, trade or business – but traders must not engage in unfair practices.",
      "Article 21 – Right to Life: Includes right to safe food, medicines, and products.",
      "Article 21A – Right to Education: Includes consumer education.",
    ],
    keyJudgments: [
      { name: "Indian Medical Association v. V.P. Shantha", year: "1995", summary: "Medical services fall under Consumer Protection Act – patients can file complaints for medical negligence." },
      { name: "Lucknow Development Authority v. M.K. Gupta", year: "1994", summary: "Housing construction and allotment is a 'service' under Consumer Protection Act." },
      { name: "Ambrish Kumar Shukla v. Ferrero Rocher", year: "2015", summary: "National Commission addressed misleading advertisement claims by food companies." },
    ],
  },
  "parliamentary-law": {
    slug: "parliamentary-law",
    label: "Parliamentary Law",
    subtitle: "Anti-Defection & Privilege",
    description: "Constitutional provisions and laws governing parliamentary proceedings, anti-defection, and legislative privileges.",
    laws: [
      { title: "Tenth Schedule – Anti-Defection Law", section: "10th Schedule", description: "Added by 52nd Amendment (1985). A member is disqualified if they voluntarily give up party membership or vote against party whip. Decision by Speaker/Chairman.", type: "constitutional" },
      { title: "Article 105 – Powers, privileges and immunities of Parliament", section: "Art 105", description: "Freedom of speech in Parliament, immunity from court proceedings for anything said or vote given in Parliament.", type: "constitutional" },
      { title: "Article 194 – Powers, privileges of State Legislatures", section: "Art 194", description: "Similar privileges for state legislature members as Parliament members.", type: "constitutional" },
      { title: "Article 75(3) – Collective Responsibility", section: "Art 75(3)", description: "Council of Ministers collectively responsible to the House of the People (Lok Sabha).", type: "constitutional" },
      { title: "Article 100 – Voting in Houses, quorum", section: "Art 100", description: "All questions decided by majority of votes. Speaker does not vote in first instance but has casting vote in case of tie.", type: "constitutional" },
      { title: "Article 110 – Definition of Money Bills", section: "Art 110", description: "Bill dealing with taxation, borrowing, appropriation from Consolidated Fund – Speaker's decision is final.", type: "constitutional" },
      { title: "Article 112 – Annual Financial Statement (Budget)", section: "Art 112", description: "President causes to be laid before Parliament a statement of estimated receipts and expenditure.", type: "constitutional" },
      { title: "Representation of the People Act, 1951", section: "RPA 1951", description: "Governs elections, qualifications, disqualifications, corrupt practices, and election disputes.", type: "statutory" },
    ],
    fundamentalRights: [
      "Article 19(1)(a) – Freedom of Speech: Foundational to parliamentary debate.",
      "Article 14 – Equality before Law: Applies to all, including legislators (outside Parliament).",
      "Article 326 – Elections on basis of adult suffrage: Every citizen above 18 has right to vote.",
      "Article 21 – Right to Life: Right to vote is a statutory right, but right to stand for election is a constitutional right.",
    ],
    keyJudgments: [
      { name: "Kihoto Hollohan v. Zachillhu", year: "1992", summary: "Supreme Court upheld validity of Tenth Schedule but held Speaker's decision is subject to judicial review." },
      { name: "Raja Ram Pal v. Hon'ble Speaker", year: "2007", summary: "Court upheld Parliament's power to expel members but said it is subject to judicial review on grounds of illegality." },
      { name: "Keisham Meghachandra Singh v. Hon'ble Speaker", year: "2020", summary: "Supreme Court suggested that anti-defection disqualification should be decided by an independent tribunal, not the Speaker." },
    ],
  },
};
