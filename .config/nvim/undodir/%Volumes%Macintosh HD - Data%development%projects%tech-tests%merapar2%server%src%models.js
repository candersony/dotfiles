Vim�UnDo� i�}���T4��@ʇ�o��Ϲ�A�,����")                    )       )   )   )    `��V    _�                            ����                                                                                                                                                                                                                                                                                                                                                             `�ס    �                 createUser(users, userId) {   F    return { name: users[userId] ? users[userId].name : "anonymous" };5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�׺    �                  createComment(comment, user) {       return {         ...comment,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���    �   
            $  createPost(post, user, comments) {       return {         ...post,5�_�                          ����                                                                                                                                                                                                                                                                                                                                                             `��`     �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��c     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���     �               !  createUser(usersData, userId) {5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             `���     �                  createUser(userData, userId) {5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             `���     �               N    return { name: usersData[userId] ? usersData[userId].name : "anonymous" };5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             `���     �                 createUser(userData) {5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             `���     �               M    return { name: userData[userId] ? usersData[userId].name : "anonymous" };5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��      �                   return { name: 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �                   return { name 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �             �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �                 createUser({ id, name }) {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��-     �               &  createAnonymouseUser({ id, name }) {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��-     �               "  createAnonymouseUser(, name }) {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��.     �                  createAnonymouseUser(name }) {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��.     �                 createAnonymouseUser(}) {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��0     �                 createAnonymouseUser({5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��6     �                   return { name, id }; 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��F     �               &    return { name: 'Anonymous', id }; 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��G    �                   return { name, id };      },     createAnonymouseUser() {   !    return { name: 'Anonymous'}; 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���     �               C      commentsCount: Array.isArray(comments) ? comments.length : 0,5�_�                           ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��     �                   return {         ...postData,         user,   \      commentsCount: comments[postData.id] && Array.isArray(comments) ? comments.length : 0,5�_�                           ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��     �               +    const newLocal = comments[postData.id];       return {         ...postData,         user,   O      commentsCount: newLocal && Array.isArray(comments) ? comments.length : 0,5�_�                           ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��     �               S      commentsCount: postComments && Array.isArray(comments) ? comments.length : 0,5�_�                           ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��     �               F      commentsCount: && Array.isArray(comments) ? comments.length : 0,5�_�                           ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��     �               E      commentsCount: & Array.isArray(comments) ? comments.length : 0,5�_�                           ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��     �               D      commentsCount:  Array.isArray(comments) ? comments.length : 0,5�_�                        #    ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��"     �               C      commentsCount: Array.isArray(comments) ? comments.length : 0,5�_�      !                  3    ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��(    �               G      commentsCount: Array.isArray(postComments) ? comments.length : 0,5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `���     �                   return { name, id };5�_�   !   #           "          ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `���     �                   return { name};5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��     �                 createUser({ id, name }) {5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��     �                 createUser({ d, name }) {5�_�   $   &           %          ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��     �                 createUser({ , name }) {5�_�   %   '           &   	       ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��7     �      	         $  createComment(commentData, user) {    �      
             �      
       5�_�   &   (           '   
       ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��B     �   	   
                ...commentData,5�_�   '   )           (   
       ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��E     �   	                  �   	          5�_�   (               )   
       ����                                                                                                                                                                                                                                                                                                                                         *       v   *    `��U    �   	                  body: commentData.body,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `���     �               %  createComment(ncommentData, user) {5��