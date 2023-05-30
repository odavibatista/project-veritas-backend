import { RecordActionResponse, After } from 'adminjs';
import { BaseProvider } from '../providers';
import { UploadOptionsWithDefault } from '../types/upload-options.type';
export declare const updateRecordFactory: (uploadOptionsWithDefault: UploadOptionsWithDefault, provider: BaseProvider) => After<RecordActionResponse>;
