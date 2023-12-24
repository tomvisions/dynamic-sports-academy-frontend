import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import {SharedService} from "../shared.service";
import { Team } from './team.type';

@Injectable({
  providedIn: 'root'
})
export class TeamService
{
  // Private
  private _team: BehaviorSubject<Team | null> = new BehaviorSubject(null);

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient, private _sharedService: SharedService)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------


  /**
   * Getter for product
   */
  get membership$(): Observable<Team>
  {
    return this._team.asObservable();
  }


  getIntro() {
    return [
      {text: 'George Papamikidis is the founder, President/ CEO of Dynamic Sports Academy and Dynamic Technologies. He created one of the largest Canadian Electronic Service provider company in the world. Corporations such as Nortel Networks, Sanmina-SCI, Flextronics, Celestica, Ericsson, Ciena, Avaya, are just some of the world’s largest Electronic companies and manufacturers that have used the services of Dynamic Technologies.\n'},
      {text: 'Founded in 1994, Dynamic\'s customer-first philosophy has been the foundation of the company, and is a tangible element of the company and each of its team members.'},
      {text: 'Dynamic Technologies is a true Quality IT “Service Provider”, that has serviced the world\'s leading OEM\'s and EMS \' and SMB\’.'},
      {text: 'A company with vision, implementing programs such as DT-QS, the highest quality standard in the industry, a comprehensive service maintenance program. Dynamic has always been a leader, and taken initiative with high level solutions, customized to meet each customer\'s particular needs.'},
      {text: 'Our commitment to you is one you can bank on. That\'s a promise.'},
      {text:'Quality begins with qualified people…'},
      {text: 'The Dynamic team consists of highly skilled individuals, particularly focused on providing superior quality and ultimate service to all Dynamic customers.'},
      {text: 'The concept of “service”, is so familiar to IT practitioners, IT nowadays does not provide technology, but services. We can look at it from another point of view. How would Dynamic Technologies help our partners reduce costs? We could do it by implementing our DT-QS (Dynamic Technologies – Quality Service) system coupled with our maintenance service, and to provide the service in an affordable way.'},
      {text: 'The bottom line is that Dynamic Technologies operates in such a spirit and our motto is to provide value to our partners through efficient provision of services.'},
    ]
  }

  getTeams()
  {
    return [
      {
        firstName: 'Bright',
        lastName: 'Panyin',
        DOB: '23-11-2006',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Samir',
        lastName: 'Abubakar',
        DOB: '28-12-2010',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Kwabena',
        lastName: 'Agyin',
        DOB: '27-09-2011',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Michael',
        lastName: 'Arthur',
        DOB: '09-05-2013',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Joseph',
        lastName: 'Paintsil',
        DOB: '09-08-2007',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Ebenezer',
        lastName: 'Nkabi',
        DOB: '20-07-2011',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Emmanuel',
        lastName: 'Osei',
        DOB: '10-05-2009',
        Location: 'Not Available',
        Mother: 'Abena Kitiwa',
        Father: 'Yaw Mensah',
        Contact: '596304372',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Jefrey',
        lastName: 'Asante',
        DOB: '07-03-2006',
        Location: 'Not Available',
        Mother: 'Esi Mensah',
        Father: 'Kojo Mintah',
        Contact: '591979357',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Kassim',
        lastName: 'Sule',
        DOB: '18-10-2007',
        Location: 'Not Available',
        Mother: 'Abiba Kassim',
        Father: 'Kassim Nuhu',
        Contact: '597227757',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Joshua',
        lastName: 'Nkansah',
        DOB: '14-09-2009',
        Location: 'Not Available',
        Mother: 'Dorcas Ayiah',
        Father: 'Samuel Asiedu',
        Contact: '599098762',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Richard',
        lastName: 'Amoah',
        DOB: '02-01-2011',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Awude',
        lastName: 'Senyo',
        DOB: '04-06-2011',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'David',
        lastName: 'Aboagye',
        DOB: '29-01-2006',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Enock',
        lastName: 'Quaye',
        DOB: '11-01-2012',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Eric',
        lastName: 'Akorful',
        DOB: '09-12-2011',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Blessing',
        lastName: 'Entsie',
        DOB: '21-07-2012',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Bismark',
        lastName: 'Opare',
        DOB: '07-04-2008',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Ebenezer',
        lastName: 'Arthur',
        DOB: '19-08-2010',
        Location: 'Not Available',
        Mother: 'Afia',
        Father: 'Not Available',
        Contact: '248463307',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Theophilus',
        lastName: 'Donkoh',
        DOB: '11-01-2012',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Patrick',
        lastName: 'Annan',
        DOB: '28-04-2014',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Clement Kumi',
        lastName: 'Mensah',
        DOB: '30-12-2009',
        Location: 'Not Available',
        Mother: 'Diana Fosu',
        Father: 'Bernard Kumi',
        Contact: '257610696',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Francis',
        lastName: 'Okyere',
        DOB: '01-06-2012',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Christian',
        lastName: 'Adjetey',
        DOB: '16-06-2010',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'John',
        lastName: 'Dadzie',
        DOB: '31-05-2010',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Richmond',
        lastName: 'Arthur',
        DOB: '27-02-2013',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'John',
        lastName: 'Duah',
        DOB: '19-02-2015',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Richmond',
        lastName: 'Quansah',
        DOB: '12-11-2012',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Solomon',
        lastName: 'Nkum',
        DOB: '11-09-2010',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Francis',
        lastName: 'Wortey',
        DOB: '19-01-2011',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Victor',
        lastName: 'Botchwey',
        DOB: '06-05-2014',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Godfred',
        lastName: 'Humaley',
        DOB: '15--06-2014',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Francis',
        lastName: 'Addae',
        DOB: '23-07-2013',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Christopher',
        lastName: 'Bonney',
        DOB: '25-03-2013',
        Location: 'Not Available',
        Mother: 'Esther Biamah',
        Father: 'Seth Bonney',
        Contact: '246498710',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Emmanuel',
        lastName: 'Nkum',
        DOB: '13-10-2010',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Ebenezer',
        lastName: 'Entsie',
        DOB: '17-10-2010',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Buicks',
        lastName: 'Rodriguez',
        DOB: '28-12-2010',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Andy',
        lastName: 'Asirifi',
        DOB: '11-03-2013',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Isaac',
        lastName: 'Amoah',
        DOB: '28-07-2012',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Kojo Kantanka',
        lastName: 'Safo',
        DOB: '16-04-2007',
        Location: 'Not Available',
        Mother: 'Esi Quansah',
        Father: 'James Quansah',
        Contact: '540346132',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Francis',
        lastName: 'Wassaw',
        DOB: '21-06-2007',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Gilbert',
        lastName: 'Arhinful',
        DOB: '01-04-2007',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Issaka',
        lastName: 'Hamidu',
        DOB: '07-06-2006',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Mark',
        lastName: 'Arthur',
        DOB: '07-06-2006',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Stephen',
        lastName: 'Aidoo',
        DOB: '25-04-2006',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Gideon',
        lastName: 'Afful',
        DOB: '29-04-2007',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Bernard',
        lastName: 'Appiah',
        DOB: '03-04-2011',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Bismark',
        lastName: 'Arhin',
        DOB: '26-06-2009',
        Location: 'Not Available',
        Mother: 'Linda Entsie',
        Father: 'Not Available',
        Contact: '554797133',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Benjamin',
        lastName: 'Atuah',
        DOB: '18-07-2008',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Enock',
        lastName: 'Nkansah',
        DOB: '11-06-2012',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'David',
        lastName: 'Otabil',
        DOB: '11-06-2010',
        Location: 'Not Available',
        Mother: 'Not Available',
        Father: 'Not Available',
        Contact: 'Not Available',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Enock',
        lastName: 'Abedu',
        DOB: '22-11-2011',
        Location: 'Not Available',
        Mother: 'Cynthia Tetteh',
        Father: 'Not Available',
        Contact: '246405124',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Emmanuel',
        lastName: 'Martey',
        DOB: '20-10-2009',
        Location: 'Not Available',
        Mother: 'Comfort Arthur',
        Father: 'Not Available',
        Contact: '552190769',
        'Platform Registered': 'Y'
      },
      {
        firstName: 'Sampson',
        lastName: 'Toku',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Emmanuella',
        Father: 'Not Available',
        Contact: '535357861',
        'Platform Registered': ''
      },
      {
        firstName: 'Aaron',
        lastName: 'Amoah',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Rosemond',
        Father: 'Not Available',
        Contact: '556730365',
        'Platform Registered': ''
      },
      {
        firstName: 'Bismark',
        lastName: 'Ackom',
        DOB: '24-04-2005',
        Location: 'Asafo',
        Mother: 'Yaa Owusua',
        Father: 'Joseph Ackom',
        Contact: '249255681',
        'Platform Registered': ''
      },
      {
        firstName: 'Joshua',
        lastName: 'Osei',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Christopher',
        Contact: '559673878',
        'Platform Registered': ''
      },
      {
        firstName: 'Kwame',
        lastName: 'Ninsin',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Alpharbet',
        Contact: '544022152',
        'Platform Registered': ''
      },
      {
        firstName: 'Abubakar',
        lastName: 'Bosompem',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Cosmus',
        Contact: '247789894',
        'Platform Registered': ''
      },
      {
        firstName: 'Richmond',
        lastName: 'Nyarko',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Eric',
        Contact: '245904513',
        'Platform Registered': ''
      },
      {
        firstName: 'Enock',
        lastName: 'Adom',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Ebo',
        Contact: '256757149',
        'Platform Registered': ''
      },
      {
        firstName: 'Harrison',
        lastName: 'Yeboah',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Stephen',
        Contact: '550116127',
        'Platform Registered': ''
      },
      {
        firstName: 'Kwadwo',
        lastName: 'Sarfo',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Esi Anamah',
        Father: 'Not Available',
        Contact: '540346132',
        'Platform Registered': ''
      },
      {
        firstName: 'Samin',
        lastName: 'Abubakar',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Esi Mansah',
        Father: 'Not Available',
        Contact: '591979357',
        'Platform Registered': ''
      },
      {
        firstName: 'Fredrick',
        lastName: 'Adjei',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Somuah Adjei',
        Contact: '245909283',
        'Platform Registered': ''
      },
      {
        firstName: 'Joseph',
        lastName: 'Paintsil',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Kwame Paintsil',
        Contact: '555391743',
        'Platform Registered': ''
      },
      {
        firstName: 'Jeffery',
        lastName: 'Nyame',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Joana Badu',
        Father: 'Not Available',
        Contact: '555184305',
        'Platform Registered': ''
      },
      {
        firstName: 'Edwin',
        lastName: 'Dodoo',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Ebenezer Dodoo',
        Contact: '549536868',
        'Platform Registered': ''
      },
      {
        firstName: 'Hislord',
        lastName: 'Annan',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Charity Nyame',
        Father: 'Not Available',
        Contact: '541145550',
        'Platform Registered': ''
      },
      {
        firstName: 'Huseit',
        lastName: 'Shaibu',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Afizatu',
        Father: 'Not Available',
        Contact: '242807836',
        'Platform Registered': ''
      },
      {
        firstName: 'Francis',
        lastName: 'Addae',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'David Addae',
        Contact: '241999775',
        'Platform Registered': ''
      },
      {
        firstName: 'Allali',
        lastName: 'Musa',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Zeinabu',
        Father: 'Not Available',
        Contact: '531797579',
        'Platform Registered': ''
      },
      {
        firstName: 'Derick',
        lastName: 'Boateng',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Andrews Nsiah',
        Contact: '550276252',
        'Platform Registered': ''
      },
      {
        firstName: 'Lawson',
        lastName: 'Yeboah',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Stephen',
        Contact: '550116127',
        'Platform Registered': ''
      },
      {
        firstName: 'Ephiraim',
        lastName: 'Danso',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Bamford Tetteh',
        Contact: '246164022',
        'Platform Registered': ''
      },
      {
        firstName: 'Joshua',
        lastName: 'Nkansah',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Samuel Asiedu',
        Contact: '599098762',
        'Platform Registered': ''
      },
      {
        firstName: 'Ebenezer',
        lastName: 'Nkebi',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Dorcas Ayiah',
        Father: 'Samuel Asiedu',
        Contact: '596304372',
        'Platform Registered': ''
      },
      {
        firstName: 'Richard',
        lastName: 'Otwey',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Richlove Otwey',
        Contact: '532919779',
        'Platform Registered': ''
      },
      {
        firstName: 'Daniel',
        lastName: 'Oduro',
        DOB: 'Not Available',
        Location: 'Asafo',
        Mother: 'Not Available',
        Father: 'Peter Quainoo',
        Contact: '558295502',
        'Platform Registered': ''
      },
      {
        firstName: 'Alex',
        lastName: 'Annobil',
        DOB: 'Not Available',
        Location: 'Nyanoa',
        Mother: 'Millicent',
        Father: 'Not Available',
        Contact: '551404579',
        'Platform Registered': ''
      },
      {
        firstName: 'Eric',
        lastName: 'Aidoo',
        DOB: 'Not Available',
        Location: 'Nyanoa',
        Mother: 'Abiba Kassim',
        Father: 'Not Available',
        Contact: '256268403',
        'Platform Registered': ''
      },
      {
        firstName: 'Isaac',
        lastName: 'Arkoh',
        DOB: 'Not Available',
        Location: 'Nyanoa',
        Mother: 'Fati',
        Father: 'Not Available',
        Contact: '247078917',
        'Platform Registered': ''
      },
      {
        firstName: 'Michael',
        lastName: 'Owusu',
        DOB: 'Not Available',
        Location: 'Nyanoa',
        Mother: 'Cynthia Darko',
        Father: 'Not Available',
        Contact: '559442997',
        'Platform Registered': 'Not Available'
      }
    ]
  }
}
