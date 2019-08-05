import { ServerUrlPipe } from './server-url.pipe';

describe('ServerUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new ServerUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
