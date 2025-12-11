import { SeedDragAndDrop } from "@/types/seed";
import { dragAndDropInggrisEasy } from "./inggris/easy";
import { dragAndDropInggrisHard } from "./inggris/hard";
import { dragAndDropInggrisMedium } from "./inggris/medium";
import { dragAndDropMatematikaEasy } from "./matematika/easy";
import { dragAndDropMatematikaHard } from "./matematika/hard";
import { dragAndDropMatematikaMedium } from "./matematika/medium";
import { dragAndDropSainsEasy } from "./sains/easy";
import { dragAndDropSainsHard } from "./sains/hard";
import { dragAndDropSainsMedium } from "./sains/medium";


export const dragDropData: SeedDragAndDrop[] = [...dragAndDropInggrisEasy, ...dragAndDropInggrisMedium, ...dragAndDropInggrisHard, ...dragAndDropSainsEasy, ...dragAndDropSainsMedium, ...dragAndDropSainsHard, ...dragAndDropMatematikaEasy, ...dragAndDropMatematikaMedium, ...dragAndDropMatematikaHard];
