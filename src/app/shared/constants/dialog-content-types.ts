import {DialogFormContentType} from '../enums/dialog-form-content-type';
import {DialogFormContent} from '../models/dialog-form-content';

export const DialogContentTypes: DialogFormContent[] = [
    {
        type: DialogFormContentType.ResearchProblem,
        formIdentifier: 'researchProblemForm',
        dialogId: 'researchProblemFormDialog'
    },
    {
        type: DialogFormContentType.JobOffer,
        formIdentifier: 'jobOfferForm',
        dialogId: 'jobOfferFormDialog'
    },
    {
        type: DialogFormContentType.SpecificKnowledge,
        formIdentifier: 'specificKnowledgeForm',
        dialogId: 'specificKnowledgeFormDialog'
    },
    {
        type: DialogFormContentType.Equipment,
        formIdentifier: 'equipmentForm',
        dialogId: 'equipmentFormDialog'
    }
]
