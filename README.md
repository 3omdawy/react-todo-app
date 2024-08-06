# ToDo App with React

Adapted from [this tutorial](https://www.youtube.com/watch?v=W0Uf_xu350k), this is a demo project for an elegant todo list (focused on learning some React concepts)
![ToDo](https://github.com/user-attachments/assets/0dd6fd5c-9bef-41c8-b890-9f222b38d636)

# Main Concepts

## 1. Handling Styles

### For CSS

There are 2 options

1. It can be imported directly in any JS file.
   To have global CSS files, import them in `index.js`

```
import './styles/GlobalStyles.css'
```

2. It can included in `index.html`

### For SCSS

These are the steps:

1. Install 3 dependecies: `sass`, `sass-loader `, `style-loader`

2. Import the scss module as a style in the JS file as with the CSS

```
import style from './styles/modules/app.module.scss';
```

3. Use style.[styleName] as a className property for the element you need to style

```
<div className={style.app__wrapper}>
```

- Note: to use multiple styles, you need a utility function to concantenate an array of styles:

```
export const getClasses = (classes) => {
    return classes.filter(item => item !== '').join(' ').trim();
}
```

## 2. React {children} prop

The natural way to treat some React components (e.g. headings / buttons / links ...) in a similar way to HTML is to:

1. Use the text to display between the component tags

```
<PageTitle>TODO LIST</PageTitle>
```

2. Use the {children} prop in the child component to render the text from the parent

```
function PageTitle({ children }) {
    return (
        <p className={style.title}>{children}</p>
    )
}
```

## 3. Integrating Redux with React

See [this repo](https://github.com/3omdawy/react-redux-todos)

## 4. Using browser local storage

- Local storage in the browser can be used to store data (e.g. todos) as key-value pairs (both are strings)
- To read data:

```
JSON.parse(window.localStorage.getItem('todolist'))
```

- To save data:

```
window.localStorage.setItem('todolist', JSON.stringify(localTodolist));
```

- To view the saved data in the dev tools:

```
Application => Storage => Local storage
```

## 5. Using react-hot-toast 😉

It is a very simple and useful library to display toasts in React.
See [this GitHub repo](https://github.com/timolins/react-hot-toast). Simply call:

```
toast.success('Task added successfully');
```

and add the following in App.js:

```
      <Toaster toastOptions={{
        position: 'bottom-right',
        style: {
          fontSize: "1.4rem",
        }
      }} />
```

## 6. Using framer-motion

It is a simple and useful library for making animations.
See [this GitHub repo](https://github.com/framer/motion/tree/main/packages/framer-motion). See `CheckButton.js`

# Installation Steps

```
git clone [GitHub Repo Path]
cd [into the directory]
npm install
npm start
```
