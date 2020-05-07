# kiren-frontend-gatsby

![Production workflow status](https://github.com/tanawitpat/kiren-gatsby-contentful/workflows/production/deploy/badge.svg)

![Website's screenshot](https://user-images.githubusercontent.com/25366268/81322148-ba7a0900-90bd-11ea-9e54-2eeac45b0692.png)

## Project Overview

A static product catalog website. Built by TypeScript, Gatsby, and Contentful.

Gatsby will fetch product data from Contentful and create product detail pages during the build process.

![Build process](https://user-images.githubusercontent.com/25366268/80006436-1144e780-84ef-11ea-8f94-3503272000a2.png)

To deploy new code, you need to create a pull request to rebase changes onto the production branch.

**Disclaimer:** This website was built for POC purpose. No part of this website shall be referenced.

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
