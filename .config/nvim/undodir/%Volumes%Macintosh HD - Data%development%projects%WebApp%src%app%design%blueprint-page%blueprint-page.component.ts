Vim�UnDo� 1<xU�A�G��KP (�d�7���)"t���ъ   9                                  `��\    _�                     ,       ����                                                                                                                                                                                                                                                                                                                                                             `��&     �   ,   .   :          �   ,   .   9    5�_�                    -       ����                                                                                                                                                                                                                                                                                                                                                             `��+    �   ,   .   :          console.log(5�_�                     -        ����                                                                                                                                                                                                                                                                                                                                                             `��[     �               :   =import { Component, OnDestroy, OnInit } from '@angular/core';   Timport { Company, OrganisationProvider, Page } from '../../organisation-management';   3import { takeUntil, filter } from 'rxjs/operators';   %import { Select } from '@ngxs/store';   ^import { DesignManagementState } from '../../design-management/store/design-management.state';   "import { Observable } from 'rxjs';   _import { SurfaceMediatorService } from '../../smart-surface/services/surface-mediator.service';   1import { BreadcrumbService } from '../../shared';   Timport { AppRoutingBreadcrumbAlias } from '../../app-routing-breadcrumb-alias.enum';   Rimport { BlueprintProblemsService } from '../problems/blueprint-problems.service';   Jimport { trigger, transition, style, animate } from '@angular/animations';   Iimport { BlueprintPageDataService } from './blueprint-page-data.service';       @Component({   $  selector: 'design-blueprint-page',   1  templateUrl: './blueprint-page.component.html',   1  styleUrls: ['./blueprint-page.component.scss'],     animations: [       trigger('inOutAnimation', [   c      transition(':enter', [style({ opacity: 0 }), animate('1s ease-out', style({ opacity: 1 }))]),   b      transition(':leave', [style({ opacity: 1 }), animate('1s ease-in', style({ opacity: 0 }))]),       ]),     ],   (  providers: [BlueprintPageDataService],   })   Oexport class BlueprintPageComponent extends Page implements OnInit, OnDestroy {   R  @Select(DesignManagementState.designName) public designName: Observable<string>;   <  public readonly selectedOrganisation: Observable<Company>;         public constructor(   G    public readonly blueprintPageDataService: BlueprintPageDataService,   =    private readonly surfaceMediator: SurfaceMediatorService,   H    private readonly blueprintProblemsService: BlueprintProblemsService,   /    organisationProvider: OrganisationProvider,   (    breadcrumbService: BreadcrumbService     ) {   3    super(organisationProvider, breadcrumbService);     }         public ngOnDestroy(): void {       super.ngOnDestroy();   *    this.surfaceMediator.clearBlueprint();   2    this.blueprintProblemsService.clearProblems();   T    this.breadcrumbService.clearAliasValue(AppRoutingBreadcrumbAlias.BlueprintName);   ,    console.log('Blueprint page destroyed');     }         public ngOnInit(): void {       this.designName         .pipe(   3        filter((blueprintName) => !!blueprintName),            takeUntil(this.destroy$)         )   #      .subscribe((blueprintName) =>   d        this.breadcrumbService.setAliasValue(AppRoutingBreadcrumbAlias.BlueprintName, blueprintName)         );     }   }5��