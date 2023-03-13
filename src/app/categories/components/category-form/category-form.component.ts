import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../core/models/category';
import {FormType} from '../../../shared/enums/form-type';
import {CategoryService} from '../../core/services/category.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {
    @Input() formType!: FormType;
    @Input() category!: Category

    form!: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
                private messageService: MessageService,
                private categoryService: CategoryService) {
    }

    ngOnInit(){
        this.initFormGroup();
    }

    initFormGroup = () => this.formType === FormType.Create ?
        this.initCreateForm() : this.initEditForm();


    private initCreateForm() {
        this.form = this.fb.group({
            name: new FormControl('', Validators.required),
            subcategories: new FormControl('', Validators.required),
        })
    }

    private initEditForm() {
        this.form = this.fb.group({
            name: new FormControl(this.category.name, Validators.required),
            subcategories: new FormControl(this.category.subcategories, Validators.required),
        })
    }

    submit(): void {
        if (this.form.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Validation error',
                detail: 'Check values and try again.'
            });
        }

        this.formType === FormType.Create ?
            this.createCategory() :
            this.editCategory();
    }

    private createCategory() {

        console.log(this.form.value);
        return;

        this.categoryService.createCategory(this.form.value).subscribe((response: any) => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Category is created successfully.'
            });
        })
    }

    private editCategory() {
        this.categoryService.createCategory(this.form.value).subscribe((response: any) => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Category is updated successfully.'
            });
        })
    }
}
