export class Pokemon {
    name: string;
    id: number;
    image: string;
    moves: Array<string>;
    types: Array<string>;

    constructor(data?: any) {
        const defaults = {
            ...data
        };

        this.name = defaults.name;
        this.id = defaults.id;
        this.image = defaults.sprites.front_default;
        this.moves = [];
        this.types = [];

        if (defaults.moves) {
            for (const move of defaults.moves) {
                this.moves.push(move.move.name);
            }
        }

        if (defaults.types) {
            for (const type of defaults.types) {
                this.types.push(type.type.name);
            }
        }

    }
}
