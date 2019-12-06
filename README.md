
# Questions you should be able to answer:

## What is the DOM, anyway?

- Document Object Model: term for the stuff on the page. The browser reads your HTML, and it creates rectangles. Internally, it keeps track of these rectangles using something that looks like a deeply nested dictionary.

## How do I create DOM elements in HTML?

Write some HTML tags!

## How do I access a single DOM element?

`document.querySelector` will retrieve one and only one element from the DOM.

```js
const thePic = document.querySelector(".js-picture");
```


## How do I access many DOM elements?

```js
const allButtons = document.querySelectorAll('button');
```

### What does `document.querySelectorAll()` return?

It returns a `NodeList`, which is an "array-like" object.

- It has a `.length` property
- It has a `.forEach()` method (which is similar to `.map`, but more lame.)

## How do I attach custom functions to a DOM element?

You call `.addEventListener` and pass it two arguments:

- A string specifying what event to listen for.
- A function that should run when the event occurs.

## How do I modify the properties/attributes of a DOM element?

You just assign to it!

(To figure out the name of the property, you can use the JS Console.)

### What are some common properties that I should care about?

- `.src` this is the path to the image an `img` tag should show
- `.href` this is the address an `a` tag will go to when you click it
- `.textContent` this is the text between an element's opening and closing tag.
- `.innerHTML` it's like `.textContent` but you can assign it a string that contains HTML.
    - NOTE: THIS IS DANGEROUS.

## How do I create a DOM element in JavaScript?

```js
const anImg = document.createElement("img");
```

## How do I add a DOM element to the page?

```js
document.body.appendChild(anImg);
```



-----

# Pairing instructions:

## Only one of you will fork this repo

### That developer will "Add collaborator"

## Both of you will clone the fork to your computers.

## Each developer will make a branch

```sh
git branch myusername/myfeature
git checkout myusername/myfeature
```

## Each developer will make some code changes

## commit and push!

The first time you push, you need an extra `-u origin myusername/myfeature`

```sh
git push -u origin myusername/myfeature
```

If you don't it'll warn you and tell you what to type `:)`

## Each of you will create a PR

## Never merge your own branch, merge the other developer's branch

## Each of you will switch back to the `master` branch

```sh
git checkout master
```

## Then, pull down the changes to master

```sh
git pull
```

## Delete your old branch

```sh
git branch -d myusername/myfeature
```

## For every feature, and every bug fix, make a branch

