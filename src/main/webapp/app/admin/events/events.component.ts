import { Component } from '@angular/core';

@Component({
  selector: 'jhi-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  eventsData = [
    {
      id: 1,
      image: '../../../content/images/assets/event1.jpg',
      content:
        'Felicitation for setting up Maharashtra’s First Food Park at the Hands of Hon. Chief Minister, Maharashtra Shri. Devendraji Fadnavis in presence of Union Minister of Food Processing Industries Hon. Mrs.Harsimrat Kaur Badal, Former Agriculture and Food Processing Minister Hon. Sharad Pawar.',
    },
    {
      id: 2,
      image: '../../../content/images/assets/event2.jpg',
      content:
        'Presentation and Meeting with the District Collector and ZP Pune for Developing Mini Food Park at Junnar. Dr Amol Kolhe, Member of Parliament, Dr. Rajesh Deshmukh, District Collector, Mr. Ayush Prasad, CEO ZP Pune and the respective heads were present',
    },
    {
      id: 12,
      image: '../../../content/images/assets/event12.jpg',
      content: 'Chief Guest at MIT- Food Tech college, Pune.',
    },
    {
      id: 13,
      image: '../../../content/images/assets/event13.jpg',
      content:
        'Was Guest Speaker at Entrepreneurs Annual Global Conclave where Entrepreneurs from 30 countries were present at World Peace Centre, MIT. The other speakers were Rajeev Bajaj( Bajaj Auto), Sambhaji Nilangekar (Min Of Skill Development), Vishwanath Karad (MIT), Mr Anand Chordia (Pravin Masalewale) etc',
    },
    {
      id: 14,
      image: '../../../content/images/assets/event14.jpg',
      content:
        'Meeting with my uncle Hon Bhagwat Karad, Hon. Minister of State for Finance, Govt of India.',
    },
    {
      id: 15,
      image: '../../../content/images/assets/event15.jpg',
      content:
        'Receiving Award as Second best Mega Food Park in India in Swacchata Pakhwada, Sanitation, Ecofriendly ness at the Hands of Union Minister of Food Processing Industries Hon. Mrs. Harsimrat Kaur Badal',
    },
    {
      id: 18,
      image: '../../../content/images/assets/event18.jpg',
      content:
        'Discussion with Governor of Mizoram in one program by Indian Chamber of Commerce (Estd. in 1925) where we were allotted 10 min for presentation along with Secretary Agri, Bijaykumarji, govt of Maharashtra',
    },
  ];
}
