export class Pokemon {
    name: string;
    id: number;
    image: string;
    types: Array<string>;

    constructor(data?: any) {
        const defaults = {
            ...data
        };

        this.name = defaults.name;
        this.id = defaults.id;
        this.image = defaults.sprites.front_default;
        this.types = [];

        if (defaults.types) {
            for (const type of defaults.types) {
                this.types.push(type.type.name);
            }
        }

    }
}
