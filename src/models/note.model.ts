import {Entity, model, property} from '@loopback/repository';

@model()
export class Note extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    name: "person_id",
    type: 'number',
    required: true,
  })
  personId: number;
  
  @property({
    type: 'string',
    required: true,
  })
  title: string;

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


  constructor(data?: Partial<Note>) {
    super(data);
  }
}

export interface NoteRelations {
  // describe navigational properties here
}

export type NoteWithRelations = Note & NoteRelations;
