#Bookmark APP

# Bookmark'd

Bookmark'd is a Javascript application for saving your favorite links on the Internet!

## Installation

No installation is required, please see usage for the link to the Bookmark'd app.

## Usage

[Click here](https://bookmark-app-backend.herokuapp.com/) to use Bookmark'd.

## Component Tree

<img src="./Component.png" alt="component tree">

React Router Table 

    -> App
      -> Header
      -> Main |state: bookmarks|
        -> Switch
          -> Route |path: "/"|
            -> Index |Props: bookmarks, createBookmark|
          -> Route |path="/bookmarks/:id|
            -> Show |Props: bookmarks, updateBookmarks, deleteBookmarks|

## Technologies used

- Javascript

- HTML

- CSS

- React

## Backend Repository

[Bookmark'd Repository link](https://github.com/katiepestotnik/bookmark-app-backend)


Created with care by Gianelle, Katie, Lydia

