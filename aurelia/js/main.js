export const configure = ( aurelia ) => {
  aurelia.use
    .developmentLogging()
    .standardConfiguration();

  aurelia.start().then(() => aurelia.setRoot());
};
