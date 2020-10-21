import { Pokemon } from './pokemon.model';
import { Stats } from './stats.model';

export class PokemonDetailed extends Pokemon {
    height: number;
    weight: number;
    stats: Stats;
    moves: string[];
    types: string[];

    constructor(data?: any) {
        super(data);

        const defaults = {
            height: 0,
            weight: 0,
            ...data
        };

        this.height = defaults.height;
        this.weight = defaults.weight;
        this.image = this.getImage(this.id);
        this.stats = new Stats(defaults.stats);
        this.moves = [];

        if (defaults.moves) {
            for (const move of defaults.moves) {
                this.moves.push(move.move.name);
            }
        }

    }

    private getImage(id: number): string {
        const hqImgUrl = 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/';
        return hqImgUrl + this.pad(this.id, 3) + '.png';
    }

    private pad(num: number, length: number): string {
        let str = '' + num;
        while (str.length < length) {
          str = '0' + str;
        }
        return str;
    }
}
