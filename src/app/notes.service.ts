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
        createdAt: new Date("2021-10-10"),
        imgString: "user1",
        msg: MSG
      },
      {
        author: 'Werner HEID',
        createdAt: new Date("2021-10-07"),
        imgString: 'user3',
        msg: MSG1
      },
      {
        author: 'Sepehr KHALEGHIAN',
        createdAt: new Date("2021-10-04"),
        imgString: 'user2',
        msg: MSG2
      }
    ]))

  }
}

const
  MSG = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat.`,
  MSG1 = `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  MSG2 = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. `;
