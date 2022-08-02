export class Movie{
    constructor(
        public id:number,
        public title:string,
        public image:string,
        public ratings:number,
        public genre:string,
        public length: number,
        public releasedDate: string,
        public language: string,
        public showTime: string,
        public price: number
    ){}
}