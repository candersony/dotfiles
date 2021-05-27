Vim�UnDo� IT"�����9��X{e�v��W��*��   [                                  `+��    _�                     1        ����                                                                                                                                                                                                                                                                                                                                                             `+�     �   0   2   \          �   0   2   [    5�_�                    1       ����                                                                                                                                                                                                                                                                                                                                                             `+�     �         \      0import { map, startWith } from 'rxjs/operators';�   0   2   \          debounceTime5�_�                    1       ����                                                                                                                                                                                                                                                                                                                            1          1          v       `+�     �   0   2   \          debounceTime(dueTime)5�_�                    1       ����                                                                                                                                                                                                                                                                                                                            1          1          v       `+�     �   0   2   \          debounceTime(300)5�_�                    1       ����                                                                                                                                                                                                                                                                                                                            1          1          v       `+�#    �   0   2   \          debounceTime(300),5�_�                    1        ����                                                                                                                                                                                                                                                                                                                            1          1          v       `+�2     �               \   Cimport { Component, ChangeDetectionStrategy } from '@angular/core';   1import { Observable, combineLatest } from 'rxjs';   >import { map, startWith, debounceTime } from 'rxjs/operators';       Eimport { AppCommand, AppCommandTypes } from '../../ui-design-system';   >import { FeatureDecisionsService } from '../../feature-flags';   @import { UnsavedChangesService } from '../../design-management';   \import { PublicationsService } from '../../design-management/services/publications.service';   Ximport { DesignerManager } from '../../smart-surface/services/designer-manager.service';   Himport { OpenExportDialog } from '../actions/open-export-dialog.action';   Dimport { OpenSaveDialog } from '../actions/open-save-dialog.action';   Jimport { OpenPublishDialog } from '../actions/open-publish-dialog.action';   Cimport { ViewParameters } from '../actions/view-parameters.action';   Rimport { BlueprintProblemsService } from '../problems/blueprint-problems.service';       @Component({   !  selector: 'cm-blueprint-tools',   2  templateUrl: './blueprint-tools.component.html',   2  styleUrls: ['./blueprint-tools.component.scss'],   2  changeDetection: ChangeDetectionStrategy.OnPush,   })   &export class BlueprintToolsComponent {   >  public readonly commands: { [command: string]: AppCommand };       F  public readonly blueprintHistoryFeatureEnabled: Observable<boolean>;       @  public readonly parametersFeatureEnabled: Observable<boolean>;       =  public readonly publishButtonDisabled: Observable<boolean>;       :  public readonly saveButtonDisabled: Observable<boolean>;         public constructor(   6    private readonly designerManager: DesignerManager,   5    featureDecisionsService: FeatureDecisionsService,   1    unsavedChangesService: UnsavedChangesService,   -    publicationsService: PublicationsService,   6    blueprintProblemsService: BlueprintProblemsService     ) {   K    this.saveButtonDisabled = unsavedChangesService.hasUnsavedChanges.pipe(   4      map((hasUnsavedChanges) => !hasUnsavedChanges)       );       0    this.publishButtonDisabled = combineLatest([   .      unsavedChangesService.hasUnsavedChanges,   8      publicationsService.isCurrentBlueprintPublished(),   (      blueprintProblemsService.isReady$,       ]).pipe(         debounceTime(300),   
      map(   L        ([hasUnsavedChanges, currentBlueprintIsPublished, problemsReady]) =>   L          hasUnsavedChanges || currentBlueprintIsPublished || !problemsReady         ),         startWith(true)       );       X    this.blueprintHistoryFeatureEnabled = featureDecisionsService.allowVersionHistory();       ]    this.parametersFeatureEnabled = featureDecisionsService.allowDropletPropertyManagement();       *    this.commands = this.createCommands();     }       ?  private createCommands(): { [command: string]: AppCommand } {       return {         export: {           name: 'export-command',           label: 'Export',   L        action: () => this.designerManager.dispatch(new OpenExportDialog()),   /        classification: AppCommandTypes.export,         },         save: {           name: 'initiate-save',           label: 'Save',   J        action: () => this.designerManager.dispatch(new OpenSaveDialog()),   -        classification: AppCommandTypes.save,         },         publish: {   "        name: 'publish-blueprint',           label: 'Publish',   V        action: () => this.designerManager.dispatch(new OpenPublishDialog('Toolbar')),   0        classification: AppCommandTypes.publish,         },         parameters: {            name: 'view-parameters',           label: 'Parameters',   J        action: () => this.designerManager.dispatch(new ViewParameters()),   7        classification: AppCommandTypes.viewParameters,         },       };     }   }5�_�                             ����                                                                                                                                                                                                                                                                                                                            1          1          v       `+��     �               \   Cimport { Component, ChangeDetectionStrategy } from '@angular/core';   1import { Observable, combineLatest } from 'rxjs';   >import { map, startWith, debounceTime } from 'rxjs/operators';       Eimport { AppCommand, AppCommandTypes } from '../../ui-design-system';   >import { FeatureDecisionsService } from '../../feature-flags';   @import { UnsavedChangesService } from '../../design-management';   \import { PublicationsService } from '../../design-management/services/publications.service';   Ximport { DesignerManager } from '../../smart-surface/services/designer-manager.service';   Himport { OpenExportDialog } from '../actions/open-export-dialog.action';   Dimport { OpenSaveDialog } from '../actions/open-save-dialog.action';   Jimport { OpenPublishDialog } from '../actions/open-publish-dialog.action';   Cimport { ViewParameters } from '../actions/view-parameters.action';   Rimport { BlueprintProblemsService } from '../problems/blueprint-problems.service';       @Component({   !  selector: 'cm-blueprint-tools',   2  templateUrl: './blueprint-tools.component.html',   2  styleUrls: ['./blueprint-tools.component.scss'],   2  changeDetection: ChangeDetectionStrategy.OnPush,   })   &export class BlueprintToolsComponent {   >  public readonly commands: { [command: string]: AppCommand };       F  public readonly blueprintHistoryFeatureEnabled: Observable<boolean>;       @  public readonly parametersFeatureEnabled: Observable<boolean>;       =  public readonly publishButtonDisabled: Observable<boolean>;       :  public readonly saveButtonDisabled: Observable<boolean>;         public constructor(   6    private readonly designerManager: DesignerManager,   5    featureDecisionsService: FeatureDecisionsService,   1    unsavedChangesService: UnsavedChangesService,   -    publicationsService: PublicationsService,   6    blueprintProblemsService: BlueprintProblemsService     ) {   K    this.saveButtonDisabled = unsavedChangesService.hasUnsavedChanges.pipe(   4      map((hasUnsavedChanges) => !hasUnsavedChanges)       );       0    this.publishButtonDisabled = combineLatest([   .      unsavedChangesService.hasUnsavedChanges,   8      publicationsService.isCurrentBlueprintPublished(),   (      blueprintProblemsService.isReady$,       ]).pipe(         // debounceTime(300),   
      map(   L        ([hasUnsavedChanges, currentBlueprintIsPublished, problemsReady]) =>   L          hasUnsavedChanges || currentBlueprintIsPublished || !problemsReady         ),         startWith(true)       );       X    this.blueprintHistoryFeatureEnabled = featureDecisionsService.allowVersionHistory();       ]    this.parametersFeatureEnabled = featureDecisionsService.allowDropletPropertyManagement();       *    this.commands = this.createCommands();     }       ?  private createCommands(): { [command: string]: AppCommand } {       return {         export: {           name: 'export-command',           label: 'Export',   L        action: () => this.designerManager.dispatch(new OpenExportDialog()),   /        classification: AppCommandTypes.export,         },         save: {           name: 'initiate-save',           label: 'Save',   J        action: () => this.designerManager.dispatch(new OpenSaveDialog()),   -        classification: AppCommandTypes.save,         },         publish: {   "        name: 'publish-blueprint',           label: 'Publish',   V        action: () => this.designerManager.dispatch(new OpenPublishDialog('Toolbar')),   0        classification: AppCommandTypes.publish,         },         parameters: {            name: 'view-parameters',           label: 'Parameters',   J        action: () => this.designerManager.dispatch(new ViewParameters()),   7        classification: AppCommandTypes.viewParameters,         },       };     }   }5��