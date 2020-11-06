import { Stats } from './stats.model';

export class Pokemon {
    name: string;
    id: number;
    sprite: string;
    image: string;
    height: number;
    types: string[];
    weight: number;
    stats: Stats;
    moves: string[];
    info: any;

    constructor(data?: any) {
        const defaults = {
            name: '',
            id: 0,
            sprites: {
                front_default: ''
            },
            types: [],
            height: 0,
            weight: 0,
            ...data
        };

        this.name = defaults.name;
        this.id = defaults.id;
        this.weight = defaults.weight / 10;
        this.height = defaults.height / 10;
        this.sprite = defaults.sprites.front_default;
        this.image = this.getImage(this.id);
        this.stats = new Stats(defaults.stats);
        this.moves = [];
        this.types = [];

        if (defaults.moves) {
            for (const move of defaults.moves) {
                this.moves.push(move.move.name);
            }
        }
        defaults.types.map((type) => {
            this.types.push(type.type.name);
        });
    }

    private getImage(id: number): string {
        const hqImgUrl = 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/';
        return hqImgUrl + this.pad(id, 3) + '.png';
    }

    private pad(num: number, length: number): string {
        let str = '' + num;
        while (str.length < length) {
          str = '0' + str;
        }
        return str;
    }
}
