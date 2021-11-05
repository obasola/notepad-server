import {Entity, model, property} from '@loopback/repository';

@model()
export class Person extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    name: 'email_address',
    type: 'string',
    required: true,
  })
  emailAddress: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    name: "first_name",
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    name: "last_name",
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  gender: string;

  @property({
    type: 'boolean',
    required: true,
  })
  active: boolean;

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



  constructor(data?: Partial<Person>) {
    super(data);
  }
}

export interface PersonRelations {
  // describe navigational properties here
}

export type PersonWithRelations = Person & PersonRelations;
