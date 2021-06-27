# Listy Vue

## About

This project is the completed version of a todo list built utilizing the [Vue 3 Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) ! The starter code can be found at [this repository](https://github.com/ibrahidm/listy-vue-starter-code). 

The goal of this project was to learn the Vue 3 Composition CLI on-the-fly via a code-along YouTube video, and is in fact how it was created!

I hope that you find this project fun and informative! If you have improvements (and I am sure there are many to be made!), please feel free to create a pull-request, although I have not yet decided if I will be making changes within this repository as it may affect the accuracy of the video! 


### So where is the video? 
A very good question! After recording the entire build process, the end result was quite long -- even with some minor editing, I felt like I could do better. I hope to split it up into much smaller parts (or possibly re-recording the whole thing) so that those interested in learning can get the most out of this process--keep an eye out for a link to my channel!

In the meanwhile, feel free to poke around my code and ask any questions should any come up! 


## Project Setup

```
$ yarn install
``` 

### Compile / Hot-Reload for Development

```
$ yarn serve
```

### Launch Server / Database
This project uses [json-server](https://github.com/typicode/json-server) to simulate a RESTful API / database! I highly recommend checking it out for any of your future front-end projects! Great way to get started quickly which can prevent inter-team delays and allows you to effectively work on your front-end, even if you are still building out your back-end endpoints. 

I don't work for them, I just think this is a really cool tool!

To start the server: 
```
$ yarn serve
```

### Compile & Minify for Production
While this project was not designed with actual deployment in mind, I left this command which ships with the Vue CLI. 
```
$ yarn build
```

### Lint & Fix Files
Another default script that ships with the Vue CLI. 
```
$ yarn lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


> Written with [StackEdit](https://stackedit.io/).