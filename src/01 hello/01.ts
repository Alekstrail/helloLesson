
export function sum(a: number, b: number) {
    return a+b;
}
export function  multi(a: number, b: number) {
    return a*b;
}
export function SplitIntoWords(sentense: string) {
    return sentense.toLowerCase().split(" ").map(w =>w.replace("!",""));
}