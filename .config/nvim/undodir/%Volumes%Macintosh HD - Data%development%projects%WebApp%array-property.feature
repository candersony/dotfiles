Vim�UnDo� ��ف�D�E��=<�5�`g�Q窣�!y����   _            | co   [      �   �          �   �    `�}�    _�       �           �           ����                '   
                                                                                                                                                                                                                                                                                                                           v       `���     �         I    �         I    5�_�   �   �           �          ����                .   
                                                                                                                                                                                                                                                                                                                           v       `���     �         P          Scenario: Add a new item5�_�   �   �           �   	       ����                .   
                                                                                                                                                                                                                                                                                                                           v       `���     �      
   P            When I add a new item5�_�   �   �           �          ����                .   
                                                                                                                                                                                                                                                                                                                           v       `���     �         P            When I add a new item5�_�   �   �           �          ����                .   
                                                                                                                                                                                                                                                                                                                           v       `���     �         P    �         P    5�_�   �   �           �      	    ����                /   
                                                                                                                                                                                                                                                                                                                           v       `���     �         Q    �         Q    5�_�   �   �           �          ����                0   
                                                                                                                                                                                                                                                                                                                           v       `���     �         R               | config1 |5�_�   �   �           �          ����                0   
                                                                                                                                                                                                                                                                                                                           v       `��     �         R               | config1 |5�_�   �   �           �   !       ����                0   
                                                                                                                                                                                                                                                                                                                           v       `��     �       "   R               | config1 |5�_�   �   �           �   R   	    ����                0   
                                                                                                                                                                                                                                                                                                                           v       `��h     �   R            �   R            5�_�   �   �           �   S       ����                0   
                                                                                                                                                                                                                                                                                                                           v       `��i     �   R   T   \            �   R   T   [    5�_�   �   �           �   T       ����                0   
                                                                                                                                                                                                                                                                                                                           v       `��p     �   S   U   \          Scenario: Add a new items5�_�   �   �           �   T       ����                0   
                                                                                                                                                                                                                                                                                                                           v       `��q     �   S   U   \          Scenario: 5�_�   �   �           �   V       ����                0   
                                                                                                                                                                                                                                                                                                                           v       `��     �   V   X   ]            �   V   X   \    5�_�   �   �           �   \       ����                0   
                                                                                                                                                                                                                                                                                                                           v       `��     �   [   ]   ]               | config3 |5�_�   �   �           �   \       ����                0   
                                                                                                                                                                                                                                                                                                                           v       `��     �   \   ^   ]    �   \   ]   ]    5�_�   �   �           �   ]       ����                0   
                                                                                                                                                                                                                                                                                                                           v       `��     �   \   ^   ^               | config4 |5�_�   �   �           �   @        ����                0   
                                                                                                                                                                                                                                                                                                                  ^           v        `��_     �   ?   @          5    Scenario: Add new items after deleting some items         Given there are items:            | Name    |            | config1 |            | config2 |            | config3 |            | config4 |            | config5 |         When I delete:            | Name    |            | config1 |            | config2 |            | config3 |            | config4 |          And I add a new item   !      Then there should be items:            | Name    |            | config5 |            | config2 |         5�_�   �   �           �   ?        ����                0   
                                                                                                                                                                                                                                                                                                                  J           v        `��a    �   >   ?           5�_�   �   �           �           ����                0   
                                                                                                                                                                                                                                                                                                                  I           v        `�}�     �              I   (Feature: Array property item auto-naming           Background:   *      Given I am editing an array property   ]       And the Droplet definition "name" property for an item has a default value of "config"           Scenario: Add a new item         Given there are no items         When I add 1 new item   !      Then there should be items:            | Name    |            | config1 |           Scenario: Add a new items         Given there are no items         When I add 3 new item   !      Then there should be items:            | Name    |            | config1 |            | config2 |            | config3 |       3    Scenario: Add a new item after deleting an item         Given there are items:            | Name    |            | config1 |            | config2 |            | config3 |            | config4 |            | config5 |         When I delete:            | Name    |            | config2 |          And I add a new item   !      Then there should be items:            | Name    |            | config1 |            | config3 |            | config4 |            | config5 |            | config6 |       6    Scenario: Add a new item after deleting some items         Given there are items:            | Name    |            | config1 |            | config2 |            | config3 |            | config4 |            | config5 |         When I delete:            | Name    |            | config1 |            | config2 |            | config3 |            | config4 |          And I add a new item   !      Then there should be items:            | Name    |            | config5 |            | config2 |       5    Scenario: Manually edit a name and add a new item         Given there are no items         When I add 3 new item   -        And I change item 3 name to 'config4'   !      Then there should be items:            | Name    |            | config1 |            | config2 |            | config4 |            | config3 |    5�_�   �               �           ����                    
                                                                                                                                                                                                                                                                                                                             v        `�}�    �   Z                       | co�   [            �   >                  Scenario: Manu�   ?            �                          | c�               �                   �               5��