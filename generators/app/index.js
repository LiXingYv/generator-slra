'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  //初始化方法，用于获取项目状态、配置等
  initializing() {
    this.props = {};
  }
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the bedazzling ${chalk.red('generator-slra')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      },
      {
        type:'input',
        name:'appName',
        message:'What is your project name ?',
        default:"medcare-app"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  configuring(){

  }

  defaults() {
    // if (path.basename(this.destinationPath()) !== this.props.projectName) {
    //   this.log(
    //     'Your generator must be inside a folder named ' + this.props.projectName + '\n' +
    //     'I\'ll automatically create this folder.'
    //   );
    //   //  引用mkdirp模块创建文件夹 ,this.destinationRoot 设置要创建的工程的根目录。
    //   mkdirp(this.props.projectName);
    //   this.destinationRoot(this.destinationPath(this.props.projectName));
    // }
  }

  writing() {
    const pkgJson = {
      devDependencies: {

      },
      dependencies: {

      }
    };
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);//
    this.fs.copy(
      this.templatePath('assets/'),
      this.destinationPath('assets/')
    );
    this.fs.copy(
      this.templatePath('base/'),
      this.destinationPath('base/')
    );
    this.fs.copy(
      this.templatePath('css/'),
      this.destinationPath('css/')
    );
    // mkdir("dist")
    this.fs.copy(
      this.templatePath('js/'),
      this.destinationPath('js/')
    );
    this.fs.copy(
      this.templatePath('lib/'),
      this.destinationPath('lib/')
    );
    this.fs.copy(
      this.templatePath('page/'),
      this.destinationPath('page/')
    );
    this.fs.copy(
      this.templatePath('pageDefine/'),
      this.destinationPath('pageDefine/')
    );
    this.fs.copy(
      this.templatePath('templates/'),
      this.destinationPath('templates/')
    );
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
  }

  conflicts(){

  }

  install() {
    console.log("正在安装依赖，请稍侯……")
    // this.installDependencies();//调用bower和npm安装依赖
    this.npmInstall();//调用npm安装依赖
  }

  end(){
    console.log("脚手架创建完成，现在可以创建基于jquery和bootstrap的项目了！")
  }
};
