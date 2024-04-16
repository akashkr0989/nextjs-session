// "use client";

// import httpService from "@/services/http.service";
// import { useEffect, useState } from "react";

// const fetchCategoryList = (categoryId: string) => {
//   const [categoryList, setCategoryList] = useState<any>([]);

//   useEffect(() => {
//       const fetchData = async () => {
//           try {
//               const payloadReceived: any = await httpService.get('media/v1/videos/search?limit=10&category=65e9831e8549fe97001a54a0');

//               console.log(payloadReceived);
//       } catch (error) {
//           console.log('Error fetching Category list', error)
//       }
//       fetchData();
//   }, [categoryId]);

//   return categoryList;
// };

// export default fetchCategoryList;


// "use client";

// import httpService from "@/services/http.service";
// import { useEffect, useState } from "react";

// const fetchCategoryList = () => {
//   const [categoryList, setCategoryList] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const payloadReceived: any = await httpService.get('media/v1/videos/search?limit=10&category=65e9831e8549fe97001a54a0');
//         console.log(payloadReceived);
//         // Assuming you want to set the received data to categoryList
//         // setCategoryList(payloadReceived);
//       } catch (error) {
//         console.log('Error fetching Category list', error)
//       }
//     };
//     fetchData();
//   }, []);

//   return categoryList;
// };

// export default fetchCategoryList;
