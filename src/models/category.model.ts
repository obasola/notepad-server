import { Entity, model, property } from '@loopback/repository';

@model()
export class Category extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    name: "person_id",
    type: 'number'
  })
  personId: number;

  @property({
    type: 'string',
    required: true,
  })
  code: string;

  @property({
    type: 'string',
    required: true,
  })
  note: string;

  @property({
    name: "date_recorded",
    type: 'date',
  })
  dateRecorded?: string;

  @property({
    name: "date_modified",
    type: 'date',
  })
  dateModified?: string;


  constructor (data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelations {
  // describe navigational properties here
}

export type CategoryWithRelations = Category & CategoryRelations;
