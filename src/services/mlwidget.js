import request from "./api";

const init = async (button: string) => {
  const callback = params => {
    // eslint-disable-next-line
    const ml = self.cloudinary.createMediaLibrary(params, { insertHandler: () => {} }, button);
    console.log("XXXXXXXXXXXX", ml);
    return ml;
  };
  const serverParams = await request("/signature");
  console.log("XXXXXXXXXXXX", serverParams);
};

// const mloptions = {
//   button_class: "myBtn",
//   button_caption: "Insert Images",
//   default_transformations: [
//     [{ quality: "auto" }, { fetch_format: "auto" }],
//     [{ w_80, h_80, c_fill, g_auto, r_max }, { f_auto, q_auto }]
//   ]
// };

export { init };
