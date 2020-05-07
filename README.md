# kiren-frontend-gatsby

![Production workflow status](https://github.com/tanawitpat/kiren-gatsby-contentful/workflows/production/deploy/badge.svg)

![Website's screenshot](https://user-images.githubusercontent.com/25366268/80002779-4995f700-84ea-11ea-97f0-2ffd886f2d44.png)

## Project Overview

A static product catalog website. Built by TypeScript, Gatsby, and Contentful.

![Lighthouse score](https://user-images.githubusercontent.com/25366268/80223299-4ded1c00-8672-11ea-8242-7c0e13f5b9a5.png)

Gatsby will fetch product data from Contentful and create product detail pages during the build process.

![Build process](https://user-images.githubusercontent.com/25366268/80006436-1144e780-84ef-11ea-8f94-3503272000a2.png)

To deploy new code, you need to create a pull request to rebase changes onto the production branch.

## Set up

```bash
# 1. Install dependencies
yarn

# 2. Create .env.development
touch .env.development

#### Paste the following values into the file ####
GATSBY_GRAPHQL_IDE=playground
CONTENTFUL_SPACE_ID=<CONTENTFUL_SPACE_ID>
CONTENTFUL_ACCESS_TOKEN=<CONTENTFUL_ACCESS_TOKEN>

# 3. Serve with hot reload
yarn develop

# 4. Build for production and launch server
yarn build
yarn serve

# 5. Run unit tests
yarn test
```

## Project Maintainer

- Tanawit Pattanaveerangkoon <<tanawit.pat@gmail.com>>
