export class Pokemon {
    name: string;
    id: number;
    image: string;
    types: Array<string>;

    constructor(data?: any) {
        const defaults = {
            name: '',
            id: 0,
            sprites: {
                front_default: ''
            },
            types: [],
            ...data
        };

        this.name = defaults.name;
        this.id = defaults.id;
        this.image = defaults.sprites.front_default;
        this.types = [];

        defaults.types.map((type) => {
            this.types.push(type.type.name);
        });
    }
}
