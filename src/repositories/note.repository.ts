import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NotepadDsDataSource} from '../datasources';
import {Note, NoteRelations} from '../models';

export class NoteRepository extends DefaultCrudRepository<
  Note,
  typeof Note.prototype.id,
  NoteRelations
> {
  constructor(
    @inject('datasources.notepad_ds') dataSource: NotepadDsDataSource,
  ) {
    super(Note, dataSource);
  }
}
