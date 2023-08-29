import Timeline from '../Timeline';

const timeline = new Timeline();

test('Неверное значение (не задан один параметр)', () => {
  const current = timeline.toValidate('55');
  const result = false;

  expect(current).toEqual(result);
});

test('Неверное значение широты', () => {
  const current = timeline.toValidate('155, 38');
  const result = false;

  expect(current).toEqual(result);
});

test('Неверное значение долготы', () => {
  const current = timeline.toValidate('55, 238');
  const result = false;

  expect(current).toEqual(result);
});

test('Верные данные', () => {
  const current = timeline.toValidate('55, 38');
  const result = '[55°,  38°]';

  expect(current).toEqual(result);
});
