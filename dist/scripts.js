(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config(baseUrl) {
        this.token = null;
        this.baseUrl = baseUrl;
    }
    return Config;
}());
exports.Config = Config;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());
exports.Message = Message;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Room = /** @class */ (function () {
    function Room() {
    }
    return Room;
}());
exports.Room = Room;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./entity/User");
exports.User = User_1.User;
var Room_1 = require("./entity/Room");
exports.Room = Room_1.Room;
var Message_1 = require("./entity/Message");
exports.Message = Message_1.Message;
var UserRepository_1 = require("./repository/UserRepository");
exports.UserRepository = UserRepository_1.UserRepository;
var Config_1 = require("./Config");
exports.Config = Config_1.Config;
// Dirty Examples
/* const config = new Config('http://192.168.1.54:8080');
config.token = 'TOKEN';

const repo = new UserRepository();

repo.find().then((users: User[]) => {
  console.log(users);
});

repo.create({
  username: 'super-test',
  password: 'super-test',
}).then((user:User) => {
  console.log(user);
}); */

},{"./Config":1,"./entity/Message":2,"./entity/Room":3,"./entity/User":4,"./repository/UserRepository":6}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../entity/User");
var UserRepository = /** @class */ (function () {
    function UserRepository(config) {
        this.config = config;
    }
    UserRepository.prototype.find = function () {
        return fetch(this.config.baseUrl + '/api/users', {
            headers: {
                'Authorization': 'Bearer ' + this.config.token,
            },
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (objects) {
            var newArray = [];
            objects.forEach(function (object) {
                newArray.push(Object.assign(new User_1.User(), object));
            });
            return newArray;
        });
    };
    // findOne(id: number)
    UserRepository.prototype.create = function (user) {
        return fetch(this.config.baseUrl + '/api/users', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + this.config.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (object) {
            return Object.assign(new User_1.User(), object);
        });
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;

},{"../entity/User":4}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mini_Librairie_1 = require("Mini-Librairie");
var config = new Mini_Librairie_1.Config('http://192.168.1.54:8080');
config.token = 'TOKEN';
var repo = new Mini_Librairie_1.UserRepository(config);
repo.find().then(function (users) {
    console.log(users);
});
repo.create({
    username: 'super-test',
    password: 'super-test',
}).then(function (user) {
    console.log(user);
});
},{"Mini-Librairie":5}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvTWluaS1MaWJyYWlyaWUvZGlzdC9saWIvQ29uZmlnLmpzIiwibm9kZV9tb2R1bGVzL01pbmktTGlicmFpcmllL2Rpc3QvbGliL2VudGl0eS9NZXNzYWdlLmpzIiwibm9kZV9tb2R1bGVzL01pbmktTGlicmFpcmllL2Rpc3QvbGliL2VudGl0eS9Sb29tLmpzIiwibm9kZV9tb2R1bGVzL01pbmktTGlicmFpcmllL2Rpc3QvbGliL2VudGl0eS9Vc2VyLmpzIiwibm9kZV9tb2R1bGVzL01pbmktTGlicmFpcmllL2Rpc3QvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL01pbmktTGlicmFpcmllL2Rpc3QvbGliL3JlcG9zaXRvcnkvVXNlclJlcG9zaXRvcnkuanMiLCJzcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzVDQSxpREFBNEQ7QUFFNUQsSUFBTSxNQUFNLEdBQUcsSUFBSSx1QkFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDdEQsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7QUFFdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSwrQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXhDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFhO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ1YsUUFBUSxFQUFFLFlBQVk7SUFDdEIsUUFBUSxFQUFFLFlBQVk7Q0FDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVM7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENvbmZpZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb25maWcoYmFzZVVybCkge1xuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybDtcbiAgICB9XG4gICAgcmV0dXJuIENvbmZpZztcbn0oKSk7XG5leHBvcnRzLkNvbmZpZyA9IENvbmZpZztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1lc3NhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWVzc2FnZSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIE1lc3NhZ2U7XG59KCkpO1xuZXhwb3J0cy5NZXNzYWdlID0gTWVzc2FnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJvb20gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUm9vbSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIFJvb207XG59KCkpO1xuZXhwb3J0cy5Sb29tID0gUm9vbTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFVzZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXNlcigpIHtcbiAgICB9XG4gICAgcmV0dXJuIFVzZXI7XG59KCkpO1xuZXhwb3J0cy5Vc2VyID0gVXNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFVzZXJfMSA9IHJlcXVpcmUoXCIuL2VudGl0eS9Vc2VyXCIpO1xuZXhwb3J0cy5Vc2VyID0gVXNlcl8xLlVzZXI7XG52YXIgUm9vbV8xID0gcmVxdWlyZShcIi4vZW50aXR5L1Jvb21cIik7XG5leHBvcnRzLlJvb20gPSBSb29tXzEuUm9vbTtcbnZhciBNZXNzYWdlXzEgPSByZXF1aXJlKFwiLi9lbnRpdHkvTWVzc2FnZVwiKTtcbmV4cG9ydHMuTWVzc2FnZSA9IE1lc3NhZ2VfMS5NZXNzYWdlO1xudmFyIFVzZXJSZXBvc2l0b3J5XzEgPSByZXF1aXJlKFwiLi9yZXBvc2l0b3J5L1VzZXJSZXBvc2l0b3J5XCIpO1xuZXhwb3J0cy5Vc2VyUmVwb3NpdG9yeSA9IFVzZXJSZXBvc2l0b3J5XzEuVXNlclJlcG9zaXRvcnk7XG52YXIgQ29uZmlnXzEgPSByZXF1aXJlKFwiLi9Db25maWdcIik7XG5leHBvcnRzLkNvbmZpZyA9IENvbmZpZ18xLkNvbmZpZztcbi8vIERpcnR5IEV4YW1wbGVzXG4vKiBjb25zdCBjb25maWcgPSBuZXcgQ29uZmlnKCdodHRwOi8vMTkyLjE2OC4xLjU0OjgwODAnKTtcbmNvbmZpZy50b2tlbiA9ICdUT0tFTic7XG5cbmNvbnN0IHJlcG8gPSBuZXcgVXNlclJlcG9zaXRvcnkoKTtcblxucmVwby5maW5kKCkudGhlbigodXNlcnM6IFVzZXJbXSkgPT4ge1xuICBjb25zb2xlLmxvZyh1c2Vycyk7XG59KTtcblxucmVwby5jcmVhdGUoe1xuICB1c2VybmFtZTogJ3N1cGVyLXRlc3QnLFxuICBwYXNzd29yZDogJ3N1cGVyLXRlc3QnLFxufSkudGhlbigodXNlcjpVc2VyKSA9PiB7XG4gIGNvbnNvbGUubG9nKHVzZXIpO1xufSk7ICovXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBVc2VyXzEgPSByZXF1aXJlKFwiLi4vZW50aXR5L1VzZXJcIik7XG52YXIgVXNlclJlcG9zaXRvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXNlclJlcG9zaXRvcnkoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cbiAgICBVc2VyUmVwb3NpdG9yeS5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuY29uZmlnLmJhc2VVcmwgKyAnL2FwaS91c2VycycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuY29uZmlnLnRva2VuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChvYmplY3RzKSB7XG4gICAgICAgICAgICB2YXIgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgICAgIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChPYmplY3QuYXNzaWduKG5ldyBVc2VyXzEuVXNlcigpLCBvYmplY3QpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGZpbmRPbmUoaWQ6IG51bWJlcilcbiAgICBVc2VyUmVwb3NpdG9yeS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuY29uZmlnLmJhc2VVcmwgKyAnL2FwaS91c2VycycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5jb25maWcudG9rZW4sXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBVc2VyXzEuVXNlcigpLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBVc2VyUmVwb3NpdG9yeTtcbn0oKSk7XG5leHBvcnRzLlVzZXJSZXBvc2l0b3J5ID0gVXNlclJlcG9zaXRvcnk7XG4iLCJpbXBvcnQge0NvbmZpZywgVXNlciwgVXNlclJlcG9zaXRvcnl9IGZyb20gJ01pbmktTGlicmFpcmllJztcclxuXHJcbmNvbnN0IGNvbmZpZyA9IG5ldyBDb25maWcoJ2h0dHA6Ly8xOTIuMTY4LjEuNTQ6ODA4MCcpO1xyXG5jb25maWcudG9rZW4gPSAnVE9LRU4nO1xyXG5cclxuY29uc3QgcmVwbyA9IG5ldyBVc2VyUmVwb3NpdG9yeShjb25maWcpO1xyXG5cclxucmVwby5maW5kKCkudGhlbigodXNlcnM6IFVzZXJbXSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHVzZXJzKTtcclxufSk7XHJcblxyXG5yZXBvLmNyZWF0ZSh7XHJcbiAgdXNlcm5hbWU6ICdzdXBlci10ZXN0JyxcclxuICBwYXNzd29yZDogJ3N1cGVyLXRlc3QnLFxyXG59KS50aGVuKCh1c2VyOlVzZXIpID0+IHtcclxuICBjb25zb2xlLmxvZyh1c2VyKTtcclxufSk7XHJcbiJdfQ==
