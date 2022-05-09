module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: 'AKIAROMJYJEAGGKD2PVK',
        secretAccessKey: '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',
        region: 'eu-central-1',
        params: {
          Bucket: 'reframe-strapi',
        },
      },
    },
  },
  // ...
});
