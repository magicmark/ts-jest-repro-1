it('should be a foo', async () => {
  const foo = await import('../src/foo');
  console.log(foo);

  // Expected assertion (does not currently work) - this throws :(
  // expect(typeof foo.default).toBe('function');

  // This currently passes :(
  expect(typeof foo.default.default).toBe('function');
});
