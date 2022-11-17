import { DictOption } from "./DictOption";
import { FileItem } from "./FileItem";

export interface FormToSend {
  isResume: boolean;
  name?: string;
  email?: string;
  specialization?: DictOption;
  file?: FileItem;
  about?: string;
}
