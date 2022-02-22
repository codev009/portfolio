import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
   projectId: 'jliewf2t',
   dataset: 'production',
   apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skve22Mf2MBltGNmQFSoQWCB58pCmPgYXPddb5o87kD83BGJyFvjDcXKBcDNZ5GguW6YkDLZXdEgH3PDeAJhHJdf4Ntar9ADH9I810KCkDgd3AmWq2lgg52Z4VbF2uICFJppldr38w6DohuVgipzDxrr7KWxe7YY8DOhr9rquepewDYbDvfC',
});