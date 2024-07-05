import { setupWorker } from "msw/browser";
import { HttpResponse, http } from 'msw';

export const worker = setupWorker(...[
  http.get('/api-sample', () => {
    return HttpResponse.json({ user: { name: "taro" } });
  })
]);