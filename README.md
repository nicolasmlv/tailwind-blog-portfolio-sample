See it live here : [tailwind-blog-portfolio-sample-jdnb6.ondigitalocean.app](https://tailwind-blog-portfolio-sample-jdnb6.ondigitalocean.app/)

This project was created for the [DigitalOcean + dev.to Hackathon](https://dev.to/devteam/announcing-the-digitalocean-app-platform-hackathon-on-dev-2i1k). It is extracted from [my personal website](https://www.nicomlv.com/blog/template-blog-portfolio-tailwind-css)


# Install

## Install on your computer : 

You should fork [this repository](https://github.com/nicolasmlv/tailwind-blog-portfolio-sample) (or use "Use this template" [Button](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) from Github) and `git clone`, and then :

```
npm install
npm run buildcss:dev # Replace styles.css with the whole Tailwind lib (4Mb)
npm run onchange #in one terminal tab
npm run serve #in an other
```

Now you can edit your Tailwind config `tailwind.config.js` or your custom or your HTML files, you will see the changes live on your browser as soon as you hit CTRL+S (http://localhost:8080) without the need of refreshing the page.

## Install on production

You can use this DigitalOcean Button to see it live in seconds, it is free. And it may even give you a 100$ credit because there is a [referral code](https://www.digitalocean.com/docs/accounts/referrals/) in it :

[![Deploy to DO](https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/nicolasmlv/tailwind-blog-portfolio-sample/tree/main&refcode=b6dc3a7658c6)

If you want to edit the code, don't forget to run `buildcss:dev` when editing, and `buildcss:prod` before pushing the code to your repository / in production, to save bandwitdh and some ms.

You can host it on any static hosting provider, specify the `public` directory to be served (By default, DigitalOcean knows that it should serve `public`)

You need to replace all the `tailwind-blog-portfolio-sample-jdnb6.ondigitalocean.app` occurrences with your domain.

# Add a Blog entry

Create the HTML page (Add a language to highlight.pack.js if needed ), fill in the meta properties, and :

- Add it to `public/sitemap.xml`
- Add it to `public/index.html`
- Add it to `public/blog.html`
- Add it to `public/blog.json`
- Add it to `public/blog.rss`
- Add it to `public/blog.atom`
- Repost on your [dev.to](dev.to) profile and set canonical_url to your url

# Highlight.js

current used languages : [bash, javascript, json, markdown, html, css]

If you need to add a language, please add it to this list, and go to https://highlightjs.org/download/ and regenerate highlight.pack.js