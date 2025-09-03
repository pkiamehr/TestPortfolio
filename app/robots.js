// export default function robots() {
//   return {
//     rules: [{ userAgent: "*", allow: "/" }],
//     sitemap: "https://kiamehr.dev/sitemap.xml",
//   };
// }
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",  
        disallow: "/",   
      },
    ],
    
  };
}