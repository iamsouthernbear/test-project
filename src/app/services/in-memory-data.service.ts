import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      books: [
        { id: 1, title: 'Windstorm', author: 'Jenkins', year: '2017', addDate: '2017-11-11', comment: 'Good book!' },
        { id: 2, title: 'Bombasto', author: 'Jenkins', year: '2017', addDate: '2017-11-11', comment: 'Good book!' },
        { id: 3, title: 'Magneta', author: 'Jenkins', year: '2017', addDate: '2017-11-11', comment: 'Good book!' },
        { id: 4, title: 'Tornado', author: 'Jenkins', year: '2017', addDate: '2017-11-11', comment: 'Good book!' },
        { id: 5, title: 'Opasd', author: 'Jenkins', year: '2017', addDate: '2017-11-11', comment: 'Good book!' },
      ]
    };

    // return { books };
  }
}
