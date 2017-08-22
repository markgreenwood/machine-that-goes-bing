module.exports = [
  {
    method: 'GET',
    path: '/bing',
    handler: (request, reply) => {
      let pageHtml = `
      <h1>The Machine That Goes Bing</h1>
      <em>Bing!</em>
      `;

      return reply(pageHtml);
    }
  }
]