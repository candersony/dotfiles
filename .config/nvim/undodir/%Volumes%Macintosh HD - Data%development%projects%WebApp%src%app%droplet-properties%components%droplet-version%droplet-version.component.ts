Vim�UnDo� 5���J�x�
V���iԉwYq���Z;7�����                    "       "   "   "    `TC    _�                        *    ����                                                                                                                                                                                                                                                                                                                                                             `�     �               J    this.options = Object.entries(versions).map(([version, droplet]) => ({5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�     �               I    this.options = Object.entries(versions.map(([version, droplet]) => ({5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�     �               ;    this.options = (versions.map(([version, droplet]) => ({5�_�                       !    ����                                                                                                                                                                                                                                                                                                                                                             `�)     �               :    this.options = versions.map(([version, droplet]) => ({5�_�                       !    ����                                                                                                                                                                                                                                                                                                                                                             `�*     �               9    this.options = versions.map((version, droplet]) => ({5�_�                       !    ����                                                                                                                                                                                                                                                                                                                                                             `�*     �               8    this.options = versions.map((ersion, droplet]) => ({5�_�                       !    ����                                                                                                                                                                                                                                                                                                                                                             `�*     �               7    this.options = versions.map((rsion, droplet]) => ({5�_�      	                 !    ����                                                                                                                                                                                                                                                                                                                                                             `�*     �               6    this.options = versions.map((sion, droplet]) => ({5�_�      
           	      !    ����                                                                                                                                                                                                                                                                                                                                                             `�*     �               5    this.options = versions.map((ion, droplet]) => ({5�_�   	              
      !    ����                                                                                                                                                                                                                                                                                                                                                             `�*     �               4    this.options = versions.map((on, droplet]) => ({5�_�   
                    !    ����                                                                                                                                                                                                                                                                                                                                                             `�+     �               3    this.options = versions.map((n, droplet]) => ({5�_�                       !    ����                                                                                                                                                                                                                                                                                                                                                             `�+     �               2    this.options = versions.map((, droplet]) => ({5�_�                       !    ����                                                                                                                                                                                                                                                                                                                                                             `�+     �               1    this.options = versions.map(( droplet]) => ({5�_�                       (    ����                                                                                                                                                                                                                                                                                                                                                             `�/     �               0    this.options = versions.map((droplet]) => ({5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�a     �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�b     �                 5�_�                       0    ����                                                                                                                                                                                                                                                                                                                                                             `��     �               -import { Droplet, Versions } from './models';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�     �               8  private createVersionLabel = (version: Version) => `${5�_�                       A    ����                                                                                                                                                                                                                                                                                                                                                             `�    �               A  private createVersionLabel = ({ major, minor }: Version) => `${5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �                     label: version,5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                                             `��     �               -      label: this.createVersionLabel(version,5�_�                       ,    ����                                                                                                                                                                                                                                                                                                                                                             `��    �               -      label: this.createVersionLabel(version,5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                                             `��    �               .      label: this.createVersionLabel(version),5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��     �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �                 5�_�                       5    ����                                                                                                                                                                                                                                                                                                                                                             `��     �             5�_�                       7    ����                                                                                                                                                                                                                                                                                                                                                             `��     �                R  private createVersionLabel = ({ major, minor }: Version) => `${major}.${minor}`;    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �               6      label: this.createVersionLabel(droplet.version),5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��    �                     label: (droplet.version),5�_�                       -    ����                                                                                                                                                                                                                                                                                                                                                             `�	    �               :import {DropletVersionPipe} from './droplet-version.pipe';5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             `�4     �                  `import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';   7import { SelectItem } from '../../../ui-design-system';   6import { Droplet, Versions, Version } from './models';   <import { DropletVersionPipe } from './droplet-version.pipe';       @Component({   !  selector: 'cm-droplet-version',   2  templateUrl: './droplet-version.component.html',   2  styleUrls: ['./droplet-version.component.scss'],   2  changeDetection: ChangeDetectionStrategy.OnPush,   })   &export class DropletVersionComponent {   $  @Input() public selected: Droplet;   4  @Input() public set versions(versions: Versions) {   /    this.options = versions.map((droplet) => ({         value: droplet,   @      label: this.dropletVersionPipe.transform(droplet.version),       }));     }   4  @Input() public learnDropletVersioningUrl: string;       @  @Output() public versionChanged = new EventEmitter<Droplet>();         public options: SelectItem[];       8  private dropletVersionPipe = new DropletVersionPipe();   }5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                             `T5     �               @      label: this.dropletVersionPipe.transform(droplet.version),5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                                                             `T8     �               ;      label: dropletVersionPipe.transform(droplet.version),5�_�   !               "           ����                                                                                                                                                                                                                                                                                                                                                             `TB    �                    8  private dropletVersionPipe = new DropletVersionPipe();5��