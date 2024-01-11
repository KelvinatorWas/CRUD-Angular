# CRUD Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Run CRUD Data Base

Put this into the console to run Json DB:
```bash
npm run db
```

# Code Base
### Project Directory Structure

- [src](##src)
  - [animal](#animal)
  - [animal-list](#animal-list)
  - [button](#button)
  - [detailed-animal](#detailed-animal)
  - [edit-animal](#edit-animal)
  - [image](#image)
  - [modal](#modal)
    - [modal](#modal)
    - [modal-edit](#modal-edit)
  - [page-not-found](#page-not-found)
  - [service](#service)

## src
The root directory of the project.

## animal
Directory for animal for rendering the main card in the [animal-list](#animal-list)

## animal-list
Directory for rendering the animal cards.

## button
Directory for button component, that is being used all over this project.

## detailed-animal
Directory for component relate to detailed information about animals, where you can edit and delete the animal.

## edit-animal
Directory for component that is related to editing animal data.

## image
Directory for image component.

## modal
Directory for modal components.

## modal
Subdirectory for modal, containing the confirmation for ensuring if the user wants to delete the animal.

## modal-edit
Subdirectory for modal, containing the confirmation for ensuring if the user wants to replace the old animal data.

## page-not-found
Diectory for component related to the "Page Not Found" scenario.

## service
Directory where the main service communicates with the database.
