import { Characteristics } from "./characteristics";

export interface Leader{
    alive: boolean,
    char_id: Characteristics,
    experience: number,
    name: string
}