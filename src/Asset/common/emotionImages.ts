import Happy from "./happy.png";
import Nomal from "./normal.png";
import Sad from "./sad.png";
import Sensitive from "./sensitive.png";

type EmotionType = "happy" | "nomal" | "sad" | "sensitive";

const emotionImagesList: Record<EmotionType, string> = {
  happy: Happy,
  nomal: Nomal,
  sad: Sad,
  sensitive: Sensitive,
};
export const emotionImage = (emotionType: EmotionType) =>
  emotionImagesList[emotionType];
