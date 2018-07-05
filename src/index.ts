import {Config, User, UserRepository} from 'Mini-Librairie';

const config = new Config('http://192.168.1.54:8080');
config.token = 'TOKEN';

const repo = new UserRepository(config);

repo.find().then((users: User[]) => {
  console.log(users);
});

repo.create({
  username: 'super-test',
  password: 'super-test',
}).then((user:User) => {
  console.log(user);
});
