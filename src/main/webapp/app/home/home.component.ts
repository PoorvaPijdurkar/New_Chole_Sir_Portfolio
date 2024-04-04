import { Component } from '@angular/core';

interface CarouselImage {
  src: string;
  title: string;
  description: string;
}

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  slides = [
    {
      image: '../../content/images/assets/slider/slider6.jpg',
      caption: 'Food Economics: Balancing supply, demand crucial',
    },
    {
      image: '../../content/images/assets/slider/slider5.png',
      caption: 'Where there is a will there is a way, where there is no will',
      caption1: 'there are discussions, committees, seminars, conferences.',
    },
    {
      image: '../../content/images/assets/slider/slider4.png',
      caption: 'Agriculture: Economic backbone, global sustenance provider',
    },
    {
      image: '../../content/images/assets/slider/slider2.jpg',
      caption: 'Source of Technology Transfer',
    },
    { image: '../../content/images/assets/slider/slider7.png', },
  ];

  images: CarouselImage[] = [
    {
      src: '../../content/images/assets/slider/slider6.jpg',
      title: 'Image 1',
      description: 'Food Economics: Balancing supply, demand crucial',
    },
    {
      src: '../../content/images/assets/slider/slider5.png',
      title: 'Image 2',
      description: 'Description for Image 2',
    },
    {
      src: '../../content/images/assets/slider/slider4.png',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      src: '../../content/images/assets/slider/slider2.jpg',
      title: 'Image 4',
      description: 'Description for Image 4',
    },
    {
      src: '../../content/images/assets/slider/',
      title: 'Image 5',
      description: 'Description for Image 5',
    },
  ];

  tools = [
    {
      name: 'Innovative Idea Generate for Food and Agri Business',
      imageSrc: '../../content/images/assets/keys/key1.png',
    },
    { name: 'Financial Advisors',
     imageSrc: '../../content/images/assets/keys/key2.png' 
    },
    {
      name: 'Keynote speaker, & Motivator & Community Influencer',
      imageSrc: '../../content/images/assets/keys/key3.png',
    },
    {
      name: 'Agri and Food business economic analyst ',
      imageSrc: '../../content/images/assets/keys/key4.png',
    },
    {
      name: 'Agri & Food Factory setup',
      imageSrc: '../../content/images/assets/keys/key5.png',
    },
    {
      name: 'Strategy formulator and Policy Implementor',
      imageSrc: '../../content/images/assets/keys/key6.png',
    },
  ];


  // eslint-disable-next-line @typescript-eslint/member-ordering
  about: {
    desc: string;
    title: string;
    title1: string;
    academic1: string;
    academic2: string;
    academic3: string;
    academic4: string;
    keyExpertise: string;
  } = {
    desc: 'Vijay Kumar Chole is a visionary leader in Agricultural Economics who has made significant contributions to the agricultural industry. He has played a major role in reshaping the landscape of Indian agriculture, thanks to his wide expertise and inventive approach. Mr. Chole has continuously fought to provide new options for farmers and promote sustainable agricultural practices, from resuming grape exports to China and Hong Kong to addressing trade difficulties with Sri Lanka. His business endeavors, policy initiatives, and leadership in numerous organizations have gained him industry acclaim and honors. Mr. Chole continues to inspire and promote good change in the agri-food business, creating a lasting influence on the lives of farmers and stakeholders by focusing on innovation, cooperation, and long-term growth.',
    title: 'Introduction',
    title1: 'ACADEMICS',
    academic1:
      'His quest of knowledge and academic success began with his B.Sc. in Agriculture, which he earned with distinction from Pune College of Agriculture in 1999, laying the groundwork for his distinguished career. His outstanding efforts were recognised when he was awarded the ICAR Merit-Cum-Means Scholarship throughout his undergraduate studies and excelled in the RAWE programme at Ganeshkhind Research Station. His dedication to student development won him a Special Certificate of Appreciation & Trophy from the Dapoli College of Agriculture.',
    academic2:
      "Mr. Chole's great devotion and passion paid off in 2001, when he received his M.Sc. (Agriculture Economics) from Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth, Dapoli-Ratnagiri. He received Distinction with Gold Medal, an amazing achievement that reflected his intellect and in-depth knowledge of agricultural economics.",
    academic3:
      "Vijay Kumar's academic excellence and perseverance earned him first place in Maharashtra for Agricultural Economics in the M.Sc. (Agri.) programme. His accomplishments included national recognition, ranking 57th in the All India Combined Examination for ICAR's JRF and acceptance to prominent institutes such as SAU's IARI and NDRI. The ICAR recognised Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth's brilliance by naming it the Best Institution.Post Graduate Diploma in Export Import Management from IMC, Pune, and programs on 'Managing Contract Farming' and 'Agriculture Input Marketing' from the esteemed IIM Ahmedabad.",
    academic4:
      "Vijay Kumar's influence extended beyond academics, as he served as a keynote speaker at a number of important events. The International Conference on Opportunities and Challenges in Food Processing, Make in India, the International Science Festival, World Food India, the International Agri Summit, the Annual Global Conclave of Entrepreneurs, and an international symposium on sustainable development are among the notable gatherings.",
    keyExpertise: 'Key Expertise',
  };

  scrollToTop():void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
