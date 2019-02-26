import { execute } from "./api";

const mloptions = {};

const init = async (button: string) => {
  const serverParams = await execute({ action: "/signature", method: "GET" });
  // eslint-disable-next-line
  const ml = self.cloudinary.createMediaLibrary({ ...serverParams, ...mloptions }, { insertHandler: () => {} }, button);
  return ml;
};

export { init };
