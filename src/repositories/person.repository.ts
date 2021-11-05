import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NotepadDsDataSource} from '../datasources';
import {Person, PersonRelations} from '../models';

export class PersonRepository extends DefaultCrudRepository<
  Person,
  typeof Person.prototype.id,
  PersonRelations
> {
  constructor(
    @inject('datasources.notepad_ds') dataSource: NotepadDsDataSource,
  ) {
    super(Person, dataSource);
  }
}
