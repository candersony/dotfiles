VimUnDoĺ ňŃ<<<uĚ8J×'öcH{nţ

JqWës+í      I    const newValuesVersion = {version: targetVersion, values: newValues};                              `÷    _Đ                            ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                                                    `     ő                         versions: append([5_Đ                       "    ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                                                    `)     ő               Bimport { patch, updateItem, append } from '@ngxs/store/operators';5_Đ                           ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                                                    `7     ő                         versions: append([5_Đ                           ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                                                    `K     ő               !          versions: iif( append([5_Đ                       0    ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                                                    `Y     ő               9          versions: iif(!!existingTargetVersion, append([5_Đ                       <    ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                                                    `_     ő               E          versions: iif(!!existingTargetVersion, updateItem( append([5_Đ                       P    ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                                                    `c     ő               Y          versions: iif(!!existingTargetVersion, updateItem(selectTargetVersion, append([5_Đ      	                 k    ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                                                    `|     ő               t          versions: iif(!!existingTargetVersion, updateItem(selectTargetVersion, { version: targetVersion,  append([5_Đ      
           	          ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                                                    `     ő                         versions: iif(!!existingTargetVersion, updateItem(selectTargetVersion, { version: targetVersion, values: newProperties}) append([5_Đ   	              
          ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                                                    `     ő                         ]),5_Đ   
                        ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                                                    `     ő                         versions: iif(!!existingTargetVersion, updateItem(selectTargetVersion, { version: targetVersion, values: newProperties}), append([               {   %              version: targetVersion,   $              values: newProperties,               },             ])),5_Đ                       ,    ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                      ,          \       v   \    `Ž     ő                   setState(         patch({           [id]: patch({   )          selectedVersion: targetVersion,             versions: iif(   $            !!existingTargetVersion,   _            updateItem(selectTargetVersion, { version: targetVersion, values: newProperties }),5_Đ                       ,    ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                      ,          \       v   \    `Ć     ő               E    const newLocal = {version: targetVersion, values: newProperties};       setState(         patch({           [id]: patch({   )          selectedVersion: targetVersion,             versions: iif(   $            !!existingTargetVersion,   6            updateItem(selectTargetVersion, newLocal),5_Đ                           ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                      ,          \       v   \    `Ď     ő                           append([5_Đ                           ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                      ,          \       v   \    `Ű     ő                              {   '                version: targetVersion,   &                values: newProperties,                 },5_Đ                           ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                      ,          \       v   \    `Ţ     ő                            ])5_Đ                       
    ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                      ,          \       v   \    `č     ő               e    const newProperties = merge(dropletVersion, valuesVersion.values, existingTargetVersion?.values);       M    const newValuesVersion = {version: targetVersion, values: newProperties};5_Đ                            ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                      ,          \       v   \    `ë     ő                 5_Đ                          ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                      ,          \       v   \    `đ    ő             5_Đ                             ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                      ,          \       v   \    `ö    ő               I    const newValuesVersion = {version: targetVersion, values: newValues};5_Đ                           ˙˙˙˙                                                                                                                                                       	                                                                                                                                                                      ,          \       v   \    `ě     ő                5çŞ