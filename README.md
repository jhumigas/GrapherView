# GrapheView

This is a little static application using AngularChart to draw fiew mathematical function. It was a project to get used to Angular's directives. 
You can start using with wamp/mamp or phpstorm as you wish as it requires a local server running. 
The templates used can be found [here](http://startbootstrap.com/template-overviews/freelancer/), not made by me.



## Requirements

* Angular version 1.4.3
* AngularChart  0.2.7
* AngularBootstrap

The version of angularChart I used doesn't implemented the correction about the loading modal issue(graphs not rendering in hidden divs) but FYI it is resolved.

## Installation 

Bower is needed to install angular's modules.

Run 

```sh
bower install
```
## Database

No Database required for this version.

## Overall architecture

The files are organized by type (.js, .css, ...) not by feature but the main core of the app is in the js folder.

This is a single-page app, with three modal managed by angular directives. My idea was to make it possible to reuse these features, if I had to continue this project.
The main directives are : 

* fx-app, that can draw up to one curve
* fxbeta-app, that can draw n curves
* timeline-app, to show message stored in a JSON format.



