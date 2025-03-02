	const storageTheme = localStorage.getItem('theme');
	const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

	const newTheme = storageTheme ?? systemColorScheme;

	document.documentElement.setAttribute('data-theme', newTheme);
