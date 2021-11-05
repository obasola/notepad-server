import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'notepad_ds',
  connector: 'mssql',
  url: 'mssql://sa:yoruba2021@@localhost/NotePad',
  host: 'localhost',
  port: 1433,
  user: 'sa',
  password: 'yoruba2021@',
  database: 'NotePad'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class NotepadDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'notepad_ds';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.notepad_ds', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
