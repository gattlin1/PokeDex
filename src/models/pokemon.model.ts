export class Pokemon {
    name: string;
    id: number;
    image: string;
    moves: Array<string>;
    types: Array<string>;

    constructor(data?: any) {
        const defaults = {
            moves: [],
            types: [],
            ...data
        };
        this.name = defaults.name;
        this.id = defaults.id;
        this.image = defaults.sprites.front_default;
        this.moves = defaults.moves;
        this.types = defaults.types;

        if (defaults.moves) {
            defaults.moves.forEach(move => {
                this.moves.push(move.move.name);
            });
        }

        if (defaults.types) {
            defaults.types.forEach(type => {
                this.types.push(type.type.name);
            });
        }

    }
}
