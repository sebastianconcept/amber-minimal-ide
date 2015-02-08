# Amber Minimal IDE

A fork of the Legacy IDE

### Install

1. Go to the directory of the Amber project you want to develop with this IDE
2. `bower install amber-minimal-ide`
3. Add the following snippet to your `index.html`

```
<a onclick="require('amber/helpers').globals.Browser._open()"
	style="position: fixed; 
		bottom: 0; 
		right: 0; 
		opacity: 0.5; 
		padding: 10px; 
		background-color: #eee">Open IDE</a>
```

### Motivation
This is a fork of the Amber's Legacy IDE aimed to deliver an improved and more productive experience while developing on Amber. This IDE will incrementally evolve with some simple adjustments that attend the perceived issues.

### List of issues 

- Typography issues
- Poor contrast issues
- Focus issues
- Lack of search keyboard shortcut
- Tab close area too small
- SUnit button alignment
- Horizontal arrow keys should change the pane in focus (on Browser and SUnit)
- Vertical arrow keys should change the selected list item when focus is in a list pane
- Save button disabled on pristine
- Class browse shortcut
- Icons on the class list
- Icons on the package list
- Drag and drop to categorise methods
- Marking changed packages
- Visual feedback on successful commit finished
- Visual feedback on failed commit (handle exception and display proper message)
- Select and change theme easily and persist the preference on localStorage
- Change theme to be dark by default

## Contributions

To contribute with this IDE, you develop on your local host and later do a Merge Request. Here are the steps to configure your localhost with this project:

1. Fork this repository into your own
2. `git clone git@github.com:yourgithubusername/amber-minimal-ide.git`
3. `npm install`
4. `bower install`
5. `grunt devel`
6. `amber serve`
7. Visit `http://localhost:4000/`
8. Develop in a new branch
9. Commit and push
10. Open a Pull Request
