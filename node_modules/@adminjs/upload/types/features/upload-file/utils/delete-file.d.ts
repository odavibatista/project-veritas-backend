import { BaseRecord, ActionContext } from 'adminjs';
import { BaseProvider } from '../providers';
import { UploadOptionsWithDefault } from '../types/upload-options.type';
export declare const deleteFile: (options: UploadOptionsWithDefault, provider: BaseProvider, context: ActionContext, record?: BaseRecord | undefined) => Promise<void>;
