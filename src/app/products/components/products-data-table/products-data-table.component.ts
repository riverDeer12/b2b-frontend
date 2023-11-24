import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Category} from '../../../categories/core/models/category';
import {Table} from 'primeng/table';
import {ConfirmationService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {SharedService} from '../../../shared/services/shared.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {Router} from '@angular/router';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {DialogFormComponent} from '../../../shared/components/dialog-form/dialog-form.component';
import {FormType} from '../../../shared/enums/form-type';
import {DialogContentTypes} from '../../../shared/constants/dialog-content-types';
import {NotificationType} from '../../../shared/enums/notification-type';
import {Product} from '../../core/models/product';
import {ProductService} from '../../core/services/product.service';

@Component({
  selector: 'products-data-table',
  templateUrl: './products-data-table.component.html',
  styleUrls: ['./products-data-table.component.scss']
})
export class ProductsDataTableComponent {
    @Input() data: Product[] = [];
    @Input() companyId!: string;
    @Input() categories!: Category[];
    @Input() dialogEdit!: boolean;

    @ViewChild('filter') filter!: ElementRef;
    @ViewChild('productsDataTable') table!: Table;

    constructor(private confirmationService: ConfirmationService,
                private dialogService: DialogService,
                private sharedService: SharedService,
                private productService: ProductService,
                private notificationService: NotificationService,
                private router: Router) {
        this.listenForDataChanges();
    }

    ngOnInit() {

    }

    /**
     * Method for handling
     * global filter across data.
     *
     * @param table table identifier
     * @param event filter event type
     */
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    /**
     * Method for clearing
     * global filter input data.
     *
     * @param table
     */
    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }

    /**
     * Redirect user to
     * product edit page.
     *
     * @param product selected product.
     */
    goToEditPage = (product: Product) =>
        this.router.navigateByUrl('/admin/products/edit/' + EntityType.Product +
            '/' + product.companyId + '/' + product.id).then();

    /**
     * Prepare edit form
     * for selected product.
     *
     * @param product selected product.
     */
    prepareEditControl(product: Product): void {
        this.dialogEdit ? this.openEditDialog(product) : this.goToEditPage(product);
    }

    /**
     * Open product
     * edit form in dialog.
     *
     * @param product selected product.
     */
    openEditDialog(product: Product) {
        this.dialogService.open(DialogFormComponent, {
            data: {
                header: 'products.edit',
                formType: FormType.Edit,
                contentType: DialogContentTypes.Product,
                data: product,
                parentEntityType: EntityType.Company,
                parentEntityId: this.companyId,
                categories: this.categories
            }
        })
    }

    /**
     * Trigger dialog form
     * for creating new product item
     * for company.
     */
    openCreateDialog(): void {
        this.dialogService.open(DialogFormComponent, {
            data: {
                header: 'products.create',
                formType: FormType.Create,
                contentType: DialogContentTypes.Product,
                parentEntityType: EntityType.Company,
                parentEntityId: this.companyId,
                categories: this.categories
            }
        })
    }

    /**
     * Trigger popup to
     * confirm deleting selected
     * equipment item from data table.
     *
     * @param companyId selected product company id
     * @param productId selected product id
     */
    confirmDelete(companyId: string, productId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.productService.deleteProduct(companyId, productId).subscribe(() => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.id !== productId));
                    },
                    () => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }

    /**
     * Data change listener
     * subscribe method.
     */
    private listenForDataChanges(): void {
        this.productService.listenProduct()
            .subscribe((response: Product) => {
                this.productService.getProducts(this.companyId)
                    .subscribe((response: Product[]) => {
                        this.data = response.map((x: Product) =>
                            Object.assign(new Product(), x)
                        );
                        this.table.reset();
                    })
            })
    }

    openFlipActiveDialog(productId: string): void {
        this.confirmationService.confirm({
            key: 'confirmEquipmentActivityChangeDialog',
            accept: () => {
                this.sharedService.flipActive(EntityType.Equipment, productId, EntityType.Scientist,
                    this.companyId).subscribe((response: any) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'activity-change.successfully-changed');

                        let flippedEntity = this.data.find(x => x.id === response.id) as Product;

                        flippedEntity.isActive = !flippedEntity.isActive;
                    },

                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'activity-change.error');
                    })
            },
        });
    }
}
