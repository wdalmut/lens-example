const R = require('ramda');

let contacts_lens = R.lens(R.prop('contacts'), R.assoc('contacts_nr'))
const contacts_count = R.over(contacts_lens, R.length)
const omit_contacts_list_after_apply_contact_count = R.compose(R.omit(['contacts']), contacts_count);

let obj = [
  { name: "Ciao", contacts: [ {},{},{} ], },
  { name: "Pippo", contacts: [ {} ], },
  { name: "Pluto", contacts: [], }
];

let res = R.map(omit_contacts_list_after_apply_contact_count, obj);

// esempio con query
//repo.list().then(R.map(omit_contacts_list_after_apply_contact_count))

// senza il compose
//let res = R.map(contacts_count, obj);
//res = R.map(R.omit(['contacts']), res);

console.log(res);

