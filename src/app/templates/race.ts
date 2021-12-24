import { Fraction } from "./fraction";
import { Leader } from "./leader";

export interface Race {
    fraction: Fraction,
    leader: Leader,
    name: string,
    race_description: string
}