var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var articleone = {
title: 'articleone | Divya Krishna',
heading: 'articleone',
    date: ' sep 2,2017',
    content:`
        <p>
            This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
        </p>
        <p>
            This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
        </p>
        <p>
            This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
        </p>`
};
function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = "
    <html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viexport" content="width-device-width , initial-scale=1 "/>
        <style>
            .container{
                   max-width: 800px;
                   margin: 0 auto;
                   color: grey;
                   font-family: sans-serif;
                   padding-left: 20px;
                   padding-right: 20px;
            }
        </style>
    </head> 
    <body>
          <div class="container">
          <div>
          <a href="/">Home</a>
          </div>
          <hr/>
          <h3>
             ${heading}
          </h3>
          <div>
             ${date}
