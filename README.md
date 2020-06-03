This repo provides an example on how to replicate the null tab ID bug for Chromium. 
To replicate the issue, enable developer mode for extensions, load this folder as 
an unpacked extension, then attempt to open the devtools when navigating between pages. 
If you open the devtools panel and you see "Working Panel", then the issue was not 
replicated. However, if you do not see "Working Panel", check for errors on the 
extensions page.