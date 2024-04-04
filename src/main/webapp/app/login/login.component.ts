import { Component, HostListener,OnInit } from '@angular/core';

@Component({
  selector: 'jhi-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  isMobile = false;

  data = [
    {
      head:"Implement with Potential",
      text:"Vijay Kumar Chole, Vice President of BVG Life sciences and Satara Food Park Ltd., has made notable contributions to the industry and beyond. His innovative leadership and steadfast dedication to innovation resulted in the development, construction, and inauguration of the first giant Food Park, which cost more than Rs. 160 crore and received a Rs. 50 crore grant. Chole's responsibilities included property acquisition, compliance management, approvals, and quality certifications. He also oversaw B2B projects, contract production, white labelling, and exports, broadening the Food Park's footprint.",
      image:'../../content/images/assets/achivments/achiv6.jpg'
    },
    {
      head:"Serving with Experience",
      text:"Vijay Kumar Chole, Secretary of the Maharashtra Rajya Draksha Bagaitdar Sangh, pioneered groundbreaking grape research and development. He led projects like drip irrigation, crop modeling, and advanced disease and pest forecasting using weather simulations. Actively engaged in policy discussions and collaborations with organizations like APEDA, NRC-G, NHB, and NABARD, Chole's writings highlight his extensive knowledge and influence in agriculture, covering topics such as 'Paradigm Shift: Agribusiness and Farmers' Organizations in India'.",
      image:'../../content/images/assets/achivments/achiv2.jpg'
    },
    {
      head:"Entrepreneur  Guide ",
      text:"Mr. Chole is a successful entrepreneur who has managed contract farming programmes for Tomato and Green Mango, encouraging sustainable agricultural practises and market-driven production. He built a specialised Training Institute for agri-food industry entrepreneurs and farmers and did a pre-feasibility study for tomato processing at Chordia Food Park in Pune. Chole's aim is to stimulate innovation, cooperation, and long-term growth in the agri-food industry, allowing entrepreneurs to contribute to the sector's transformation and reap the benefits of its growing potential.",
      image:'../../content/images/assets/achivments/achiv3.jpg'
    },
    {
      head:"Pride of Cow No Hand Touch Milk Delivery Model",
      text:"Vijay Kumar's leadership at Nutrotop Foods resulted in innovation, winning him the Indian School of Business's Best Business Model Award. The 'Pride of Cow' no-hand-touch milk delivery system demonstrated his devotion to cleanliness and innovation under his leadership, financing, branding, and marketing tactics. He successfully traversed official systems, resulting in Maharashtra's first NHM project clearance. Kumar's extensive knowledge in 'Manavya' benefits HIV-positive people, addicts' families, police officers, students, and the elderly. This path of Vijay Kumar is a monument to visionary leadership.",
      image:'../../content/images/assets/achivments/achiv4.jpg'
    },
    
  ]

  data2=[
    {
      head:"Work as Team Player",
      text:"With his creative leadership and imaginative attitude, Vijay Kumar, Assistant Vice President of Mitcon India Public Limited, has revolutionised the agri-business environment. He was the Chief Public Relations Officer and managed the Agri Infra and Food Division (AIFC). Vijay's 'Farm to Fork' approach, implemented inside the consulting framework, established an industry precedent. His strategic acumen resulted in the successful completion of projects worth over Rs. 1000 crore in Agri, Food, and Livestock. Collaborations with brands such as Britannia, Parle, and Heinz resulted in a wide range of projects, including World Bank-supported initiatives as well as municipal abattoirs, food parks, and dairy expansions. His revolutionary journey at Mitcon India Public Limited improved the company's reputation and motivated future executives to follow in his footsteps and forge their own pathways of influence and success.",
      image:'../../content/images/assets/achivments/achiv5.jpg'
    },
    {
      head:"Strategy Implementor",
      text:"Vijaykumar Chole, a visionary leader in Agricultural Economics, was instrumental in resuming grape exports to China and Hong Kong, settling SPS and Plant Quarantine concerns with Sri Lanka, and founding the inaugural sultana Festival in 2001. In 2018, he successfully launched the 9th Mega Food Park in Satara and created the first home delivery idea for Nutrotop health foods. His herbal nanotechnology initiative, which generated residue-free, healthful, and high-quality food for 7000 farmers, gained him praise from Maharashtra s Chief Minister. Mr. Chole was a member of the BMC Covid Task Force, which was directed by Commissioner BMC. Chole also helped shape policy, such as the National Model Food Processing Policy and Maharashtra's First Food Processing Policy. He advised KLISMA and oversaw World Bank-funded agricultural programs for farmers' betterment and value chains in Agri, Dairy, Goat, sheep, and Horticulture.",
      image:'../../content/images/assets/achivments/achiv1.jpg'
    },
    
    {
      head:"Working with passion",
      text:"Maharashtra's Hon. Chief Minister Devendraji Fadnavis honoured Vijay Kumar Chole for his efforts in building the state's first Mega Food Park. His efforts were recognised further when the Satara Mega Food Park was named the Second Best Cleanest, Greenest, and Eco-friendly Mega Food Park & Cold Chain Unit in India. As the leader of BVG and Satara Mega Food Park, Chole is happy to announce their newest achievement, the coveted Pomegranate Cluster Development Project of the National Horticulture Board (NHB), an initiative of the Ministry of Agriculture and Farmers Welfare, Government of India. Chole's Seed to Plate initiative provides a once-in-a-lifetime opportunity to impact 30,000 farmers and 1.2 to 1.5 lakh lives. Chole and his team have built the groundwork for a brighter, more prosperous future for agriculture in India, demonstrating ingenuity, inclusivity, and a strong dedication to improving lives.",
      image:'../../content/images/assets/achivments/achiv7.jpg'
    }
  ]

  scrollToTop():void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any):void {
    this.checkScreenWidth();
  }

  ngOnInit():void {
    this.checkScreenWidth();
  }

  checkScreenWidth():void {
    this.isMobile = window.innerWidth <= 767;
  }
}
