const faker = require('Faker');
const moment = require('moment');

const mockCourse = (() => {
  let idCounter = 0;

  return (
    title = faker.Lorem.words(2).join(' '),
    date = moment(faker.Date.recent(500)).toDate().toISOString(),
    durationSeconds = faker.random.number(6000) + 300,
    description = faker.Lorem.sentence(),
    topRated = Math.random() > 0.5,
    authors = [faker.random.number(5), faker.random.number(5) + 5]
  ) => {
    return {
      id: idCounter++,
      title,
      date,
      durationSeconds,
      description,
      topRated,
      authors
    };
  };
})();

const mockCourses = () => {
  const courses = [];

  courses.push(mockCourse(
    'Fresh!',
    moment().subtract(1, 'day').toDate().toISOString()
  ));
  courses.push(mockCourse(
    'Upcoming!',
    moment().add(5, 'days').toDate().toISOString()
  ));
  courses.push(mockCourse(
    'Almost outdated!',
    moment().subtract(13, 'days').toDate().toISOString()
  ));
  courses.push(mockCourse(
    'Outdated!',
    moment().subtract(15, 'days').toDate().toISOString()
  ));

  for (let i = 0; i < 10; i++) {
    courses.push(mockCourse());
  }

  return courses;
};

const mockLogin = () => {
  return {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjY2fQ.84eJFiKDAeTNHJjpitLDhZ74PQYksc_Gl3YckGLlD1U'
  };
};

const mockAuthor = (() => {
  let idCounter = 0;

  return (
    name = `${faker.Name.firstName()} ${faker.Name.lastName()}`
  ) => {
    return {
      id: idCounter++,
      name
    };
  };
})();

const mockUsers = () => {
  return [
    {
      id: 666,
      login: 'meh',
      roles: ['slav', 'superstar']
    }
  ];
};

const mockAuthors = () => {
  return new Array(10).fill(null).map(() => {
    return mockAuthor();
  });
};

const mockBackend = () => {
  return {
    courses: mockCourses(),
    login: mockLogin(),
    users: mockUsers(),
    authors: mockAuthors()
  };
};

module.exports = mockBackend;
