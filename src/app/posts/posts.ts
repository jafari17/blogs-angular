 
export interface Posts {
    id:number;
    title:string;
    category:string;
    labels?: Labels[];
    description:string;
    active?:boolean;
}
export interface Labels {
     label:string;
}