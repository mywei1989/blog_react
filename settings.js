/*class Config {
  url:'http://localhost:3001'
};

export default Config;*/

//export var url = 'http://localhost:3001';
//export var firstName = 'Michael';

class Settings{
  static getServiceUrl(){
    return 'http://localhost:3001';
  }
}

export default Settings;

