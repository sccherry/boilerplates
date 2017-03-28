export class App {
  configureRouter( config, router ) {
    config.title = 'Site Title';

    config.map([
      { route: ['', 'index'], name: 'home', moduleId: 'home', nav: true, title: 'Home' }
    ]);

    this.router = router;
  }
}
