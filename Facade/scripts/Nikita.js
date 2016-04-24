import Movie from './Movie';

class Nikita extends Movie {
  constructor() {
    super('Nikita, hard to kill!',
      120,
      'Steven Spielberg',
      ['Brad Pitt'],
      'Bloody!'
    );
  }
}

export default Nikita;
