#Micro#
##A starting place for fast and powerful static sites##

Micro is designed to give you the basics of a modern static site from in which you can bootstrap your app or site.  Specifically, micro gives you the following:

+ Bootstrap3
+ jQuery
+ Angular
	+ Angular Cookies
	+ Angular Resources
	+ Angular Sanitize
	+ Angular Routes
+ A Basic App designed to serve static pages
+ A Couple of Code Templates

#Install#
1. Copy Somewhere
2. Make Any Desired Changes
3. Profit (maybe...)

#Optional Features#
Micro fully supports Bower, but we've decided to not make it the default.  You'll find a handy bower.json with all the dependencies setup, but currently index.html uses manual copies of the minified requirements.  We do this because working with bower can be a pain, especially for those who aren't used to it, and because many basic requirements (jQuery, I'm looking at you...) don't properly package their bower modules.

#Grunt?#
Nope.  Grunt is a fantastic tool, and we strongly suggest it, but given that it has a ton of dependencies and is daunting for newbies, we've decided to not include it.  That being said, you'll find this project will play nicely with grunt, especially the grunt-bower module.

#Who is the audience for this?#
Myself mostly.  While more powerful tools exist (Yeoman + MEAN) that are fantastic for more serious endeavors, the truth is that 70% of the time, this is all I need, and everything else gets in the way.  However, I felt this would be handy to newbies, hackers, and people looking to experiment with Angular/Bootstrap.

#How does the Pages app work?#
Simply drop your html pages inside views/pages, with your desired name.  Then you should be able to load them by going to /#/pages/pagename.  Make sure they end in .html, as the app is currently very naive and does no checking.

#What if I want to use this as a CMS?#
You'll probably want to add in some features, such as basic user auth, markdown support, and so on.  You will probably need a backend as well (unless you're very clever or have the wallet for Firebase).  This is NOT an out of the box CMS solution for static sites, and for that, I suggest looking at Jekyll or Octopress.