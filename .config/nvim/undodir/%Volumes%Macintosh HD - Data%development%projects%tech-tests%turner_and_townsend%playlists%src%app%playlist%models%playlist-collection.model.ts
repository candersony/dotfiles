Vim�UnDo� 8_T���jJ�.|�U� �)2��df\��\Ap      limport { PlaylistCollection as ApiPlaylistCollection } from '../../api/playlist/models/playlist-collection';      =      %       %   %   %    `��    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `�*     �                   �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�,     �                interface PlaylistCollection {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�.     �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�/     �                  5�_�                       @    ����                                                                                                                                                                                                                                                                                                                                                             `�[     �              5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                                             `�`     �                 Aexport const createPlaylistCollection(response: PlaylistResponse)5�_�                       B    ����                                                                                                                                                                                                                                                                                                                                                             `�c     �                 Bexport const createPlaylistCollection (response: PlaylistResponse)5�_�      	                 &    ����                                                                                                                                                                                                                                                                                                                                                             `��     �                 Fexport const createPlaylistCollection (response: PlaylistResponse) => 5�_�      
           	      *    ����                                                                                                                                                                                                                                                                                                                                                             `��     �                 Iexport const createPlaylistCollection  = (response: PlaylistResponse) => 5�_�   	              
      *    ����                                                                                                                                                                                                                                                                                                                                                             `��     �                 /export const createPlaylistCollection  = () => 5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                             `��     �                 Nimport {PlaylistResponse} from 'src/app/api/playlist/models/playlist-response'5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �                import5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `��     �                import {  } from "module";5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                                v       `��     �                Aimport {  } from "../../api/playlist/models/playlist-collection";5�_�                       4    ����                                                                                                                                                                                                                                                                                                                                                v       `��    �             5�_�                       <    ����                                                                                                                                                                                                                                                                                                                                                v       `�     �                limport { PlaylistCollection as ApiPlaylistCollection } from "../../api/playlist/models/playlist-collection";5�_�                       j    ����                                                                                                                                                                                                                                                                                                                                                v       `�	    �                limport { PlaylistCollection as ApiPlaylistCollection } from '../../api/playlist/models/playlist-collection";5�_�                       9    ����                                                                                                                                                                                                                                                                                                                                                v       `�     �                 >export const createPlaylistCollection  = (apiCollection: ) => 5�_�                       *    ����                                                                                                                                                                                                                                                                                                                                                v       `�     �                 Sexport const createPlaylistCollection  = (apiCollection: ApiPlaylistCollection) => 5�_�                       P    ����                                                                                                                                                                                                                                                                                                                                                v       `�!     �                 Pexport const createPlaylistCollection  = (collection: ApiPlaylistCollection) => 5�_�                       R    ����                                                                                                                                                                                                                                                                                                                                                v       `�#     �                 Rexport const createPlaylistCollection  = (collection: ApiPlaylistCollection) => ({5�_�                    	       ����                                                                                                                                                                                                                                                                                                                                                v       `�+     �                   name: collection.name,5�_�                       L    ����                                                                                                                                                                                                                                                                                                                                                v       `�5     �      	   
      Rexport const createPlaylistCollection  = (collection: ApiPlaylistCollection) => ({5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                v       `�<     �   	                5�_�                    
   #    ����                                                                                                                                                                                                                                                                                                                                                v       `�J     �   	              $ playlists: collection.content.map( 5�_�                    
   1    ����                                                                                                                                                                                                                                                                                                                                                v       `�T     �         
    5�_�                       2    ����                                                                                                                                                                                                                                                                                                                                                v       `�V     �   
              3 playlists: collection.content.map(createPlaylist) 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `�Z     �                 }5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `�]     �            
   0import {createPlaylist} from './playlist.model';       %export interface PlaylistCollection {     readonly name: string;   !  readonly playlists: Playlist[];   }       fexport const createPlaylistCollection  = (collection: ApiPlaylistCollection): PlaylistCollection => ({     name: collection.name,   2 playlists: collection.content.map(createPlaylist)5�_�                        	    ����                                                                                                                                                                                                                                                                                                                                                v       `��    �               2import { createPlaylist } from './playlist.model';5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                v       `�s     �                 });5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                                                v       `�	�    �                 };5�_�   !   #           "      =    ����                                                                                                                                                                                                                                                                                                                                                             `��     �                limport { PlaylistCollection as ApiPlaylistCollection } from '../../api/playlist/models/playlist-collection';5�_�   "   $           #      =    ����                                                                                                                                                                                                                                                                                                                                                             `��     �                kimport { PlaylistCollection as ApiPlaylistCollection } from './../api/playlist/models/playlist-collection';5�_�   #   %           $      =    ����                                                                                                                                                                                                                                                                                                                                                             `��    �                jimport { PlaylistCollection as ApiPlaylistCollection } from '/../api/playlist/models/playlist-collection';5�_�   $               %      D    ����                                                                                                                                                                                                                                                                                                                                                             `��    �                iimport { PlaylistCollection as ApiPlaylistCollection } from '../api/playlist/models/playlist-collection';5��