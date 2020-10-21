export class Stats {
    health: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;

    constructor(stats: any) {
        const defaults = {
            health: 0,
            attack: 0,
            defense: 0,
            spAttack: 0,
            spDefense: 0,
            speed: 0,
            stats
        };

        for (const stat of defaults.stats) {
            switch (stat.stat.name) {
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
}
