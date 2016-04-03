# node-purgewindir
A small Node.js program that deletes a directory by deleting every subdirectory recursively starting with the deepest nested subdirectories first.

##Background

I created this program because I ran into a situation on a Windows 2008R2 machine where I as the owner of the directory with subdirectories, but I wasn't able to delete that directory.

I tried [resetting the owner and inheritable permissions of all sub directories](http://www.fixedbyvonnie.com/2014/01/folder-access-denied-delete-folder-windows), but It didn't work for me.

Then, I found [this answer on superuser.com](http://superuser.com/a/204934/192974) that actually worked. So I decided to build this program to automate that.

##Install and run

1. Create a directory next to the directory you'd like to delete
2. cd into it
3. run `npm install purgewindir`
4. run node node_modules\purgewindir ../name_of_the_directory_you_want_to_delete