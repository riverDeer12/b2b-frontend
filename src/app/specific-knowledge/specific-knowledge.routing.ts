import {Routes} from '@angular/router';
import {SpecificKnowledgeHomeComponent} from "./pages/specific-knowledge-home/specific-knowledge-home.component";
import {SpecificKnowledgeCreateComponent} from "./pages/specific-knowledge-create/specific-knowledge-create.component";
import {SpecificKnowledgeListResolver} from "./core/resolvers/specific-knowledge-list-resolver.service";
import {SpecificKnowledgeResolver} from "./core/resolvers/specific-knowledge.resolver";
import {SpecificKnowledgeEditComponent} from "./pages/specific-knowledge-edit/specific-knowledge-edit.component";

export const SpecificKnowledgeRoutes: Routes = [
    {
        path: '',
        component: SpecificKnowledgeHomeComponent,
        resolve: {
            specificKnowledge: SpecificKnowledgeListResolver
        }
    },
    {
        path: 'edit/:scientist-id/:id',
        component: SpecificKnowledgeEditComponent,
        resolve: {
            specificKnowledge: SpecificKnowledgeResolver
        }
    }
]
