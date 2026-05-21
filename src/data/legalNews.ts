export interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  content?: string;
  tags: string[];
  sourceUrl?: string;
  sourceName?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Nirbhaya Case: Supreme Court Upholds Death Penalty for All Four Convicts",
    category: "Criminal Law",
    date: "2020",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&h=400&fit=crop",
    summary: "The landmark 2012 Delhi gang rape case that led to sweeping criminal law reforms including the Criminal Law (Amendment) Act, 2013 and major amendments to the IPC and CrPC. All four convicts were executed in March 2020.",
    content: "The Supreme Court of India dismissed the final review petitions filed by the convicts in the 2012 Delhi gang rape and murder case. A three-judge bench, led by Justice AM Khanwilkar, upheld the death sentence awarded by the High Court and the trial court. The case, which shook the nation's conscience, resulted in the establishment of the Justice Verma Committee and subsequent legal amendments to strengthen laws against sexual offenses. The execution took place at Tihar Jail on March 20, 2020.",
    tags: ["IPC 376", "IPC 302", "Criminal Reform", "Amendment Act 2013"],
    sourceUrl: "https://www.aajtak.in/national/story/nirbhaya-case-timeline-what-happened-since-december-16-2012-court-verdict-tihar-jail-execution-1037624-2020-03-20",
    sourceName: "Aaj Tak"
  },
  {
    id: 2,
    title: "Ayodhya Verdict: SC Awards Disputed Land for Ram Temple Construction",
    category: "Constitutional Law",
    date: "2019",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
    summary: "A five-judge Constitution bench unanimously ruled in the decades-old Babri Masjid-Ram Janmabhoomi title dispute, invoking Article 142 of the Constitution to award the disputed site to a Hindu trust and direct 5 acres of alternate land for a mosque.",
    content: "In a historic unanimous judgment, the Supreme Court of India resolved the long-standing religious and land dispute in Ayodhya. The bench, headed by Chief Justice Ranjan Gogoi, invoked Article 142 of the Constitution to ensure 'complete justice.' While the court acknowledged the illegality of the 1992 mosque demolition, it ruled that the evidentiary weight favored the Hindu community's claim to the core site. The Central Government was directed to form a trust for temple construction.",
    tags: ["Article 142", "Civil Dispute", "Land Title", "Places of Worship Act"],
    sourceUrl: "https://www.bhaskar.com/national/news/supreme-court-ayodhya-verdict-live-updates-01683416.html",
    sourceName: "Dainik Bhaskar"
  },
  {
    id: 3,
    title: "Bilkis Bano Case: SC Quashes Remission of 11 Convicts",
    category: "Criminal Law",
    date: "2024",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    summary: "The Supreme Court overturned the premature release of 11 convicts in the 2002 Gujarat riots gang rape and murder case, ruling under Sections 432 and 433 of the CrPC that the Gujarat government lacked the jurisdiction to grant remission.",
    content: "The Supreme Court delivered a stern rebuff to the Gujarat government's decision to grant remission to 11 men convicted of the gang rape of Bilkis Bano and the murder of her family members during the 2002 riots. The court held that the state of Gujarat lacked the jurisdiction to grant remission, as the trial had taken place in Maharashtra. The judgment emphasized that the 'rule of law' must prevail over executive discretion and ordered the convicts to return to jail within two weeks.",
    tags: ["CrPC 432", "IPC 376", "Remission Policy", "Jurisdiction"],
    sourceUrl: "https://www.news18.com/india/bilkis-bano-case-live-updates-supreme-court-verdict-remission-of-convicts-gujarat-government-8731114.html",
    sourceName: "News18 India"
  },
  {
    id: 4,
    title: "Article 370 Abrogation Upheld by Supreme Court",
    category: "Constitutional Law",
    date: "2023",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&h=400&fit=crop",
    summary: "A five-judge bench unanimously upheld the Centre's 2019 decision to abrogate Article 370, which granted special status to Jammu & Kashmir, and validated the Jammu and Kashmir Reorganisation Act, 2019.",
    content: "The Constitution Bench, led by Chief Justice DY Chandrachud, validated the constitutional validity of the Presidential orders that rendered Article 370 inoperative. The court ruled that Article 370 was a 'temporary provision' and that the state of Jammu & Kashmir did not retain any element of sovereignty after its accession to India. While upholding the move, the court also emphasized the need for restoration of statehood and directed the Election Commission to conduct legislative assembly elections.",
    tags: ["Article 370", "Article 1", "Federalism", "Reorganisation Act"],
    sourceUrl: "https://www.aajtak.in/india/story/supreme-court-verdict-on-article-370-jammu-kashmir-live-updates-ntc-1834240-2023-12-11",
    sourceName: "Aaj Tak"
  },
  {
    id: 5,
    title: "Electoral Bonds Scheme Struck Down as Unconstitutional",
    category: "Election Law",
    date: "2024",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
    summary: "The Supreme Court unanimously struck down the Electoral Bonds scheme as violative of the right to information under Article 19(1)(a) and the principle of equality under Article 14 of the Constitution.",
    content: "A five-judge bench declared the Electoral Bonds scheme as 'unconstitutional' and 'arbitrary.' The court held that the anonymous nature of the bonds violated the citizens' fundamental right to know the funding of political parties. The State Bank of India was ordered to stop issuing bonds immediately and to submit details of all transactions to the Election Commission for public disclosure. The ruling is seen as a significant win for transparency in political funding.",
    tags: ["Article 19", "Article 14", "RTI Act", "Electoral Reform"],
    sourceUrl: "https://www.bhaskar.com/national/news/supreme-court-decision-on-electoral-bond-scheme-live-updates-132588147.html",
    sourceName: "Dainik Bhaskar"
  },
  {
    id: 6,
    title: "Bulldozer Demolitions: SC Lays Down Nationwide Guidelines",
    category: "Property Law",
    date: "2024",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    summary: "The Supreme Court issued pan-India guidelines against arbitrary demolitions of properties of accused persons, invoking Article 21 and the right to shelter to declare that executive cannot act as a judge.",
    tags: ["Article 21", "Due Process", "Property Rights", "Right to Shelter"],
    sourceUrl: "https://www.aajtak.in/india/story/supreme-court-guidelines-on-bulldozer-action-demolition-rules-news-updates-1965383-2024-11-13",
    sourceName: "Aaj Tak"
  },
  {
    id: 7,
    title: "Unnao Rape Case: Life Imprisonment for Former MLA Kuldeep Sengar",
    category: "Criminal Law",
    date: "2019",
    image: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=600&h=400&fit=crop",
    summary: "A Delhi court convicted former MLA Kuldeep Singh Sengar for raping a minor under the POCSO Act and Section 376 of the IPC, sentencing him to life imprisonment.",
    tags: ["POCSO Act", "IPC 376", "IPC 120B", "Political Crime"],
    sourceUrl: "https://www.bhaskar.com/uttar-pradesh/lucknow/news/unnao-rape-case-kuldeep-singh-sengar-sentenced-life-imprisonment-supreme-court-updates-126336338.html",
    sourceName: "Dainik Bhaskar"
  },
  {
    id: 8,
    title: "Same-Sex Marriage Petition: SC Declines Legal Recognition",
    category: "Civil Rights",
    date: "2023",
    image: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=600&h=400&fit=crop",
    summary: "A five-judge Constitution bench declined to legally recognize same-sex marriages under the Special Marriage Act, 1954 but recognized the right of queer couples to cohabit and receive equal state protection.",
    tags: ["Article 21", "Article 14", "Special Marriage Act", "LGBTQ Rights"],
    sourceUrl: "https://www.aajtak.in/national/story/supreme-court-same-sex-marriage-verdict-live-updates-dy-chandrachud-1801222-2023-10-17",
    sourceName: "Aaj Tak"
  },
  {
    id: 9,
    title: "Kesavananda Bharati: The Basic Structure Doctrine Landmark Judgment",
    category: "Constitutional Law",
    date: "1973",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000",
    summary: "In one of the most critical cases in Indian history, a 13-judge bench established that while Parliament has wide amending powers under Article 368, it cannot alter the Basic Structure of the Constitution.",
    content: "In Kesavananda Bharati v. State of Kerala, a historic 13-judge Constitution Bench—the largest in the Supreme Court's history—ruled by a 7-6 majority that while Parliament has wide powers to amend the Constitution under Article 368, it cannot amend or alter its 'basic structure'. The basic structure includes essential tenets such as democracy, secularism, federalism, the rule of law, and judicial review. This judgment successfully prevented arbitrary amendments to the Constitution and preserved the balance of power between the legislature and the judiciary.",
    tags: ["Article 368", "Basic Structure", "Judicial Review", "Amendment Limit"],
    sourceUrl: "https://www.aajtak.in/education/knowledge/story/what-is-kesavananda-bharati-case-basic-structure-of-constitution-legal-updates-lcl-1786524-2023-09-24",
    sourceName: "Aaj Tak"
  },
  {
    id: 10,
    title: "Triple Talaq Case: SC Strikes Down Instant Divorce as Unconstitutional",
    category: "Civil Rights",
    date: "2017",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1000",
    summary: "The Supreme Court declared instant Triple Talaq (Talaq-e-Biddat) as unconstitutional, citing violations of Articles 14 and 15, which later led to the Muslim Women Protection Act, 2019.",
    content: "In Shayara Bano v. Union of India, a 5-judge Constitution Bench struck down the practice of instant triple talaq (talaq-e-biddat) by a 3-2 majority. The court ruled that the practice violated Article 14 (Right to Equality) and Article 15 (Prohibition of discrimination) of the Constitution of India, as it was arbitrary, unilateral, and gender-discriminatory. Following this historic judgment, the Indian Parliament enacted the Muslim Women (Protection of Rights on Marriage) Act, 2019, which officially criminalized the practice of instant triple talaq.",
    tags: ["Article 14", "Article 15", "Muslim Women Act", "Gender Equality"],
    sourceUrl: "https://www.bhaskar.com/national/news/triple-talaq-bill-passed-in-parliament-updates-01602766.html",
    sourceName: "Dainik Bhaskar"
  },
  {
    id: 11,
    title: "Adultery Decriminalization: SC Strikes Down Section 497 of IPC",
    category: "Civil Rights",
    date: "2018",
    image: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?q=80&w=1000",
    summary: "The Supreme Court declared Section 497 of the IPC (Adultery) as unconstitutional and patriarchal, noting it violated Articles 14, 15, and 21 by treating a woman as the property of her husband.",
    content: "In Joseph Shine v. Union of India, a five-judge Constitution Bench unanimously struck down Section 497 of the Indian Penal Code (IPC) alongside Section 198(2) of the Code of Criminal Procedure (CrPC). The court declared that Section 497 was gender-biased and treated married women as the chattel (property) of their husbands, thereby violating Articles 14 (equality), 15 (non-discrimination), and 21 (dignity and privacy) of the Constitution. However, the court clarified that adultery remains a valid ground for civil remedies such as divorce.",
    tags: ["Section 497 IPC", "Article 14", "Article 21", "Women Dignity"],
    sourceUrl: "https://www.aajtak.in/national/story/sc-historic-verdict-on-adultery-ipc-section-497-unconstitutional-d-y-chandrachud-563229-2018-09-27",
    sourceName: "Aaj Tak"
  },
  {
    id: 12,
    title: "Right to Privacy: SC Declares Privacy a Fundamental Right",
    category: "Privacy Law",
    date: "2017",
    image: "/privacy_law.png",
    summary: "A nine-judge bench unanimously ruled that the Right to Privacy is a fundamental right protected under Article 21, life and personal liberty, of the Constitution.",
    content: "In Justice K.S. Puttaswamy (Retd.) v. Union of India, a nine-judge Constitution Bench of the Supreme Court of India unanimously held that the Right to Privacy is an integral part of the Right to Life and Personal Liberty guaranteed under Article 21 of the Constitution. The judgment overruled previous long-standing rulings in M.P. Sharma (1954) and Kharak Singh (1962), establishing that privacy encompasses bodily autonomy, informational privacy, and spatial privacy.",
    tags: ["Article 21", "Right to Privacy", "Aadhaar Act", "Information Security"],
    sourceUrl: "https://www.aajtak.in/national/news/story/supreme-court-historic-verdict-on-right-to-privacy-aadhaar-card-947703-2017-08-24",
    sourceName: "Aaj Tak"
  },
  {
    id: 13,
    title: "Homosexuality Decriminalization: SC Strikes Down Section 377 IPC",
    category: "Civil Rights",
    date: "2018",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&w=1000",
    summary: "The Supreme Court read down Section 377 of the Indian Penal Code, decriminalizing consensual adult homosexual relationships, upholding Articles 14, 15, 19, and 21.",
    content: "In Navtej Singh Johar v. Union of India, a five-judge Constitution Bench unanimously ruled that Section 377 of the Indian Penal Code (IPC) was unconstitutional to the extent that it criminalized consensual sexual acts of adults in private. The court ruled that the section violated Article 14 (Equality), Article 15 (Non-discrimination), Article 19 (Freedom of expression), and Article 21 (Right to life and dignity) of LGBTQ+ citizens. The judges famously noted, 'History owes an apology to the members of this community.'",
    tags: ["Section 377 IPC", "Article 21", "LGBTQ Rights", "Human Rights"],
    sourceUrl: "https://www.aajtak.in/india/story/supreme-court-verdict-on-section-377-homosexuality-article-377-548480-2018-09-06",
    sourceName: "Aaj Tak"
  },
  {
    id: 14,
    title: "Vishaka Case: Landmark Guidelines Against Sexual Harassment at Workplace",
    category: "Civil Rights",
    date: "1997",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=600&fit=crop",
    summary: "A landmark judgment where the SC defined sexual harassment at the workplace and laid down the historic 'Vishaka Guidelines', which were later codified into the POSH Act of 2013.",
    content: "In Vishaka & Others v. State of Rajasthan, a three-judge bench of the Supreme Court of India led by Chief Justice J.S. Verma formulated guidelines to address sexual harassment in work environments. In the absence of legislative enactment, the court invoked Article 141 and international conventions like CEDAW to design these binding rules. This case established that sexual harassment is a clear violation of Articles 14, 15, and 21 of the Constitution, establishing safety and equality as fundamental rights for women at work.",
    tags: ["Vishaka Guidelines", "Article 21", "POSH Act", "Gender Equality"],
    sourceUrl: "https://www.bhaskar.com/uttar-pradesh/lucknow/news/vishaka-guidelines-what-is-posh-act-and-rules-for-women-safety-at-workplace-127814421.html",
    sourceName: "Dainik Bhaskar"
  },
  {
    id: 15,
    title: "Maneka Gandhi v. Union of India: Expansion of Personal Liberty under Article 21",
    category: "Constitutional Law",
    date: "1978",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop",
    summary: "The Supreme Court greatly expanded the meaning of Article 21 (Right to Life and Personal Liberty), ruling that any law depriving personal liberty must be 'just, fair, and reasonable' rather than merely existing.",
    content: "In Maneka Gandhi v. Union of India, the seven-judge bench of the Supreme Court evaluated the impoundment of the petitioner's passport under the Passport Act. The court famously ruled that 'Personal Liberty' under Article 21 has the widest amplitude and includes the right to travel abroad. Crucially, the judgment imported the American doctrine of 'Due Process of Law' into Indian jurisprudence, stating that procedure depriving life or liberty must not be arbitrary, but must be just, fair, and reasonable.",
    tags: ["Article 21", "Personal Liberty", "Due Process", "Passport Act"],
    sourceUrl: "https://www.aajtak.in/national/story/maneka-gandhi-passport-case-supreme-court-verdict-on-article-21-right-to-life-history-1789524-2023-09-29",
    sourceName: "Aaj Tak"
  },
  {
    id: 16,
    title: "Shreya Singhal v. Union of India: Striking Down Section 66A of the IT Act",
    category: "Privacy Law",
    date: "2015",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    summary: "A historic free speech judgment where the Supreme Court struck down Section 66A of the Information Technology Act, 2000, which allowed arrests for offensive online posts, calling it vague and overbroad.",
    content: "In Shreya Singhal v. Union of India, a two-judge bench of the Supreme Court struck down Section 66A of the IT Act in its entirety. The court held that the provision went far beyond reasonable restrictions on free speech allowed under Article 19(2). It ruled that the section was unconstitutionally vague, creating a 'chilling effect' on free speech and expression online. The court distinguished between 'discussion', 'advocacy', and 'incitement', declaring that only the latter could be restricted.",
    tags: ["Section 66A IT Act", "Article 19(1)(a)", "Free Speech", "Cyber Law"],
    sourceUrl: "https://www.news18.com/news/india/shreya-singhal-on-supreme-court-verdict-striking-down-section-66a-of-it-act-980753.html",
    sourceName: "News18 India"
  }
];
