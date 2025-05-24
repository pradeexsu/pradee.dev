const info_data = {
  name: 'Pradeep Suthar',
  title: 'Software Engineer',
  description:
    'Building investment experiences at @smallcase. Passionate about creating impactful products through smart, innovative technology. In past worked at @upstox in building trading experiences.',
  website: 'https://pradee.dev',
  baseUrl: 'https://pradee.dev',
  siteName: 'Pradeep Suthar',
  locale: 'en_IN',
  avatar: 'https://avatars.githubusercontent.com/u/49487927?v=4',
  shortDescription:
    'Software Engineering Experiance @smallcase | Tech Enthusiast',
  social: {
    x: {
      url: 'https://x.com/pradeexsu/',
      username: 'pradeexsu',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/pradeep-swe/',
      username: 'pradeep-swe',
    },
    github: {
      url: 'https://github.com/pradeexsu',
      username: 'pradeexsu',
    },
    stackoverflow: {
      url: 'https://stackoverflow.com/users/12537691/pradeexsu',
      username: 'pradeexsu',
    },
  },
  opengraph: {
    url: '',
  },
};

if (process.env.NODE_ENV === 'development') {
  info_data.baseUrl = 'http://localhost:3000';
}

info_data.opengraph = {
  url: `${info_data.baseUrl}/og?title=${encodeURIComponent(info_data.name)}&description=${encodeURIComponent(
    info_data.shortDescription,
  )}&avatar=${encodeURIComponent(info_data.avatar)}`,
};

const footerLinks = [
  {
    label: '@pradeexsu',
    link: 'https://x.com/pradeexsu',
    new_tab: true,
  },
  {
    label: 'github',
    link: 'https://github.com/pradeexsu',
    new_tab: true,
  },
  {
    label: 'linkedin',
    link: 'https://linkedin.com/in/pradeep-swe',
    new_tab: true,
  },
  {
    label: 'rss',
    link: '/rss',
    new_tab: false,
  },
];

const baseUrl = info_data.baseUrl;

export { footerLinks, baseUrl, info_data as info, info_data };
