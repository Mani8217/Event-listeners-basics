# Event-listeners-basics
## project done you can check the page out through this link 👇
<p align="center">
https://mani8217.github.io/Event-listeners-basics/
</p>
### Setup
- We included a html file ready to use. You must not modify it for this exercise.
- We also included an image that is ready to be used and included in the <img> from the html file.
- You don't need to use a css stylesheet for this exercise.

### Homework

Your task is to replicate the behaviour from the zoom.mp4 file (go check it!).
To do that you need to:

1. In the javascript file, store the two buttons from the html in two different variables.

2. Store the image in another variable.
To do these steps you can use the name of the id and classes. Here's an example:
```javascript
const variableName = document.querySelector(".class");
const VARIABLE_NAME = document.querySelector("#id");
```

3. Then, you'll need to create one function. This function will use the variable you created to store the image. As you know, images have attributes that can change their size. Go check in the html what attribute you could use that is a numerical one. When you know it, try to add `100` to it inside the function you created.

4. Now let's subtract `100` from that same attribute in another function that zooms out. 

5. Super! Now it's time to add the event listeners to our elements. Here's an example:
```javascript
variableName.addEventListener("click", function);
```
Make sure you add one Click listener to the zoom in button, and another Click listener to the zoom out button.

That's it, great job! 🚀
