# Algorithm Simulations Suite (algorithms-cei)

## Project Overview
The Algorithm Simulations Suite is a collection of interactive visualizations demonstrating fundamental statistical and mathematical algorithms. It features a modern, "Cyberpunk/Dark" themed dashboard that provides access to various simulations, including statistical measures (Mean, Median, Mode), array operations (Sorting, Minimum Value), and mathematical functions (Piecewise, Tridiagonal matrices).

### Core Technologies
- **Backend:** Node.js with Express for serving static files.
- **Frontend:** HTML5, Vanilla JavaScript, Tailwind CSS for styling, and MathJax for mathematical notation.
- **Testing:** Jest for unit/integration testing, Supertest for HTTP assertions, and Cheerio for server-side DOM testing.

## Building and Running

### Setup
```bash
# Install dependencies
npm install
```

### Development
```bash
# Start the web server (Running at http://localhost:8004)
node server.js
```

### Testing
```bash
# Run all tests
npm test

# Run tests with coverage report
npm test -- --coverage
```

## Development Conventions

### General Principles
- **Nushell-First:** Priority must be given to using Nushell pipelines for system interactions and data manipulation.
- **Test-Driven Development (TDD):** Write unit tests before implementing functionality.
- **High Code Coverage:** Aim for >80% code coverage for all modules.
- **Mobile-Responsive:** Every decision should prioritize a seamless experience across all screen sizes.
- **Visual Style:** Adhere to the "Cyberpunk/Dark" theme (vibrant neon-on-dark palette) as defined in `conductor/product-guidelines.md`.

### Conductor Framework
This project follows the **Conductor** workflow. The `conductor/` directory contains the source of truth for the project:
- `plan.md`: Tracks all tasks and their current status (`[ ]`, `[~]`, `[x]`).
- `product.md`: Defines the product scope and features.
- `tech-stack.md`: Documents the deliberate choices for technologies used.
- `workflow.md`: Detailed operational protocols, including memory management and checkpointing.

### Commit Guidelines
Use Conventional Commits format: `<type>(<scope>): <description>`
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, UI/UX improvements
- `test`: Adding missing tests
- `conductor`: Changes to planning or framework files

### Documentation
- All public functions/methods should include JSDoc comments.
- Major architectural decisions should be documented in `conductor/memory.md` or integrated into the Obsidian vault via the `obsidian-memory-expert` skill.

## Project Structure
- `WEB/`: Contains individual algorithm simulation pages.
- `src/`: Core algorithm logic (`algorithms.js`) and helpers.
- `tests/`: Comprehensive test suite for UI and logic.
- `docs/`: Reference documentation, including `pseudocodigos.md` for algorithm logic.
- `scripts/`: Nushell scripts (`.nu`) for automation and style updates.
- `conductor/`: Project management and guidelines.
