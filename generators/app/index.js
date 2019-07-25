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
        eslint: '^3.15.0'
      },
      dependencies: {
        react: '^16.2.0'
      }
    };
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);//
    this.fs.copy(
      this.templatePath('base/'),
      this.destinationPath('base/')
    );
    this.fs.copy(
      this.templatePath('common/'),
      this.destinationPath('common/')
    );
   /* this.fs.copy(
      this.templatePath('css'),
      // this.destinationPath('css/')
    );
    this.fs.copy(
      this.templatePath('images'),
      // this.destinationPath('images/')
    );
    this.fs.copy(
      this.templatePath('js'),
      // this.destinationPath('js/')
    );*/
  }

  conflicts(){

  }

  install() {
    // this.installDependencies();//调用bower和npm安装依赖
    this.npmInstall();//调用npm安装依赖
  }

  end(){

  }
};
