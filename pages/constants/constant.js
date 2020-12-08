export const footerContent = {
  'About us': [
    'we are a team of of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.',
    'All copyright reserved © 2020 - Health Explore'
  ],
  'Sitemap': [
    'Nurses',
    'Employers',
    'Social networking',
    'Jobs'
  ],
  'Privacy': [
    'Terms of use',
    'Privacy policy',
    'Cookie policy'
  ]
};

export const sortByData = [
  {
    key: 'Location',
    filterBy: ''
  },
  {
    key: 'Role',
    filterBy: ''
  },
  {
    key: 'Department',
    filterBy: ''
  },
  {
    key: 'Education',
    filterBy: ''
  },
  {
    key: 'Experience',
    filterBy: ''
  },
];

export const mappingFilter = {
  'job_type': 'Job Type',
  'work_schedule': 'Work Schedule',
  'experience': 'Experience',
  'department': 'Department'
}

export const timeSince = (date) => {
  const seconds = Math.floor((new Date() - (new Date(date))) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}