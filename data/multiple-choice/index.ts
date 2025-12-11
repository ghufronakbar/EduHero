import { multipleChoiceInggrisEasy } from "./inggris/easy";
import { multipleChoiceInggrisHard } from "./inggris/hard";
import { multipleChoiceInggrisMedium } from "./inggris/medium";
import { multipleChoiceMatematikaEasy } from "./matematika/easy";
import { multipleChoiceMatematikaHard } from "./matematika/hard";
import { multipleChoiceMatematikaMedium } from "./matematika/medium";
import { multipleChoiceSainsEasy } from "./sains/easy";
import { multipleChoiceSainsHard } from "./sains/hard";
import { multipleChoiceSainsMedium } from "./sains/medium";

export const multipleChoiceData = [...multipleChoiceMatematikaEasy, ...multipleChoiceMatematikaMedium, ...multipleChoiceMatematikaHard, ...multipleChoiceSainsEasy, ...multipleChoiceSainsMedium, ...multipleChoiceSainsHard, ...multipleChoiceInggrisEasy, ...multipleChoiceInggrisMedium, ...multipleChoiceInggrisHard];