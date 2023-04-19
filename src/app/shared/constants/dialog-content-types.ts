import {DialogFormContentType} from '../enums/dialog-form-content-type';

export const DialogContentTypes = {
    ResearchProblem: {
        type: DialogFormContentType.ResearchProblem,
        formIdentifier: 'researchProblemForm',
        dialogId: 'researchProblemFormDialog'
    },
    JobOffer: {
        type: DialogFormContentType.JobOffer,
        formIdentifier: 'jobOfferForm',
        dialogId: 'jobOfferFormDialog'
    },
    SpecificKnowledge: {
        type: DialogFormContentType.SpecificKnowledge,
        formIdentifier: 'specificKnowledgeForm',
        dialogId: 'specificKnowledgeFormDialog'
    },
    Equipment: {
        type: DialogFormContentType.Equipment,
        formIdentifier: 'equipmentForm',
        dialogId: 'equipmentFormDialog'
    }
}
