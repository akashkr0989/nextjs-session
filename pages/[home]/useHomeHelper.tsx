"use client";

import { API_END_POINTS } from "@/constants/api-endPoints";
import { APIResponse } from "@/interfaces/common.interface";
import {
  HomePageAPIResponse,
  HomePageCategoryWiseInterface,
} from "@/interfaces/homePage.interface";
import httpService from "@/services/http.service";
import { useEffect, useState } from "react";

const useHomeAPICall = (): any => {
  const [home, setHome] = useState<HomePageCategoryWiseInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payloadReceived: APIResponse = await httpService.get(
          API_END_POINTS.GET_HOME_PAGE_DATA
        );
        let content: HomePageAPIResponse[] = payloadReceived.result.listing;

        const categoryList: HomePageCategoryWiseInterface[] = content.map(
          (element: any, index: number) => {
            return {
              categoryName: element?.name,
              categoryId: element?._id,
              videoListLength: element?.result.length,
              videoList: element?.result.map((ele: any, index: number) => {
                return {
                  name: ele?.title,
                  description: ele?.description,
                  id: ele?.id,
                  thumbnail: ele?.thumbnails[0]?.path,
                  discretion: ele?.discretion,
                  genres: ele?.genres,
                  duration: ele?.duration
                };
              }),

              // videoList: [
              //   {
              //     name: "Appinventiv movie",
              //     description: "Appinventiventors",
              //     id: "con-M1E27SUEI6",
              //     thumbnail:
              //       "https://ottacceleratordev.s3.us-east-1.amazonaws.com/public/videos/filename_con-YDFZU72ZR0/video_1710421664938.png",
              //   },
              //   {
              //     name: "Appinventive Noida",
              //     description: "Appinventive Noida! Description",
              //     id: "con-TXNQLCIFHW",
              //     thumbnail:
              //       "https://ottacceleratordev.s3.us-east-1.amazonaws.com/public/videos/filename_con-BAJ8JTO7FF/video_1710420075914.png",
              //   },
              //   {
              //     name: "Dummy 3",
              //     description: "Description for Dummy 3",
              //     id: "con-ABC123",
              //     thumbnail:
              //       "https://ottacceleratordev.s3.us-east-1.amazonaws.com/public/videos/filename_con-BAJ8JTO7FF/video_1710420075914.png",
              //   },
              //   {
              //     name: "Dummy 4",
              //     description: "Description for Dummy 4",
              //     id: "con-DEF456",
              //     thumbnail:
              //       "https://ottacceleratordev.s3.us-east-1.amazonaws.com/public/videos/filename_con-BAJ8JTO7FF/video_1710420075914.png",
              //   },
              //   {
              //     name: "Dummy 5",
              //     description: "Description for Dummy 5",
              //     id: "con-GHI789",
              //     thumbnail:
              //       "https://ottacceleratordev.s3.us-east-1.amazonaws.com/public/videos/filename_con-BAJ8JTO7FF/video_1710420075914.png",
              //   },
              //   {
              //     name: "Dummy 6",
              //     description: "Description for Dummy 6",
              //     id: "con-JKL012",
              //     thumbnail:
              //       "https://ottacceleratordev.s3.us-east-1.amazonaws.com/public/videos/filename_con-BAJ8JTO7FF/video_1710420075914.png",
              //   },
              //   {
              //       "name": "Dummy 7",
              //       "description": "Description for Dummy 7",
              //       "id": "con-MNO345",
              //       "thumbnail": "https://ottacceleratordev.s3.us-east-1.amazonaws.com/public/videos/filename_con-BAJ8JTO7FF/video_1710420075914.png"
              //   },
              // {
              //     "name": "Dummy 8",
              //     "description": "Description for Dummy 8",
              //     "id": "con-PQR678",
              //     "thumbnail": ""
              // },
              // {
              //     "name": "Dummy 9",
              //     "description": "Description for Dummy 9",
              //     "id": "con-STU901",
              //     "thumbnail": ""
              // },
              // {
              //     "name": "Dummy 10",
              //     "description": "Description for Dummy 10",
              //     "id": "con-VWX234",
              //     "thumbnail": ""
              // }
              // ],
            };
          }
        );
        setHome(categoryList);
      } catch (error) {
        console.log("Error fetching Home  API data", error);
      }
    };
    fetchData();
  }, []);
  return [home];
};

export default useHomeAPICall;

/////////////////muvi///////////////////////////////////////////////

// import { useEffect, useState } from "react";
// import moment from "moment";
// import httpService from "@/services/http.service";
// import { apiEndpoints } from "@/constants/api-endpoints";

