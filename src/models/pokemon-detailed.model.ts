import { Pokemon } from './pokemon.model';

export class PokemonDetailed extends Pokemon {
    height: number;
    weight: number;
    health: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
    moves: Array<string>;
    types: Array<string>;

    constructor(data?: any) {
        const hqImgUrl = 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/';
        super(data);

        const defaults = {
            ...data
        };

        this.height = defaults.height;
        this.weight = defaults.weight;
        this.image = hqImgUrl + this.pad(this.id, 3) + '.png';
        this.moves = [];

        if (defaults.moves) {
            for (const move of defaults.moves) {
                this.moves.push(move.move.name);
            }
        }

        for (const stat of defaults.stats) {
            switch(stat.stat.name) {
                case 'hp':
                    this.health = stat.base_stat;
                    break;
                case 'attack':
                    this.attack = stat.base_stat;
                    break;
                case 'defense':
                    this.defense = stat.base_stat;
                    break;
                case 'special-attack':
                    this.spAttack = stat.base_stat;
                    break;
                case 'special-defense':
                    this.spDefense = stat.base_stat;
                    break;
                case 'speed':
                    this.speed = stat.base_stat;
                    break;
            }
        }
    }

    private pad(num: number, length: number): string {
        let str = '' + num;
        while (str.length < length) {
          str = '0' + str;
        }
        return str;
      }
}
