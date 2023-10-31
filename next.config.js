const million = require("million/compiler");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = million.next(nextConfig);

const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({

});