// const usePlayerHandler = () => {
//   const [playList, setPlayList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = new FormData();
//         data.append("secret_key", "d189e8d59cc94366a36cf0c23ebb313b");
//         data.append("app_id", "6888a6937f184a38a47fa6599516717a");
//         // data.append("secret_key", "e5d66fe398d6412c863978ab55cd8eac");
//         // data.append("app_id", "9023f3b86e194c088f99f999bafbf038");
//         const result: any = await httpService.post(apiEndpoints.getToken, data);
//         localStorage.setItem(
//           "access_token",
//           result.response.access_token || ""
//         );
//         localStorage.setItem("app_token", result.data.app_token || "");
//         localStorage.setItem("product_key", result.data.product_key || "");

//         const content: any = await httpService.post(apiEndpoints.getContent, {
//           query: `{ contentList(app_token:"${localStorage.getItem(
//             "app_token"
//           )}", product_key:"${localStorage.getItem(
//             "product_key"
//           )}", page:1, per_page:10, content_asset_type:"1", sort_by:"otn"){ page_info{ total_count } content_list{ content_uuid content_name content_desc content_permalink content_search_tag content_category_uuid content_sub_category_uuid content_template_uuid content_parent_uuid content_asset_type content_asset_uuid content_trailer_uuid content_poster_uuid content_banner_uuid content_app_poster_uuid store_key app_token product_key content_user_uuid content_accessibility content_created_date content_updated_date content_trans{ content_trans_uuid content_trans_field_uuid content_trans_field_value content_trans_content_uuid } categories{ category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date sub_category{ category_uuid category_name category_parent_uuid category_permalink category_image_uuid created_date } } content_created_by content_updated_by content_level tags posters{ website{ file_uuid file_name file_url } tv_apps{ file_uuid file_name file_url } mobile_apps{ file_uuid file_name file_url } } banners{ website{ file_uuid file_name file_url } tv_apps{ file_uuid file_name file_url } mobile_apps{ file_uuid file_name file_url } } content_tvapp_poster_uuid content_mobileapp_poster_uuid content_tvapp_banner_uuid content_mobileapp_banner_uuid app_poster_details{ image_uuid file_name file_url } is_encoded cast_details{ cast_uuid cast_name cast_bio cast_image_uuid created_date cast_image_details{ image_uuid file_name file_url } app_token product_key store_key cast_type_details{ cast_type_uuid cast_type_name } no_image_available_url } no_image_available_url permalink_type path is_parent no_of_child_content root_parent_uuid video_details{ video_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{ resolution url } encoded_url{ resolution url } offline_url{ resolution url } } trailer_details{ video_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{ resolution url } encoded_url{ resolution url } offline_url{ resolution url } } audio_details{ audio_uuid file_name file_url is_feed is_drm duration expected_duration reference_uuid stream_type stream_format mpeg_path hls_path content_key encryption_key is_offline ecnoding_provider_uuid drm_provider_uuid third_party_url resolution_details{ resolution url } encoded_url{ resolution url } offline_url{ resolution url } } } } }`,
//         });

//         const playListArray = content.data.contentList.content_list.map(
//           (element: any, index: number) => {
//             const videoObj = {
//               name: element?.content_name || "",
//               description: element?.content_desc || "",
//               duration:
//                 moment.duration(element?.video_details?.duration).asSeconds() ||
//                 "",
//               sources: [
//                 {
//                   src: element?.video_details?.hls_path || "",
//                   type: "application/vnd.apple.mpegurl",
//                 },
//               ],
//               poster:
//                 element?.posters?.website && element.posters.website[0].file_url
//                   ? element?.posters?.website[0]?.file_url
//                   : element?.no_image_available_url,
//               thumbnail: [
//                 {
//                   srcset:
//                     element?.posters?.website &&
//                     element.posters.website[0].file_url
//                       ? element?.posters?.website[0]?.file_url
//                       : element?.no_image_available_url,
//                   type: "image/png",
//                   media: "(min-width: 400px;)",
//                 },
//                 {
//                   src:
//                     element?.posters?.website &&
//                     element.posters.website[0].file_url
//                       ? element?.posters?.website[0]?.file_url
//                       : element?.no_image_available_url,
//                 },
//               ],
//               contentId: element?.content_uuid,
//             };
//             if (index === 0) {
//               return videoObj;
//             }
//             return {
//               ...videoObj,
//               sources: [
//                 ...videoObj.sources,
//                 {
//                   src: element?.video_details?.mpeg_path || "",
//                   type: "video/mp4",
//                 },
//               ],
//             };
//           }
//         );
//         setPlayList(playListArray);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   return  playList ;
// };

// export default usePlayerHandler;
