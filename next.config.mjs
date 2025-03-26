// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     webpack: (config) => {
//       config.resolve.fallback = { canvas: false }; // Prevents Next.js from resolving 'canvas'
//       return config;
//     },
//   };
  
//   export default nextConfig;
//   /** @type {import('next').NextConfig} */
// const nextConfig = {
//     webpack: (config) => {
//       config.resolve.fallback = { canvas: false }; // Ignore 'canvas' in the browser
//       return config;
//     },
//   };
  
//   export default nextConfig;
  /** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve.fallback = {
        canvas: false, // Ignore 'canvas' module
      };
      return config;
    },
  };
  
  export default nextConfig;
  