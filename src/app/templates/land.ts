import { Army } from "./army";
import { Race } from "./race";
import { Resources } from "./resources";

export interface Land {
    army: Army,
    name: string,
    portal: object
    world_name: string,
    race: Race, 
    resources: Resources
}