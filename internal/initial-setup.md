Rough notes on new project setup

# Installing vitepress
```
npm add -D vitepress        # Install vitepress
npx vitepress init          # Initialize a new project
                            # directory: `./docs`
                            # Site title: `Digital Literacy`
                            # Site description: `Digital Literacy Content`
                            # Theme: `default Theme + Customization`
                            # TypeScript: `Yes`
                            # Add vitepress npm...: `Yes`
```

Add the following to the `.gitignore` file:
```
# recommended vitepress ignores
docs/.vitepress/dist
docs/.vitepress/cache

# node modules
node_modules/
```

# Development
```
npm run docs:dev             # Run the development server
```

Before pushing changes, run the following to build the site and check for errors:
```
npm run docs:build
npm run docs:preview
```


