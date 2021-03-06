$(function() {

	CMS.init({

		// Name of your site or location of logo file ,relative to root directory (img/logo.png)
		siteName: 'My Github Blog',

		// Tagline for your site
		siteTagline: '',

		// Email address
		siteEmail: 'keerati.th at gmail.com',

		// Name
		siteAuthor: 'Keerati',

		// Navigation items
		siteNavItems: [
			{ name: 'GitHub', href: 'https://github.com/keerati', newWindow: false},
			{ name: 'About'}
		],

		// Posts folder name
		postsFolder: 'posts',

		// Homepage posts snippet length
		postSnippetLength: 120,

		// Pages folder name
		pagesFolder: 'pages',

		// Site fade speed
		fadeSpeed: 300,

		// Site footer text
		footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',

		// Mode 'Github' for Github Pages, 'Apache' for Apache server. Defaults
		// to Github
		mode: 'Github',

		// If Github mode is set, your Github username and repo name. Defaults
		// to Github pages branch (gh-pages)
		githubUserSettings: {
			username: 'keerati',
			repo: 'keerati.github.io'
		},
    githubSettings: {
      branch: 'master',
      host: 'https://api.github.com'
    }

	});

	// Markdown settings
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false
	});

});
