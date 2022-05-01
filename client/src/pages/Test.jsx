// import React from "react";
// import axios from "axios";
// import { useState } from "react";
// // import { Upload, message } from "antd";
// // import { InboxOutlined } from "@ant-design/icons";
// // import "antd/dist/antd.css";

// // const { Dragger } = Upload;

// // const props = {
// //   name: "file",
// //   multiple: true,
// //   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
// //   onChange(info) {
// //     const { status } = info.file;
// //     if (status !== "uploading") {
// //       console.log(info.file, info.fileList);
// //     }
// //     if (status === "done") {
// //       message.success(`${info.file.name} file uploaded successfully.`);
// //     } else if (status === "error") {
// //       message.error(`${info.file.name} file upload failed.`);
// //     }
// //   },
// //   onDrop(e) {
// //     console.log("Dropped files", e.dataTransfer.files);
// //   },
// // };
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const newPost = {
//     username: user.username,
//     title,
//     desc,
//   };
//   if (file) {
//     const data = new FormData();
//     const filename = Date.now() + file.name;
//     data.append("name", filename);
//     data.append("file", file);
//     newPost.photo = filename;
//     try {
//       await axios.post("/upload", data);
//     } catch (error) {}
//   }
//   if(cats) {
//     newPost.categories = cats;
//   }
//   try {
//     const res = await axios.post("/posts", newPost);
//     console.log(res.data);
//     window.location.replace("/posts/" + res.data._id);
//   } catch (error) {}
// };

// export default function Test() {
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//             <label>product</label>
//             <input type="text" placeholder='product' onChange={(e)=>{setName(e.target.value)}}/>
//             <br />

//       <label htmlFor="thumbnailInput">thumbnail</label>
//             <input type="file" id='thumbnailInput' onChange={(e)=>{setFile(e.target.files[0])}} />
//             <br />

//       <label htmlFor="imagesInput">images</label>
//             <input multiple type="file" id='imagesInput' name="uploadImages" onChange={(e)=>{setFiles(e.target.files)}} />
//             <br />

//             <button type='submit'>send</button>
//         </form>

//       {file && (<img src={URL.createObjectURL(file)} alt="" />)}

//       {/* <Dragger {...props}>
//         <p className="ant-upload-drag-icon">
//           <InboxOutlined />
//         </p>
//         <p className="ant-upload-text">
//           Click or drag file to this area to upload
//         </p>
//         <p className="ant-upload-hint">
//           Support for a single or bulk upload. Strictly prohibit from uploading
//           company data or other band files
//         </p>
//       </Dragger> */}
//     </div>
//   );
// }
