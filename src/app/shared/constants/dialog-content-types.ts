import {DialogFormContentType} from '../enums/dialog-form-content-type';

export const DialogContentTypes = {
    ResearchProblem: {
        type: DialogFormContentType.ResearchProblem,
        dialogId: 'researchProblemFormDialog'
    },
    JobOffer: {
        type: DialogFormContentType.JobOffer,
        dialogId: 'jobOfferFormDialog'
    },
    SpecificKnowledge: {
        type: DialogFormContentType.SpecificKnowledge,
        dialogId: 'specificKnowledgeFormDialog'
    },
    Equipment: {
        type: DialogFormContentType.Equipment,
        dialogId: 'equipmentFormDialog'
    },
    Message: {
        type: DialogFormContentType.Message,
        dialogId: 'sendMessageFormDialog'
    }
}
