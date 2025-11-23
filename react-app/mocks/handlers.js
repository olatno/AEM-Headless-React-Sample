import { rest } from 'msw';

export const handlers = [
  rest.get('/content/:sitePath+.model.json', (req, res, ctx) => {
    return res(
      ctx.json({
        resourceType: 'myproject/components/page',
        children: [
          { resourceType: 'myproject/components/hero', title: 'Mock Hero', description: 'Mocked by MSW', image: { _path: '/content/dam/mock/hero.jpg' } },
          { resourceType: 'myproject/components/text', text: '<p>This is mocked text</p>' }
        ]
      })
    );
  }),

  rest.post('/content/cq:graphql/myproject/endpoint.json', (req, res, ctx) => {
    return res(ctx.json({ data: { articleList: { items: [{ title: 'Mock article', body: { html: '<p>mock</p>' } }] } } }));
  })
];
