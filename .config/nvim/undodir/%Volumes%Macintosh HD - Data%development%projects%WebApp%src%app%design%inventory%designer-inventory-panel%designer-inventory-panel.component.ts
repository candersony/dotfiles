Vim�UnDo� �������c�@���cZg���r�e2i���  
                                   `"b    _�                     �        ����                                                                                                                                                                                                                                                                                                                                                             `L�     �   �   �                  this.viewModel = {   #          showSearchResults: false,   &          showCompleteInventory: true,              showSuggestions: true,   -          suggestions: this.getSuggestions(),             inventory: {   L            title: this.text.getText('app:inventory:dropletsLabel:default'),   (            groups: this.getInventory(),             },             search: {   Q            title: this.text.getText('app:inventory:searchResultsLabel:default'),   Y            noItemsTitle: this.text.getText('app:inventory:noResultsFoundLabel:default'),               items: [],             },   
        };       b        this.searchDropletsLabel = this.text.getText('app:inventory:searchDropletsLabel:default');       (        this.subscribeToSearchResults();5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             `L�     �   �   �   �    �   �   �   �    5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             `L�    �   �   �                this.viewModel = {   #          showSearchResults: false,   &          showCompleteInventory: true,              showSuggestions: true,   -          suggestions: this.getSuggestions(),             inventory: {   L            title: this.text.getText('app:inventory:dropletsLabel:default'),   (            groups: this.getInventory(),             },             search: {   Q            title: this.text.getText('app:inventory:searchResultsLabel:default'),   Y            noItemsTitle: this.text.getText('app:inventory:noResultsFoundLabel:default'),               items: [],             },   
        };       b        this.searchDropletsLabel = this.text.getText('app:inventory:searchDropletsLabel:default');       (        this.subscribeToSearchResults();   P    this.userFilterPreferencesSubscription = this.dropletFilterManagementService   #      .fetchUserFilterPreferences()         .subscribe(() => {   	      });5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             `p�    �   �   �          P    this.userFilterPreferencesSubscription = this.dropletFilterManagementService   #      .fetchUserFilterPreferences()         .subscribe(() => {});5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            t           t           v        `"b    �   �   �          H        title: this.text.getText('app:inventory:dropletsLabel:default'),5�_�                    t        ����                                                                                                                                                                                                                                                                                                                            t           t           v        `"Y�     �   s   u        #jj     this.cancelInFlightSearch();5��