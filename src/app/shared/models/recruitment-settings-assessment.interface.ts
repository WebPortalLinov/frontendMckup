import { PageInfo } from './page-info.model';
import { Paginator } from 'app/configs/paginator.config';

export interface settingsAssessment {
    id?: string;
    valData0: string;
    valData1: string;
    valData2: string;
    valData4: string;
    valData6 : boolean;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}
export class settingsAssessmentRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}