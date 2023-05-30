import { RecordActionResponse, After } from 'adminjs/types/src';
import { BaseProvider } from '../providers';
import { UploadOptionsWithDefault } from '../types/upload-options.type';
export declare const deleteFileFactory: (uploadOptionsWithDefault: UploadOptionsWithDefault, provider: BaseProvider) => After<RecordActionResponse>;
