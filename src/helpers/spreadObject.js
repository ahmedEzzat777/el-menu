export default function spreadObject(obj){
    return Object.keys(obj).map(x => obj[x]);
}