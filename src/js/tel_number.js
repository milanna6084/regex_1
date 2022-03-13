export default function correctNumber(arr) {
  return arr.map((item) => {
    const item1 = item.replace(/[\s)-]/g, '');
    return item1.replace(/8\(/, '+7');
  });
}
