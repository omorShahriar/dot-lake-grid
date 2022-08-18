import { supabase } from "~/utils/supabase";
export const getImages = async (column, limit, offset = 0) => {
  const { data } = await supabase.storage.from("images").list(column, {
    limit,
    offset,
    sortBy: { column: "name", order: "asc" },
  });

  if (data.length != 0) {
    const imagePaths = data.map((img) => `${column}/${img.name}`);
    const imageLinks = await supabase.storage
      .from("images")
      .createSignedUrls(imagePaths, 3600);

    const imageData = imageLinks.data.map((img) => ({
      name: img.path.split("/")[1].split(".")[0],
      url: img.signedURL,
    }));
    return imageData;
  }

  return null;
};
