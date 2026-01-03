import { StateKeyType } from "@/types/storageState.types";
import { StorageManager } from "./StorageManager";

export const storageManagerState = new StorageManager<StateKeyType>("StateKey");
