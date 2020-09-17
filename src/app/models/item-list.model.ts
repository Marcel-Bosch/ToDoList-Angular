export class ItemList {
    desc: string;
    state: boolean;
    finished: boolean;

    constructor( desc: string ) {
        this.desc = desc;
        this.state = false;
        this.finished = false;
    }
}