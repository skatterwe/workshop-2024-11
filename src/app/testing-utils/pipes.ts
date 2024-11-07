import { Pipe } from '@angular/core';

export const mockPipe = (options: Pipe) => {
  const metadata: Pipe = {
    name: options.name,
  };

  return <any>Pipe(metadata)(
    class MockPipe {
      transform(v: any) {
        return v;
      }
    },
  );
};
