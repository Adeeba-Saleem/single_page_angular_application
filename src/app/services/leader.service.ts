import { Injectable } from '@angular/core';
import{Leader} from '../shared/leader';
import{Leaders} from '../shared/leaders';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders() : Leader[]{
      return Leaders;
  }

  getLeader(id: string): Leader {
    return Leaders.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedLeader(): Leader {
    return Leaders.filter((promotion) => promotion.featured)[0];
  }


  constructor() { }
}
