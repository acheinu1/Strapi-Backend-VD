module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e5179d7a55379ebae8a2519d98366242'),
  },
});
