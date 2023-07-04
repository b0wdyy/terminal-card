#!/usr/bin/env node

import boxen from 'boxen';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

console.clear();

const {
	user_name: username,
	job_title: jobTitle,
	twitter_username: twitterUsername,
	github_username: githubUsername,
	linkedin_username: linkedinUsername,
	 personal_site: personalSite,
	npx_card_handle: npxCardHandle,
} = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data.json'), 'utf8')) as Record<string, string>;

const data = {
	work: `${chalk.white('Software Engineer at')} ${chalk.hex('#FFC843').bold('Continuum Consulting NV')}`,
	twitter: chalk.gray('https://twitter.com/') + chalk.cyan(`${twitterUsername}`),
	github: chalk.gray('https://github.com/') + chalk.green(`${githubUsername}`),
	linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue(`${linkedinUsername}`),
	web: chalk.rgb(222, 222, 111)(`${personalSite}`),
	npx: chalk.red('npx') + ' ' + chalk.white(`${npxCardHandle}`),

	labelWork: chalk.white.bold('Work:'),
	labelTwitter: chalk.white.bold('Twitter:'),
	labelGitHub: chalk.white.bold('GitHub:'),
	labelLinkedIn: chalk.white.bold('LinkedIn:'),
	labelWeb: chalk.white.bold('Web:'),
	labelCard: chalk.white.bold('Card:'),
};

const profile = boxen(
	[
		`${data.labelWork} ${data.work}`,
		'',
		`${data.labelTwitter} ${data.twitter}`,
		`${data.labelGitHub} ${data.github}`,
		`${data.labelLinkedIn} ${data.linkedin}`,
		`${data.labelWeb} ${data.web}`,
		'',
		`${data.labelCard} ${data.npx}`,
		'',
		`${chalk.italic('My inbox is always open. Whether you have a')}`,
		`${chalk.italic('question or just want to say hi, I will try ')}`,
		`${chalk.italic('my best to get back to you!')}`,
	].join('\n'),
	{
		title: chalk.white.bold(username),
		titleAlignment: 'center',
		textAlignment: 'center',
		margin: 1,
		float: 'center',
		padding: 1,
		borderStyle: 'single',
		borderColor: '#FFC843',
	},
);
console.log(profile);

