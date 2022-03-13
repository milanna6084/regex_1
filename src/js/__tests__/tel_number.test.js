import correctNumber from '../tel_number';

const telArray = [
  '8 (927) 000-00-00',
  '+7 960 000 00 00',
  '+86 000 000 0000',
];


test(('write number in valid format'), (() => {
  const result = correctNumber(telArray);
  const expected = [
    '+79270000000',
    '+79600000000',
    '+860000000000',
  ];
  expect(expected).toEqual(result);
}));
