import {Injectable} from '@angular/core';
import {of, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() {
  }

  getNotes(): Observable<string> {
    return of(JSON.stringify([
      {
        author: "Peter OVERMANN",
        createdAt: new Date("2021-10-15"),
        imgString: "user1",
        msg: MSG
      },
      {
        author: 'Werner HEID',
        createdAt: new Date("2021-10-15"),
        imgString: 'user3',
        msg: MSG
      },
      {
        author: 'Sepehr KHALEGHIAN',
        createdAt: new Date("2021-10-15"),
        imgString: 'user2',
        msg: MSG
      }
    ]))

  }
}

const
  MSG = `Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat.`;
