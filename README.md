# Ad03

<img src="https://github.com/user-attachments/assets/389a71c1-0da5-475b-8bd3-144be2a8c90d" width="400">

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) v18.2.8 and uses Node.js v22.3.0 (with npm 10.8.1)

### Version compatibility
| Angular         | Node.js                                  | TypeScript    | RxJS            |
|-----------------|------------------------------------------|---------------|-----------------|
| 18.1.x \|\| 18.2.x | ^18.19.1 \|\| ^20.11.1 \|\| ^22.0.0       | >=5.4.0 <5.6.0 | ^6.5.3 \|\| ^7.4.0 |

### Further explanation

- Instead of the suggested Angular 12, the project used modern Angular 18. This allowed me to use new features like Signals for better state, data storage, and change detection, while I've used RxJS previously to handle backend calls and complex logic.
- Not relying solely on Signals, RxJS was used to watch the item checkboxes, which controlled whether the 'Share' button was shown or hidden.
- Since I don't have experience with Redux, I didn't use it. State management was handled using Angular's built-in features.
- All items described in the 'Project Description' were tested as working during implementation, while adhering the UI to the design provided.

## Development server

- Run `npm install` to install all the dependencies.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
