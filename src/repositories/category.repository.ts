import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NotepadDsDataSource} from '../datasources';
import {Category, CategoryRelations} from '../models';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.id,
  CategoryRelations
> {
  constructor(
    @inject('datasources.notepad_ds') dataSource: NotepadDsDataSource,
  ) {
    super(Category, dataSource);
  }
}
