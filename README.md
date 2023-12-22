# MailBuddy

Send custom emails to anyone. Choose your favorite template from our vast collection, fill in the details for the custom fields and send. Sending beautiful emails have never gotten easier.

## This application use the following packages

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Developers

This application is built from scratch using latest web technologies and industry best practices. The developers are requested to follow the below mentioned instructions religiously before raising a Pull Request.

1. Please install all the recommended vscode extensions mentioned in /.vscode/extensions.json
2. This application is designed to be responsive and accessible. Please follow the best practices. Follow a mobile-first approach to development.
3. This application uses [eslint](https://eslint.org/) and [prettier](https://prettier.io/) for linting and code formatting.
   There is a pre-commit hook that runs before every commit (achieved using [husky](https://typicode.github.io/husky/)). This pre-commit hook will identify any linting or formatting issues in the code and may abort your commit if it encounters any such issues. This is a preventive step taken to ensure the code quality is supreme.

**Follow the below steps to fix code quality issues**

1. Run the below npm script to fix **prettier** related issues

```bash
npm run format:write
```

2. For **eslint** related issues, I highly recommend to visit the **Problems** tab on the VSCode integrated terminal or run the below command. Identify the issue and directly fix it in your code.

```bash
npm run eslint
```

4. Git branching strategy
   - Contributors should fork the [primary repository](https://github.com/5thComrade/mailbuddy)
   - Clone the forked repo to your local machine or open the forked repo in [gitpod](https://www.gitpod.io/)
   - Checkout to the `development` branch.
   - Add the upstream remote using the below command (one-time activity)
   ```sh
       git remote add upstream_origin https://github.com/5thComrade/mailbuddy.git
   ```
   - Run the below command to check if the remote was added successfully (one-time activity)
   ```sh
       git remote -v
   ```
   - Now ensure you are in the `development` branch, lets take a pull from the upstream `main` branch
   ```sh
       git pull upstream_origin main
   ```
   - If there aren't any conflicts, the latest code from the upstream `main` branch will get merged to your `development` branch.
   - You can now either start making your code changes while you are in `development` branch or you can create a new branch keeping `development` branch as the base branch.
   - Once you are done with the code changes and committed these changes, lets raise a new pull request. The pull request should keep the upstream `main` branch as the base branch and your `development` branch as the source.

## Getting Started

To spin up the dev server:

- we need to create a .env.local file in the root of the application.
- add following secrets and configs in that file and save.

```js
KINDE_CLIENT_ID=<clientID from kinde>
KINDE_CLIENT_SECRET=<clientSecret from kinde>
KINDE_ISSUER_URL=<Domain from kinde>
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.
