# Project Workflow

### Status Reporting & Notifications

#### Standard Task Summary
After every successful task completion, provide a very brief summary in English of what was done and how.
- **Tone:** Conceptual description, including technical details only where appropriate for clarity.
- **Exception:** Do NOT provide a summary for trivial tasks unless explicitly requested.

#### Mandatory Discord Notification for User Input (CRITICAL)
Whenever you are about to use the `ask_user` tool to request feedback, clarification, or approval, you **MUST** first send a Discord notification. This ensures the user is alerted that the agent is blocked and waiting for input.

- **Notification Content**:
    - **Exact Question**: Include the literal question(s) being asked via `ask_user`.
    - **Task Metadata**: State the current Track ID, Phase Name, and Task Description.
    - **Context for Review/Opinion**: If asking for a review or opinion on changes:
        - List the modified files.
        - Provide a high-level conceptual summary of the changes.
        - Include a simplified `git diff` (markdown code block ````diff`) focusing on relevant logic.
- **Diff Management**: If the diff or total message exceeds 2000 characters, split it into several messages.
- **Command**: Execute the `mcp_standard-nushell_evaluate` tool with `to-discord $message -p`.
- **Timing**: Send the notification **immediately before** calling `ask_user`.

#### Discord Notification for Long Tasks (5min+)
If a task takes 5 minutes or more, you **MUST** perform these steps before proceeding or asking for input:
1.  **Draft Report (English)**: Create a concise conceptual and technical summary, immediate next steps, and status (waiting for user or continuing automatically).
2.  **Send via Discord**: Execute the `mcp_standard-nushell_evaluate` tool with `to-discord $message -p`.
3.  **Sequence Priority**: If the next step involves `ask_user`, follow the "Mandatory Discord Notification for User Input" protocol above.


## Guiding Principles

1. **The Plan is the Source of Truth:** All work must be tracked in `plan.md`
2. **Nushell-First:** Priority must be given to using Nushell pipelines and the `evaluate` tool for all system interactions and data manipulation tasks.
3. **Memory-Aware:** Retrieve and utilize project-specific memories and notes from Obsidian before starting new tasks to maintain consistency.
4. **Context Engineering:** Perform systematic discovery and planning using specialized tools (context7, deepwiki, etc.) for complex tasks.
5. **The Tech Stack is Deliberate:** Changes to the tech stack must be documented in `tech-stack.md` *before* implementation
6. **Test-Driven Development:** Write unit tests before implementing functionality
7. **High Code Coverage:** Aim for >80% code coverage for all modules
8. **User Experience First:** Every decision should prioritize user experience
9. **Non-Interactive & CI-Aware:** Prefer non-interactive commands. Use `CI=true` for watch-mode tools (tests, linters) to ensure single execution.

## General Behavior Protocol

**CRITICAL:** Before proceeding with any task, always:
1.  **Choose Persona:** Identify the appropriate persona/skill via `/skills list`.
2.  **Activate Skill:** Call `activate_skill(name: "skill-name")` to load expert instructions.
3.  **Inform User:** Explicitly state the chosen persona.
4.  **Load Memories:** Retrieve relevant Obsidian memories or notes.

## Memory Management Workflow

We utilize Obsidian notes (memories) to maintain consistency and retrieve project insights.
1.  **Search First:** Always search the `INSIGHTS/` folder in the Obsidian vault using the `obsidian cli`.
2.  **Grounding:** Ground every response in verified existing knowledge before proposing changes.
3.  **Storage:** Store new architectural decisions and insights in `conductor/memory.md` and sync with Obsidian using the `obsidian-memory-expert` skill.

## Context Engineering Protocol

For complex tasks, follow the structured Discovery cycle:
1.  **Discovery (Search First):** Map architecture using `glob`, `read_file`, and `grep_search`.
2.  **External Wisdom:** Use `ref_search_documentation`, `context7`, or `deepwiki` for up-to-date APIs and best practices.
3.  **Synthesis:** Cross-reference sources and document findings in `conductor/context.md`.
4.  **Strategic Planning:** Draft an actionable plan and obtain user approval before execution.

## Obsidian Memory & Context Engineering

### Memory Retrieval (Obsidian INSIGHTS)
1.  **Scope:** Always start by searching the `INSIGHTS/` folder for existing architectural decisions, style preferences, and key constraints.
2.  **Protocol:** Use `obsidian search` with keywords related to the current task.
3.  **Grounding:** Ground the current session's strategy in the retrieved memories.

### Context Engineering (The Discovery Cycle)
1.  **Discovery:** Map the architecture, dependencies, and existing patterns within the current workspace using `glob` and `grep_search`.
2.  **Deep Search:** For complex tasks, perform a deep search for code patterns and usage examples.
3.  **External Wisdom:** Validate libraries and best practices using `web_search`, `ref_search_documentation`, `context7`, or `deepwiki`.
4.  **Synthesis:** Cross-reference all gathered data and identify gaps. Record results in `conductor/context.md`.
5.  **State Management:** Use `sequentialthinking` for complex, multi-step analysis and plan revision.

## Task Workflow
...

3. **Mark In Progress:** Before beginning work, edit `plan.md` and change the task from `[ ]` to `[~]`

4. **Implementation & Testing (Red-Green-Refactor):**
   - Follow TDD: Write failing tests, implement, then refactor.
   - Use Nushell for file operations and data processing where possible.

5. **Status Reporting & Notifications:**
   - **Mandatory Discord Notification for User Input (CRITICAL):** Whenever you are about to use the `ask_user` tool to request feedback, clarification, or approval, you **MUST** first send a Discord notification. This ensures the user is alerted that the agent is blocked and waiting for input.
     1. **Draft Notification Content**:
        - **Exact Question**: Include the literal question(s) being asked via `ask_user`.
        - **Task Metadata**: State the current Track ID, Phase Name, and Task Description.
        - **Context for Review/Opinion**: If asking for a review or opinion on changes:
          - List the modified files.
          - Provide a high-level conceptual summary of the changes.
          - Include a simplified `git diff` (markdown code block ````diff````) focusing on relevant logic.
     2. **Diff Management**: If the diff or total message exceeds 2000 characters, split it into several messages.
     3. **Send via Discord**: Send it via the `evaluate` tool using `to-discord $message -p`.
     4. **Timing**: Ensure the notification is sent **before** triggering the `ask_user` call.
   - **Discord Notification for Long Tasks (5min+):** If a task takes **5 minutes or more**, you MUST:
     1. Draft a concise conceptual and technical report in English.
     2. Send it via the `evaluate` tool using `to-discord $message -p`.
     3. If the next step involves `ask_user`, prioritize the "Mandatory Discord Notification for User Input" protocol above.

6. **Verify Coverage:** Run coverage reports using the project's chosen tools. For example, in a Python project, this might look like:
   ```bash
   pytest --cov=app --cov-report=html
   ```
   Target: >80% coverage for new code. The specific tools and commands will vary by language and framework.

7. **Document Deviations:** If implementation differs from tech stack:
   - **STOP** implementation
   - Update `tech-stack.md` with new design
   - Add dated note explaining the change
   - Resume implementation

8. **Commit Code Changes:**
   - Stage all code changes related to the task.
   - Propose a clear, concise commit message e.g, `feat(ui): Create basic HTML structure for calculator`.
   - Perform the commit.

9. **Attach Task Summary with Git Notes:**
   - **Step 9.1: Get Commit Hash:** Obtain the hash of the *just-completed commit* (`git log -1 --format="%H"`).
   - **Step 9.2: Draft Note Content:** Create a detailed summary for the completed task. This should include the task name, a summary of changes, a list of all created/modified files, and the core "why" for the change.
   - **Step 9.3: Attach Note:** Use the `git notes` command to attach the summary to the commit.
     ```bash
     # The note content from the previous step is passed via the -m flag.
     git notes add -m "<note content>" <commit_hash>
     ```

10. **Get and Record Task Commit SHA:**
    - **Step 10.1: Update Plan:** Read `plan.md`, find the line for the completed task, update its status from `[~]` to `[x]`, and append the first 7 characters of the *just-completed commit's* commit hash.
    - **Step 10.2: Write Plan:** Write the updated content back to `plan.md`.

11. **Commit Plan Update:**
    - **Action:** Stage the modified `plan.md` file.
    - **Action:** Commit this change with a descriptive message (e.g., `conductor(plan): Mark task 'Create user model' as complete`).

### Automated Manual Verification Protocol

When a workflow or task requires manual verification (e.g., Phase Completion, Quality Gates), the agent **MUST** evaluate if the verification steps are "simple".
A verification step is "simple" if it is:
- **Read-Only**: Does not modify the codebase or critical system state.
- **Non-Destructive**: Safe to execute as a background process or standalone check.
- **Fast Execution**: Expected to complete quickly.
- **Examples**: Checking file contents, executing scripts (tests, linters), analyzing stdout/stderr or log files.

If the verification steps meet these criteria, the agent **MUST execute these steps autonomously** instead of asking the user for confirmation.
- **Fallback & Error Handling**: If an automated verification step fails, the agent must attempt an **Auto-Fix & Retry once**. If the retry fails, it must halt and ask the user for manual intervention.
- **Logging**: All automated verification outcomes must be clearly documented in the task or phase summaries and git notes.
### Phase Completion Verification and Checkpointing Protocol

**Trigger:** This protocol is executed immediately after a task is completed that also concludes a phase in `plan.md`.

1.  **Announce Protocol Start:** Inform the user that the phase is complete and the verification and checkpointing protocol has begun.

2.  **Ensure Test Coverage for Phase Changes:**
    -   **Step 2.1: Determine Phase Scope:** To identify the files changed in this phase, you must first find the starting point. Read `plan.md` to find the Git commit SHA of the *previous* phase's checkpoint. If no previous checkpoint exists, the scope is all changes since the first commit.
    -   **Step 2.2: List Changed Files:** Execute `git diff --name-only <previous_checkpoint_sha> HEAD` to get a precise list of all files modified during this phase.
    -   **Step 2.3: Verify and Create Tests:** For each file in the list:
        -   **CRITICAL:** First, check its extension. Exclude non-code files (e.g., `.json`, `.md`, `.yaml`).
        -   For each remaining code file, verify a corresponding test file exists.
        -   If a test file is missing, you **must** create one. Before writing the test, **first, analyze other test files in the repository to determine the correct naming convention and testing style.** The new tests **must** validate the functionality described in this phase's tasks (`plan.md`).

3.  **Execute Automated Tests with Proactive Debugging:**
    -   Before execution, you **must** announce the exact shell command you will use to run the tests.
    -   **Example Announcement:** "I will now run the automated test suite to verify the phase. **Command:** `CI=true npm test`"
    -   Execute the announced command.
    -   If tests fail, you **must** inform the user and begin debugging. You may attempt to propose a fix a **maximum of two times**. If the tests still fail after your second proposed fix, you **must stop**, report the persistent failure, and ask the user for guidance.

4.  **Propose a Detailed, Actionable Manual Verification Plan:**
    -   **CRITICAL:** To generate the plan, first analyze `product.md`, `product-guidelines.md`, and `plan.md` to determine the user-facing goals of the completed phase.
    -   You **must** generate a step-by-step plan that walks the user through the verification process, including any necessary commands and specific, expected outcomes.
    -   The plan you present to the user **must** follow this format:

        **For a Frontend Change:**
        ```
        The automated tests have passed. For manual verification, please follow these steps:

        **Manual Verification Steps:**
        1.  **Start the development server with the command:** `npm run dev`
        2.  **Open your browser to:** `http://localhost:3000`
        3.  **Confirm that you see:** The new user profile page, with the user's name and email displayed correctly.
        ```

        **For a Backend Change:**
        ```
        The automated tests have passed. For manual verification, please follow these steps:

        **Manual Verification Steps:**
        1.  **Ensure the server is running.**
        2.  **Execute the following command in your terminal:** `curl -X POST http://localhost:8080/api/v1/users -d '{"name": "test"}'`
        3.  **Confirm that you receive:** A JSON response with a status of `201 Created`.
        ```

5.  **Await Explicit User Feedback OR Execute Autonomously:**
    -   **Automated Verification:** Evaluate the generated plan against the **Automated Manual Verification Protocol**. If ALL steps are "simple" (Read-Only, Non-Destructive, Fast), the agent **MUST execute them autonomously**, attempt one Auto-Fix & Retry on failure, and proceed to step 6 on success.
    -   **Manual Verification:** If any step requires human validation (e.g., visual checks, destructive actions), present the detailed plan and ask the user for confirmation: "**Does this meet your expectations? Please confirm with yes or provide feedback on what needs to be changed.**"
    -   **PAUSE** and await the user's response. Do not proceed without an explicit yes or confirmation.

6.  **Create Checkpoint Commit:**
    -   Stage all changes. If no changes occurred in this step, proceed with an empty commit.
    -   Perform the commit with a clear and concise message (e.g., `conductor(checkpoint): Checkpoint end of Phase X`).

7.  **Attach Auditable Verification Report using Git Notes:**
    -   **Step 7.1: Draft Note Content:** Create a detailed verification report including the automated test command, the manual verification steps, and the user's confirmation.
    -   **Step 7.2: Attach Note:** Use the `git notes` command and the full commit hash from the previous step to attach the full report to the checkpoint commit.

8.  **Get and Record Phase Checkpoint SHA:**
    -   **Step 8.1: Get Commit Hash:** Obtain the hash of the *just-created checkpoint commit* (`git log -1 --format="%H"`).
    -   **Step 8.2: Update Plan:** Read `plan.md`, find the heading for the completed phase, and append the first 7 characters of the commit hash in the format `[checkpoint: <sha>]`.
    -   **Step 8.3: Write Plan:** Write the updated content back to `plan.md`.

9. **Commit Plan Update:**
    - **Action:** Stage the modified `plan.md` file.
    - **Action:** Commit this change with a descriptive message following the format `conductor(plan): Mark phase '<PHASE NAME>' as complete`.

10.  **Announce Completion:** Inform the user that the phase is complete and the checkpoint has been created, with the detailed verification report attached as a git note.
### Quality Gates

Before marking any task complete, verify:

- [ ] All tests pass
- [ ] Code coverage meets requirements (>80%)
- [ ] Code follows project's code style guidelines (as defined in `code_styleguides/`)
- [ ] All public functions/methods are documented (e.g., docstrings, JSDoc, GoDoc)
- [ ] Type safety is enforced (e.g., type hints, TypeScript types, Go types)
- [ ] No linting or static analysis errors (using the project's configured tools)
- [ ] Works correctly on mobile (if applicable)
- [ ] Documentation updated if needed
- [ ] No security vulnerabilities introduced

## Development Commands

**AI AGENT INSTRUCTION: This section should be adapted to the project's specific language, framework, and build tools.**

### Setup
```bash
# Example: Commands to set up the development environment (e.g., install dependencies, configure database)
# e.g., for a Node.js project: npm install
# e.g., for a Go project: go mod tidy
```

### Daily Development
```bash
# Example: Commands for common daily tasks (e.g., start dev server, run tests, lint, format)
# e.g., for a Node.js project: npm run dev, npm test, npm run lint
# e.g., for a Go project: go run main.go, go test ./..., go fmt ./...
```

### Before Committing
```bash
# Example: Commands to run all pre-commit checks (e.g., format, lint, type check, run tests)
# e.g., for a Node.js project: npm run check
# e.g., for a Go project: make check (if a Makefile exists)
```

## Testing Requirements

### Unit Testing
- Every module must have corresponding tests.
- Use appropriate test setup/teardown mechanisms (e.g., fixtures, beforeEach/afterEach).
- Mock external dependencies.
- Test both success and failure cases.

### Integration Testing
- Test complete user flows
- Verify database transactions
- Test authentication and authorization
- Check form submissions

### Mobile Testing
- Test on actual iPhone when possible
- Use Safari developer tools
- Test touch interactions
- Verify responsive layouts
- Check performance on 3G/4G

## Code Review Process

### Self-Review Checklist
Before requesting review:

1. **Functionality**
   - Feature works as specified
   - Edge cases handled
   - Error messages are user-friendly

2. **Code Quality**
   - Follows style guide
   - DRY principle applied
   - Clear variable/function names
   - Appropriate comments

3. **Testing**
   - Unit tests comprehensive
   - Integration tests pass
   - Coverage adequate (>80%)

4. **Security**
   - No hardcoded secrets
   - Input validation present
   - SQL injection prevented
   - XSS protection in place

5. **Performance**
   - Database queries optimized
   - Images optimized
   - Caching implemented where needed

6. **Mobile Experience**
   - Touch targets adequate (44x44px)
   - Text readable without zooming
   - Performance acceptable on mobile
   - Interactions feel native

## Commit Guidelines

### Message Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests
- `chore`: Maintenance tasks

### Examples
```bash
git commit -m "feat(auth): Add remember me functionality"
git commit -m "fix(posts): Correct excerpt generation for short posts"
git commit -m "test(comments): Add tests for emoji reaction limits"
git commit -m "style(mobile): Improve button touch targets"
```

## Definition of Done

A task is complete when:

1. All code implemented to specification
2. Unit tests written and passing
3. Code coverage meets project requirements
4. Documentation complete (if applicable)
5. Code passes all configured linting and static analysis checks
6. Works beautifully on mobile (if applicable)
7. Implementation notes added to `plan.md`
8. Changes committed with proper message
9. Git note with task summary attached to the commit

## Emergency Procedures

### Critical Bug in Production
1. Create hotfix branch from main
2. Write failing test for bug
3. Implement minimal fix
4. Test thoroughly including mobile
5. Deploy immediately
6. Document in plan.md

### Data Loss
1. Stop all write operations
2. Restore from latest backup
3. Verify data integrity
4. Document incident
5. Update backup procedures

### Security Breach
1. Rotate all secrets immediately
2. Review access logs
3. Patch vulnerability
4. Notify affected users (if any)
5. Document and update security procedures

## Deployment Workflow

### Pre-Deployment Checklist
- [ ] All tests passing
- [ ] Coverage >80%
- [ ] No linting errors
- [ ] Mobile testing complete
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] Backup created

### Deployment Steps
1. Merge feature branch to main
2. Tag release with version
3. Push to deployment service
4. Run database migrations
5. Verify deployment
6. Test critical paths
7. Monitor for errors

### Post-Deployment
1. Monitor analytics
2. Check error logs
3. Gather user feedback
4. Plan next iteration

## Continuous Improvement

- Review workflow weekly
- Update based on pain points
- Document lessons learned
- Optimize for user happiness
- Keep things simple and maintainable


9. **Status Reporting & Notifications:**
   - **Mandatory Notification for User Input (CRITICAL):** Whenever you are about to use the `ask_user` tool to request feedback, clarification, or approval, you **MUST** first send a Discord notification. This ensures the user is alerted that the agent is blocked and waiting for input.
     1. Draft a brief message stating what you are waiting for.
     2. Send it via the `evaluate` tool using `to-discord $message -p`.
     3. Ensure the notification is sent **before** triggering the `ask_user` call.
   - **Discord Notification for Long Tasks:** If a task takes **5 minutes or more**, you MUST:
     1. Draft a concise conceptual and technical report in English.
     2. Send it via the `evaluate` tool using `to-discord $message -p`.
     3. If the next step involves `ask_user`, prioritize the "Mandatory Notification for User Input" protocol above.