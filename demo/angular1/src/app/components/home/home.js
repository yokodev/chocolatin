import inject from 'ng-inject';

@inject('test')
class NetflixHome {
  message = 'Hello World ! This is NetflixHome component !';

  ngOnInit() {
    console.log(this.message);
    console.log(this.test.increment(1));
  }
}

export default NetflixHome;
