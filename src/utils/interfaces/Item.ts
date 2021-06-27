export default interface IItem {
    id?: number;
    ts?: number;
    desc?: string;
    title: string;
    comp: boolean;
    cat?: number | string;
}