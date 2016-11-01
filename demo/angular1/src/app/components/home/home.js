import inject from 'ng-inject';

@inject('test')
class Home {
  message = 'Hello World ! This is home component !';

  ngOnInit() {
    console.log(this.message);
    console.log(this.test.increment(1));
  }
}

export default Home;
