import { ActionType, createAction } from "typesafe-actions";

export interface FoodData {
  name: string;
}

export interface FoodPayload {
  food: {
    id: string;
    data: FoodData;
  }
  onComplete: () => void;
}

export const onUploadFood = createAction("home/UPLOAD_FOOD")<FoodPayload>();

export type HomeActions = ActionType<typeof onUploadFood>;
