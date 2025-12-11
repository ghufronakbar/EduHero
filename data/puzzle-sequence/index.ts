import { puzzleSequenceInggrisEasy } from "./inggris/easy";
import { puzzleSequenceInggrisHard } from "./inggris/hard";
import { puzzleSequenceInggrisMedium } from "./inggris/medium";
import { puzzleSequenceMatematikaEasy } from "./matematika/easy";
import { puzzleSequenceMatematikaHard } from "./matematika/hard";
import { puzzleSequenceMatematikaMedium } from "./matematika/medium";
import { puzzleSequenceSainsEasy } from "./sains/easy";
import { puzzleSequenceSainsHard } from "./sains/hard";
import { puzzleSequenceSainsMedium } from "./sains/medium";

export const puzzleSequenceData = [...puzzleSequenceInggrisEasy, ...puzzleSequenceInggrisMedium, ...puzzleSequenceInggrisHard, ...puzzleSequenceMatematikaEasy, ...puzzleSequenceMatematikaMedium, ...puzzleSequenceMatematikaHard, ...puzzleSequenceSainsEasy, ...puzzleSequenceSainsMedium, ...puzzleSequenceSainsHard];