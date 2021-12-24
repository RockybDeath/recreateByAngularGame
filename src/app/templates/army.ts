import { Characteristics } from "./characteristics";
import { Leader } from "./leader";

export interface Army {
    characteristics: Characteristics,
    id: number,
    leader: Leader,
    power: number,
    size: number
}