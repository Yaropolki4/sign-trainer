import { imagesPath } from '@entities/songPreview';
import { config } from '@shared/config';

declare const self: ServiceWorkerGlobalScope;

const CACHE_NAME = 'image-cache-v1';

const isImageRequest = (url: string) => {
  return url.startsWith(`${config.apiUrl}/${imagesPath}`);
};

self.addEventListener('fetch', (event: FetchEvent) => {
  const { request } = event;

  if (isImageRequest(request.url)) {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(request, networkResponse.clone());

            return networkResponse;
          });
        });
      }),
    );
  }
});
