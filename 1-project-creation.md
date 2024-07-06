## 1. Creating a SvelteKit project

#### The below command will scaffold a new SvelteKit project in the `dailylog-frontend` directory 

```
npm create svelte@latest dailylog-frontend
```


```
Need to install the following packages:
create-svelte@6.3.3
Ok to proceed? (y) 

create-svelte version 6.3.3

┌  Welcome to SvelteKit!
│
◇  Which Svelte app template?
│  Skeleton project
│
◇  Add type checking with TypeScript?
│  Yes, using TypeScript syntax
│
◇  Select additional options (use arrow keys/space bar)
│  Add ESLint for code linting, Add Prettier for code formatting, Add Playwright for browser testing, Add Vitest for unit testing
│
└  Your project is ready!

Install more integrations with:
  npx svelte-add

Next steps:
  1: cd dailylog-frontend
  2: npm install
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: npm run dev -- --open

To close the dev server, hit Ctrl-C

Stuck? Visit us at https://svelte.dev/chat
```

## 2. Adding Tailwind to your SvelteKit project

#### The below command will install Tailwind CSS, PostCSS & Autoprefixer.

```
npx svelte-add@latest tailwindcss
```


```
Need to install the following packages:
svelte-add@2.3.4
Ok to proceed? (y) y
svelte-add version 2.3.4

┌  Welcome to Svelte Add!
│
◇  Do you want to use typography plugin?
│  Yes
│
◇  Which package manager to want to install dependencies with?
│  npm
│
◇  Successfully installed dependencies
│
◇  Successfully formatted modified files
│
└  You're all set!

```


## 3. Adding DaisyUi

#### The below command will install DaisyUI.

```
 npm i -D daisyui@latest
```

Next we need to add daisyUI to `tailwind.config.js`:

```
import daisyui from "daisyui"
module.exports = {
  //...
  plugins: [
    daisyui,
  ],
}

```
