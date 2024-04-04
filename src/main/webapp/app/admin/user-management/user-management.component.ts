import { Component } from '@angular/core';

@Component({
  selector: 'jhi-user-management',
  templateUrl: './user-management.component.html',
})
export class UserManagementComponent {
  data3 = [
    {
      img: '../../../content/images/assets/media/Contract-Farming.png',
      title: 'Contract Farming Program',
      content:
        'Due to the strong agricultural background and masters in Economics are one he is a integrated agri economic expert who has managed contract farming programmes for Tomato and Green Mango, encouraging sustainable agricultural practises and market-driven production. For building strong farming community he build specialized training institute for for agri-food industry entrepreneurs and farmers with visionary approach of doing pre-feasibility study for tomato processing  at chordia food park in pune.',
    },
    {
      img: '../../../content/images/assets/media/BVG.jpg',
      title: 'BVG Group',
      content:
        "'Humanity ahead' as per mission Chole has contribute with their huge industry setup experience, human resource handling, monitoring the process of project execution he built various strategy to achieve the success. Serving customers like Prime Minister’s House and Office, Rashtrapati Bhavan, Parliament House, many union ministries, many state governments, municipal corporations, BVG Group has excellent working relationships with the government, to assist in any regulatory permissions.",
    },
    {
      img: '../../../content/images/assets/media/Research.png',
      title: ' Researcher/ Advisory Member',
      content:
        "Continuous up gradation of knowledge and data hunting habit makes him to tap the potential and representing their valuable thoughts ,comments on current aspect ,future trends they put their valuable insights. Through  Dairy, Agri, Food Industry related articles ,publications, news articles ,TV shows, Radio ,Magazine they share key notes , key transforming indicators ,insights to create the awareness .The  'Paradigm Shift: Agribusiness and Farmers' Organisations in India articles got more shares & likes. ",
    },
    {
      img: '../../../content/images/assets/media/food-park.jpg',
      title: 'Satara Mega Food Park',
      content:
        "Vijay Kumar Chole, Vice President of BVG Life sciences and Satara Food Park Ltd., has made notable contributions to the industry and beyond.Under his leadership and guidance ,they launched India’s 9th Mega Food Park i.e. ‘Satara Mega Food Park”. Satara Mega Food Park can provide any type of organic, poison-free fruits, vegetables, grains, gluten-free products, etc for processing. His innovative leadership and dedication towards the work and manpower motivating and utilization capacity ,financial management leads to form Rs 160 Cr giant food park. Mr. Chole's strong economics background and financial skills they put their efforts and taking 50 Cr Grant from the Govt.in terms of subsidy. At every phase of building satara mega food park they contribute by value addition of in project to make it sustainable with competitive advantages. Under his leadership  Satara Mega Food Park was named the Second Best Cleanest, Greenest, and Eco-friendly Mega Food Park & Cold Chain Unit in India. It will benefited more than 10000+ farmers and create the intermediate link in between producer and processor. Value addition in agri produce will benefited to multiple stages of living community and make economic strengthening of agri and food sector.",
    },
    {
      img: '../../../content/images/assets/media/Policy.png',
      title: 'Policy Maker',
      content:
        "Mr. Chole played a pivotal role in shaping both the 'National Model Food Processing Policy' and the 'Maharashtra First Food Processing Policy.' Under the chairmanship of Mr. Avinash Srivastava, Secretary, Ministry of Food Processing Industries, Government of India, Mr. Chole contributed to the development of the National Model Food Processing Policy, aiming to enable value addition to agricultural produce and generate employment in rural areas. Similarly, in Maharashtra, he helped craft a policy that emphasizes value addition, employment generation, market expansion, and overall economic strengthening. Mr. Chole's visionary insights and active participation extended to coordinating and attending various meetings and proceedings with organizations like APEDA, NRC-G, NHB, NABARD, MSAMB, State Agriculture Dept., SAUs, breeders/agricultural scientists, and government delegations from Chile, Mozambique, France, and the USA. Topics discussed included Food Parks, Agri-Export Zones, Import of Raisins, Wine Park, Export norms for grapes, Varietal research, and Agricultural Marketing.",
    },

    {
      img: '../../../content/images/assets/media/maharashtra.jpg',
      title: 'Maharashtra Rajya Draksha Bagaitdar Sangh',
      content:
        'Emerged as youngest secretary to hold the office in the history of Maharashtra Rajya Draksha Bagaitdar Sangh .With community influencer, strong leadership skills as a secretary he adopt and demonstrate the visionary approach to adopt the modern farming technology and increase the farmer income. In grapes value addition opportunities, key potentials of market acoording to that marketing strategy formulate. He participating in policy discussions and collaborating with organisations such as APEDA (Agricultural and Processed Food Products Export Development Authority ) NRC-G (National Research Center- Grapes), NHB(National Horticultural Boards ), and NABARD (National Bank for Agriculture and Rural Development ).',
    },
  ];

  data4 = [
    {
      img: '../../../content/images/assets/media/government.jpg',
      title: 'Government Scheme Implementer , Guide',
      content:
        'Attending the meeting with mister of Agri & Food Business ,APEDA, NHB, FISCI, MoFPI they review each scheme and identified the challenges in implementing schemes and after discussion with higher authorities, scheme implementing bodies necessary suggestion are given. Chole has worked on various projects of Ministry of Food Processing, MoFPI schemes, etc. They have hands on experience in establishing the turnkey food industry, subsidy application fine tuning between government and applicants',
    },
    {
      img: '../../../content/images/assets/media/nano-technology.jpg',
      title: 'Herbal Nano Technology Initiative',
      content:
        'Strong agriculture background Vijaykumar chole has identify the potential gap and opportunity in market from that the Herbal Nano Technology Initiative has been comes into forced. In 21th Century with transformation of community focus toward organic and healthy food he identifies the market demand and worked on organic food production With market compatible price and residue free, healthy food will benefited more than 7000 farmers. Strong leadership skill and as good community influencer he create awareness about the organic food production, its benefits, adoption process, market linkage and its value addition facility.',
    },
  ];
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
