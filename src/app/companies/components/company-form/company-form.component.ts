import {Component, Input} from '@angular/core';
import {ResearchProblem} from '../../../research-problems/core/models/research-problem';
import {Company} from '../../core/models/company';
import {FormType} from '../../../shared/enums/form-type';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {Category} from '../../../categories/core/models/category';
import {JobOffer} from '../../../job-offers/core/models/job-offer';
import {Product} from '../../../products/core/models/product';
import {EntityDocument} from "../../../custom-controls/core/model/entity-document";
import {AuthService} from "../../../auth/core/services/auth.service";
import {RedirectType} from "../../../shared/enums/redirect-type";

@Component({
    selector: 'company-form',
    templateUrl: './company-form.component.html',
    styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent {
    @Input() formType!: FormType;
    @Input() company!: Company;
    @Input() researchProblems!: ResearchProblem[];
    @Input() jobOffers!: JobOffer[];
    @Input() products!: Product[];
    @Input() categories!: Category[];
    @Input() documents!: EntityDocument[];

    @Input() returnUrl!: string;

    constructor(private authService: AuthService) {
    }

    public get type(): typeof FormType {
        return FormType;
    }

    public get redirectType(): typeof RedirectType {
        return RedirectType;
    }


    entityType: EntityType = EntityType.Company;


    /**
     * Check if user has access to documents.
     */
    documentsAccess = () => this.authService.isSuperAdminLogged();

    ngOnInit() {
        this.researchProblems = this.researchProblems?.map((x: ResearchProblem) =>
            Object.assign(new ResearchProblem(), x)
        );
        this.jobOffers = this.jobOffers?.map((x: JobOffer) =>
            Object.assign(new JobOffer(), x)
        );
        this.products = this.products?.map((x: Product) =>
            Object.assign(new Product(), x)
        );
        this.categories = this.categories?.map((x: Category) =>
            Object.assign(new Category(), x)
        );
    }
}
