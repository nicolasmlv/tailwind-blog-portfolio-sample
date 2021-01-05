This project was created for the [DigitalOcean + dev.to Hackathon](https://dev.to/devteam/announcing-the-digitalocean-app-platform-hackathon-on-dev-2i1k). It is extracted from [my personnal website](https://www.nicomlv.com)

## Install on your computer : 

```
git clone git@github.com:nicolasmlv/html-tailwind-setup.git
cd html-tailwind-setup
npm install
npm run buildcss:dev # Replace styles.css with the whole Tailwind lib (4Mb)
npm run onchange #in one terminal tab
npm run serve #in an other
```

Now you can edit HTML files or your Tailwind config `tailwind.config.js` or your custom CSS in `main.css`, you will see the changes live on your browser as soon as you CTRL+S (http://localhost:8080) without the need of refreshing the page.

## Install on production

You can use this DigitalOcean Button to see it live in seconds, it is free Hosting for static sites. And it may even give you a 60$ credit because there is a [referral code](https://www.digitalocean.com/docs/accounts/referrals/) in it :

[![Deploy to DO](https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/nicolasmlv/tailwind-blog-portfolio-sample/tree/main&refcode=b6dc3a7658c6)

If you want to edit it, you should run `npm run buildcss:prod` before pushing to production, to save some bandwitdh and some ms. and run back the `buildcss:dev` when editing.

You can host it on any static hosting provider, specify the `public` directory to be served.